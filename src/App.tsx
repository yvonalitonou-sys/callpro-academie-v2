/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { TRAINING_MODULES } from "./data/modules";
import { UserProgressList, WrittenNote } from "./types";
import ModuleStudyView from "./components/ModuleStudyView";
import DiplomaCertificate from "./components/DiplomaCertificate";
import NotesEditor from "./components/NotesEditor";
import Waveform from "./components/Waveform";
import {
  Award, BookOpen, FileText, LayoutDashboard, ShieldAlert,
  Trash2, Trophy, Sparkles,
  ChevronRight, Lock, CheckCircle, BarChart3, Settings, Lightbulb
} from "lucide-react";

const STATE_PROGRESS_KEY = "callpro_state_progress_v1";
const STATE_NOTES_KEY = "callpro_state_notes_v1";
// NOTE: client-side password gating cannot be made fully secure in a static
// front-end app (anything shipped to the browser can be read in the bundle).
// This is a soft deterrent for an internal training tool, not a real auth
// boundary. For genuine access control, this needs a backend.
const ADMIN_PASSCODE = "callpro-direction-26";

export default function App() {
  const [currentTab, setCurrentTab] = useState<"accueil" | "modules" | "notes" | "certificat" | "admin">("accueil");
  const [selectedModuleId, setSelectedModuleId] = useState<number | null>(null);

  const [activeConfirmModal, setActiveConfirmModal] = useState<{
    title: string;
    message: string;
    onConfirm: () => void;
    confirmText?: string;
    cancelText?: string;
    isDanger?: boolean;
  } | null>(null);

  const [notification, setNotification] = useState<{
    message: string;
    type: "success" | "info" | "error";
  } | null>(null);

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const [userFullName, setUserFullName] = useState<string>(() => {
    const saved = localStorage.getItem("callpro_user_fullname");
    if (saved === "Yvon Alitonou") return "";
    return saved || "";
  });

  const [progress, setProgress] = useState<UserProgressList>(() => {
    const saved = localStorage.getItem(STATE_PROGRESS_KEY);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (err) {
        console.error("Erreur de parsing de la progression", err);
      }
    }
    const defaultProgress: UserProgressList = {};
    TRAINING_MODULES.forEach(mod => {
      defaultProgress[mod.id] = { completed: false, quizScore: 0, quizDone: false };
    });
    return defaultProgress;
  });

  const [notes, setNotes] = useState<WrittenNote>(() => {
    const saved = localStorage.getItem(STATE_NOTES_KEY);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (err) {
        console.error("Erreur de parsing des notes de cours", err);
      }
    }
    const defaultNotes: WrittenNote = {};
    TRAINING_MODULES.forEach(mod => {
      defaultNotes[mod.id] = "";
    });
    return defaultNotes;
  });

  const [adminPassword, setAdminPassword] = useState("");
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(() => {
    return localStorage.getItem("callpro_admin_authed") === "true";
  });
  const [adminError, setAdminError] = useState("");

  useEffect(() => {
    localStorage.setItem(STATE_PROGRESS_KEY, JSON.stringify(progress));
  }, [progress]);

  useEffect(() => {
    localStorage.setItem(STATE_NOTES_KEY, JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    localStorage.setItem("callpro_user_fullname", userFullName);
  }, [userFullName]);

  const totalModules = TRAINING_MODULES.length;
  const progressList = Object.values(progress) as { completed: boolean; quizScore: number; quizDone: boolean }[];
  const completedModulesCount = progressList.filter(p => p.completed || p.quizDone).length;
  const overallProgressPercentage = totalModules > 0 ? (completedModulesCount / totalModules) * 100 : 0;

  const validQuizzes = progressList.filter(p => p.quizDone);
  const averageQuizScore = validQuizzes.length > 0
    ? validQuizzes.reduce((acc, curr) => acc + curr.quizScore, 0) / validQuizzes.length
    : 0;

  const handleQuizGrade = (moduleId: number, scorePercent: number) => {
    setProgress(prev => {
      const updated = { ...prev };
      updated[moduleId] = {
        completed: scorePercent >= 80,
        quizScore: Math.max(prev[moduleId]?.quizScore || 0, scorePercent),
        quizDone: true
      };
      return updated;
    });
  };

  const handleSaveNotes = (updatedNotes: WrittenNote) => {
    setNotes(updatedNotes);
  };

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminPassword === ADMIN_PASSCODE) {
      setIsAdminAuthenticated(true);
      localStorage.setItem("callpro_admin_authed", "true");
      setAdminError("");
      setAdminPassword("");
    } else {
      setAdminError("Code d'accès incorrect. Réessayez.");
    }
  };

  const handleAdminLogout = () => {
    setIsAdminAuthenticated(false);
    localStorage.removeItem("callpro_admin_authed");
  };

  const handleResetProgress = () => {
    setActiveConfirmModal({
      title: "Réinitialiser toute la progression ?",
      message: "Cette action supprime définitivement votre progression sur les 12 modules ainsi que toutes vos notes de cours. Elle est irréversible.",
      confirmText: "Réinitialiser",
      cancelText: "Annuler",
      isDanger: true,
      onConfirm: () => {
        const resetProgress: UserProgressList = {};
        TRAINING_MODULES.forEach(mod => {
          resetProgress[mod.id] = { completed: false, quizScore: 0, quizDone: false };
        });
        setProgress(resetProgress);

        const resetNotes: WrittenNote = {};
        TRAINING_MODULES.forEach(mod => {
          resetNotes[mod.id] = "";
        });
        setNotes(resetNotes);

        setSelectedModuleId(null);
        setCurrentTab("accueil");
        setActiveConfirmModal(null);
        setNotification({
          message: "Progression et notes remises à zéro.",
          type: "success"
        });
      }
    });
  };

  const handleCheatUnlock = () => {
    setActiveConfirmModal({
      title: "Valider les 12 modules à 100% ?",
      message: "Utile pour tester l'éligibilité au certificat sans repasser les évaluations. Cette action écrase les scores actuels.",
      confirmText: "Valider",
      cancelText: "Annuler",
      isDanger: false,
      onConfirm: () => {
        const cheatedProgress: UserProgressList = {};
        TRAINING_MODULES.forEach(mod => {
          cheatedProgress[mod.id] = { completed: true, quizScore: 100, quizDone: true };
        });
        setProgress(cheatedProgress);
        setActiveConfirmModal(null);
        setNotification({
          message: "Les 12 modules ont été validés à 100%.",
          type: "success"
        });
      }
    });
  };

  const NAV_ITEMS = [
    { id: "accueil", label: "Accueil", icon: LayoutDashboard },
    { id: "modules", label: "Formation", icon: BookOpen },
    { id: "notes", label: "Mes notes", icon: FileText },
    { id: "certificat", label: "Certificat", icon: Award },
    { id: "admin", label: "Direction", icon: Settings }
  ] as const;

  return (
    <div className="min-h-screen bg-ink flex flex-col selection:bg-rust/30 selection:text-paper">

      {/* Header */}
      <header className="sticky top-0 bg-ink/92 backdrop-blur-md border-b border-hairline z-50 px-6 py-4 no-print">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3.5">
            <Waveform height={28} bars={9} color="rust" />
            <div>
              <h1 className="text-lg font-display font-semibold text-paper tracking-tight leading-none">
                CallPro <span className="font-voice-italic text-rust">Académie</span>
              </h1>
              <p className="eyebrow mt-0.5">Formation au métier de conseiller client</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-0.5">
            {NAV_ITEMS.map(tab => {
              const Icon = tab.icon;
              const isActive = currentTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setCurrentTab(tab.id as any);
                    if (tab.id !== "modules") setSelectedModuleId(null);
                  }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-sm text-xs font-medium tracking-wide transition-all cursor-pointer ${
                    isActive
                      ? "text-rust-bright"
                      : "text-paper-dim/70 hover:text-paper"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" strokeWidth={1.75} />
                  {tab.label}
                </button>
              );
            })}
          </nav>

          <div className="flex items-center gap-2.5">
            <span className="eyebrow">Moyenne</span>
            <span className={`text-sm font-mono font-medium ${averageQuizScore >= 80 ? "text-sage-bright" : "text-rust-bright"}`}>
              {averageQuizScore.toFixed(0)}%
            </span>
          </div>
        </div>
      </header>

      {/* Mobile nav */}
      <div className="md:hidden flex justify-around bg-ink-soft border-b border-hairline px-2 py-2.5 sticky top-[65px] z-40 no-print">
        {NAV_ITEMS.map(tab => {
          const Icon = tab.icon;
          const isActive = currentTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                setCurrentTab(tab.id as any);
                if (tab.id !== "modules") setSelectedModuleId(null);
              }}
              className={`flex flex-col items-center gap-1 p-2 text-[10px] font-medium transition-all cursor-pointer ${
                isActive ? "text-rust-bright" : "text-paper-dim/60"
              }`}
            >
              <Icon className="w-4 h-4" strokeWidth={1.75} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      <main className="flex-1 w-full max-w-6xl mx-auto px-6 py-10 relative">

        {/* HOME */}
        {currentTab === "accueil" && (
          <div className="space-y-16 pb-12">

            {/* Hero */}
            <div className="grid grid-cols-1 md:grid-cols-[1.3fr_0.7fr] gap-12 items-end pb-12 border-b border-hairline">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Waveform height={20} bars={14} color="bronze" />
                  <span className="eyebrow">Académie professionnelle</span>
                </div>

                <h2 className="text-4xl md:text-6xl font-display font-medium text-paper leading-[1.05] tracking-tight">
                  La voix qui<br />
                  <span className="font-voice-italic text-rust">convertit.</span>
                </h2>

                <p className="text-base text-paper-dim leading-relaxed max-w-lg">
                  Douze modules pour maîtriser l'écoute active, la structure d'appel <strong className="text-paper">CROC</strong>, le traitement d'objections <strong className="text-paper">CRAC</strong>, et réussir avec assurance l'entretien de recrutement.
                </p>

                <div className="flex flex-wrap gap-3 pt-2">
                  <button
                    onClick={() => {
                      setCurrentTab("modules");
                      setSelectedModuleId(1);
                    }}
                    className="px-7 py-3 bg-rust hover:bg-rust-bright text-ink font-medium text-sm rounded-sm transition-all cursor-pointer"
                  >
                    Commencer la formation
                  </button>
                  <button
                    onClick={() => setCurrentTab("certificat")}
                    className="px-6 py-3 text-paper font-medium text-sm rounded-sm border border-hairline hover:border-bronze transition-all cursor-pointer"
                  >
                    Voir mon certificat
                  </button>
                </div>
              </div>

              {/* Progress dial */}
              <div className="flex flex-col items-center md:items-end gap-3">
                <div className="relative w-32 h-32">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 144 144">
                    <circle cx="72" cy="72" r="62" className="stroke-hairline" strokeWidth="1.5" fill="transparent" />
                    <circle
                      cx="72" cy="72" r="62"
                      stroke="#B8612F"
                      strokeWidth="2.5"
                      fill="transparent"
                      strokeDasharray="389.6"
                      strokeDashoffset={389.6 - (389.6 * overallProgressPercentage) / 100}
                      strokeLinecap="butt"
                      className="transition-all duration-1000"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-display font-medium text-paper">{overallProgressPercentage.toFixed(0)}%</span>
                  </div>
                </div>
                <p className="eyebrow">{completedModulesCount} / 12 modules validés</p>
              </div>
            </div>

            {/* Values - editorial three-column, no cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="space-y-2.5">
                <p className="font-display text-2xl text-bronze">01</p>
                <h4 className="text-base font-display font-medium text-paper">Aucun jargon, que du concret</h4>
                <p className="text-sm text-paper-dim leading-relaxed">
                  Des scripts d'appels réels, des dialogues commentés et des comparatifs précis. Rien à regarder, tout à pratiquer.
                </p>
              </div>

              <div className="space-y-2.5">
                <p className="font-display text-2xl text-bronze">02</p>
                <h4 className="text-base font-display font-medium text-paper">Évaluation exigeante</h4>
                <p className="text-sm text-paper-dim leading-relaxed">
                  Chaque module se conclut par un contrôle de compréhension. La barre de validation est fixée à 80%.
                </p>
              </div>

              <div className="space-y-2.5">
                <p className="font-display text-2xl text-bronze">03</p>
                <h4 className="text-base font-display font-medium text-paper">Certificat à la clé</h4>
                <p className="text-sm text-paper-dim leading-relaxed">
                  Les 12 modules validés débloquent un certificat CallPro, prêt à être montré en entretien.
                </p>
              </div>
            </div>

            {/* Modules catalog */}
            <div className="space-y-6">
              <div className="flex items-baseline justify-between border-b border-hairline pb-3">
                <h3 className="text-xl font-display font-medium text-paper">Le parcours</h3>
                <span className="eyebrow">12 modules</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-hairline">
                {TRAINING_MODULES.map(mod => {
                  const score = progress[mod.id]?.quizScore || 0;
                  const hasDone = progress[mod.id]?.completed || progress[mod.id]?.quizDone;
                  return (
                    <button
                      key={mod.id}
                      onClick={() => {
                        setCurrentTab("modules");
                        setSelectedModuleId(mod.id);
                      }}
                      className="bg-ink hover:bg-ink-lift p-5 text-left transition-all cursor-pointer group flex flex-col justify-between h-44"
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[11px] text-bronze">{String(mod.id).padStart(2, "0")}</span>
                          <span className="font-mono text-[10px] text-paper-dim/60">{mod.duration}</span>
                        </div>
                        <h5 className="text-sm font-display font-medium text-paper group-hover:text-rust-bright transition-colors leading-snug line-clamp-3">
                          {mod.title}
                        </h5>
                      </div>
                      <div className="flex items-center justify-between pt-2">
                        <span className="font-mono text-[10px] text-paper-dim/60">{hasDone ? `${score}%` : "—"}</span>
                        <ChevronRight className="w-3.5 h-3.5 text-bronze group-hover:text-rust-bright group-hover:translate-x-0.5 transition-all" strokeWidth={1.75} />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Methodology note */}
            <div className="border-l-2 border-rust pl-6 py-1 flex gap-4 items-start">
              <Lightbulb className="w-4 h-4 text-rust mt-1 flex-shrink-0" strokeWidth={1.75} />
              <div className="space-y-1">
                <h5 className="text-sm font-medium text-paper">Méthode de travail conseillée</h5>
                <p className="text-sm text-paper-dim leading-relaxed">
                  Lisez la leçon en entier, étudiez l'exemple concret pour vous approprier les formulations, notez vos remarques dans <strong className="text-paper">Mes notes</strong>, puis lancez l'évaluation. Vous pouvez la retenter autant de fois que nécessaire.
                </p>
              </div>
            </div>

          </div>
        )}

        {/* MODULES CATALOG + STUDY VIEW */}
        {currentTab === "modules" && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">

            <div className="lg:col-span-1 space-y-4 no-print h-fit lg:sticky lg:top-28">
              <h3 className="eyebrow border-b border-hairline pb-3">Plan de formation</h3>
              <div className="space-y-0.5 max-h-[560px] overflow-y-auto pr-1">
                {TRAINING_MODULES.map(mod => {
                  const active = selectedModuleId === mod.id;
                  const hasDone = progress[mod.id]?.completed || progress[mod.id]?.quizDone;
                  const score = progress[mod.id]?.quizScore || 0;

                  return (
                    <button
                      key={mod.id}
                      onClick={() => setSelectedModuleId(mod.id)}
                      className={`w-full text-left py-2.5 px-3 text-xs flex items-center justify-between cursor-pointer border-l-2 transition-all ${
                        active
                          ? "border-l-rust bg-ink-lift text-paper"
                          : "border-l-transparent text-paper-dim/70 hover:text-paper hover:bg-ink-soft"
                      }`}
                    >
                      <div className="truncate pr-1.5">
                        <p className="font-mono text-[10px] text-bronze">{String(mod.id).padStart(2, "0")}</p>
                        <p className="truncate font-medium">{mod.title}</p>
                      </div>
                      {hasDone ? (
                        <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${score >= 80 ? "bg-sage-bright" : "bg-rust-bright"}`} />
                      ) : (
                        <span className="w-1.5 h-1.5 rounded-full bg-hairline flex-shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-3">
              {selectedModuleId ? (
                (() => {
                  const activeModule = TRAINING_MODULES.find(m => m.id === selectedModuleId);
                  if (!activeModule) return <div className="text-paper-dim">Module introuvable.</div>;
                  return (
                    <ModuleStudyView
                      module={activeModule}
                      onQuizSubmit={(score) => handleQuizGrade(activeModule.id, score)}
                      savedScore={progress[activeModule.id]?.quizScore || 0}
                      isCompleted={progress[activeModule.id]?.completed || false}
                      onNextModule={selectedModuleId < 12 ? () => setSelectedModuleId(selectedModuleId + 1) : undefined}
                      onPrevModule={selectedModuleId > 1 ? () => setSelectedModuleId(selectedModuleId - 1) : undefined}
                    />
                  );
                })()
              ) : (
                <div className="panel p-14 text-center space-y-5">
                  <Waveform height={36} bars={16} color="bronze" className="justify-center" />
                  <div>
                    <h3 className="text-xl font-display font-medium text-paper">Prêt à commencer ?</h3>
                    <p className="text-sm text-paper-dim mt-2 max-w-sm mx-auto">
                      Choisissez un module dans le plan de formation à gauche pour ouvrir la leçon et l'évaluation.
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedModuleId(1)}
                    className="px-6 py-2.5 bg-rust hover:bg-rust-bright text-ink font-medium text-sm rounded-sm transition-all cursor-pointer"
                  >
                    Démarrer le module 1
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* NOTES */}
        {currentTab === "notes" && (
          <div className="space-y-8">
            <div className="pb-5 border-b border-hairline flex items-center justify-between">
              <div>
                <h2 className="text-xl font-display font-medium text-paper">Mes notes</h2>
                <p className="text-sm text-paper-dim mt-1">Vos annotations personnelles, module par module.</p>
              </div>
              <span className="eyebrow">Sauvegarde automatique</span>
            </div>

            <NotesEditor
              modules={TRAINING_MODULES}
              initialNotes={notes}
              onSaveNotes={handleSaveNotes}
            />
          </div>
        )}

        {/* CERTIFICATE */}
        {currentTab === "certificat" && (
          <div className="space-y-8">
            <div className="pb-5 border-b border-hairline no-print">
              <h2 className="text-xl font-display font-medium text-paper">Certificat CallPro</h2>
              <p className="text-sm text-paper-dim mt-1">Délivré dès lors que votre moyenne générale dépasse 80%.</p>
            </div>

            <DiplomaCertificate
              score={averageQuizScore}
              fullNameDefault={userFullName}
            />
          </div>
        )}

        {/* ADMIN */}
        {currentTab === "admin" && (
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="pb-5 border-b border-hairline flex items-center justify-between no-print">
              <div>
                <h2 className="text-xl font-display font-medium text-paper">Espace direction</h2>
                <p className="text-sm text-paper-dim mt-1">Suivi de la progression et outils de gestion des données locales.</p>
              </div>
              {isAdminAuthenticated && (
                <button
                  onClick={handleAdminLogout}
                  className="px-3.5 py-1.5 text-paper-dim hover:text-paper text-xs font-medium cursor-pointer border border-hairline hover:border-bronze rounded-sm transition-all"
                >
                  Se déconnecter
                </button>
              )}
            </div>

            {!isAdminAuthenticated ? (
              <div className="panel p-10 max-w-md mx-auto my-12 text-center space-y-6">
                <Lock className="w-7 h-7 text-bronze mx-auto" strokeWidth={1.5} />
                <div className="space-y-1">
                  <h4 className="text-base font-display font-medium text-paper">Accès restreint</h4>
                  <p className="text-sm text-paper-dim">Saisissez le code d'accès direction pour consulter les indicateurs.</p>
                </div>

                <form onSubmit={handleAdminLogin} className="space-y-4">
                  <input
                    type="password"
                    value={adminPassword}
                    onChange={(e) => setAdminPassword(e.target.value)}
                    placeholder="Code d'accès"
                    className="w-full bg-ink-soft border border-hairline rounded-sm py-2.5 px-3 text-sm text-paper focus:outline-none focus:border-rust placeholder-paper-dim/40 text-center font-mono"
                  />
                  {adminError && <p className="text-xs text-rust-bright font-medium">{adminError}</p>}
                  <button
                    type="submit"
                    className="w-full py-2.5 bg-rust hover:bg-rust-bright text-ink font-medium text-sm rounded-sm transition-all cursor-pointer"
                  >
                    Valider l'accès
                  </button>
                </form>
              </div>
            ) : (
              <div className="space-y-10">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-hairline">
                  <div className="bg-ink p-5 flex items-center gap-4">
                    <BarChart3 className="w-5 h-5 text-rust" strokeWidth={1.5} />
                    <div>
                      <p className="eyebrow">Progression globale</p>
                      <p className="text-2xl font-display font-medium text-paper mt-0.5">{overallProgressPercentage.toFixed(0)}%</p>
                    </div>
                  </div>
                  <div className="bg-ink p-5 flex items-center gap-4">
                    <Trophy className="w-5 h-5 text-bronze" strokeWidth={1.5} />
                    <div>
                      <p className="eyebrow">Moyenne générale</p>
                      <p className="text-2xl font-display font-medium text-paper mt-0.5">{averageQuizScore.toFixed(0)}%</p>
                    </div>
                  </div>
                  <div className="bg-ink p-5 flex items-center gap-4">
                    <CheckCircle className="w-5 h-5 text-sage-bright" strokeWidth={1.5} />
                    <div>
                      <p className="eyebrow">Éligible certificat</p>
                      <p className="text-2xl font-display font-medium text-paper mt-0.5">{averageQuizScore >= 80 ? "Oui" : "Non"}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-paper flex items-center gap-2">
                    <FileText className="w-4 h-4 text-bronze" strokeWidth={1.5} />
                    Détail des 12 modules
                  </h4>

                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                      <thead className="text-bronze eyebrow border-b border-hairline">
                        <tr>
                          <th className="px-3 py-2.5">Module</th>
                          <th className="px-3 py-2.5">Titre</th>
                          <th className="px-3 py-2.5">Durée</th>
                          <th className="px-3 py-2.5">Statut</th>
                          <th className="px-3 py-2.5 text-right">Score</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-hairline">
                        {TRAINING_MODULES.map(mod => {
                          const state = progress[mod.id];
                          const validated = (state?.quizScore || 0) >= 80;

                          return (
                            <tr key={mod.id} className="hover:bg-ink-soft transition-all">
                              <td className="px-3 py-2.5 font-mono text-bronze text-xs">{String(mod.id).padStart(2, "0")}</td>
                              <td className="px-3 py-2.5 text-paper">{mod.title}</td>
                              <td className="px-3 py-2.5 font-mono text-paper-dim text-xs">{mod.duration}</td>
                              <td className="px-3 py-2.5">
                                {state?.quizDone ? (
                                  <span className={`text-xs font-medium ${validated ? "text-sage-bright" : "text-rust-bright"}`}>
                                    {validated ? "Validé" : "Insuffisant"}
                                  </span>
                                ) : (
                                  <span className="text-paper-dim/50 text-xs italic">Non commencé</span>
                                )}
                              </td>
                              <td className={`px-3 py-2.5 text-right font-mono text-sm ${validated ? "text-sage-bright" : "text-paper-dim"}`}>
                                {state?.quizScore || 0}%
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="border border-hairline rounded-sm p-6 space-y-4">
                  <h4 className="text-sm font-medium text-rust-bright flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4" strokeWidth={1.5} />
                    Outils de gestion des données
                  </h4>
                  <p className="text-sm text-paper-dim leading-relaxed">
                    Ces actions modifient ou suppriment les données de progression stockées localement dans ce navigateur.
                  </p>
                  <div className="flex flex-wrap gap-3 pt-1">
                    <button
                      type="button"
                      onClick={handleCheatUnlock}
                      className="flex items-center gap-2 px-4 py-2 text-bronze hover:text-paper border border-hairline hover:border-bronze rounded-sm text-xs font-medium transition-all cursor-pointer"
                    >
                      <Sparkles className="w-3.5 h-3.5" strokeWidth={1.5} />
                      Valider les 12 modules (test)
                    </button>
                    <button
                      type="button"
                      onClick={handleResetProgress}
                      className="flex items-center gap-2 px-4 py-2 text-rust-bright hover:text-paper border border-hairline hover:border-rust rounded-sm text-xs font-medium transition-all cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" strokeWidth={1.5} />
                      Réinitialiser toutes les données
                    </button>
                  </div>
                </div>

              </div>
            )}
          </div>
        )}
      </main>

      <footer className="border-t border-hairline py-8 mt-6 text-center no-print">
        <Waveform height={16} bars={11} color="bronze" className="justify-center mb-3" />
        <p className="text-xs text-paper-dim/60">© 2026 CallPro Académie — Tous droits réservés.</p>
      </footer>

      {/* Confirm modal */}
      {activeConfirmModal && (
        <div className="fixed inset-0 bg-ink/90 backdrop-blur-sm z-[9999] flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-ink-soft border border-hairline p-7 space-y-6">
            <div className="flex items-center gap-3">
              <ShieldAlert className={`w-5 h-5 ${activeConfirmModal.isDanger ? "text-rust-bright" : "text-bronze"}`} strokeWidth={1.5} />
              <h3 className="text-base font-display font-medium text-paper">
                {activeConfirmModal.title}
              </h3>
            </div>
            <p className="text-sm text-paper-dim leading-relaxed">
              {activeConfirmModal.message}
            </p>
            <div className="flex justify-end gap-3 pt-1">
              <button
                onClick={() => setActiveConfirmModal(null)}
                className="px-4 py-2 text-paper-dim hover:text-paper text-xs font-medium cursor-pointer border border-hairline rounded-sm transition-all"
              >
                {activeConfirmModal.cancelText || "Annuler"}
              </button>
              <button
                onClick={activeConfirmModal.onConfirm}
                className={`px-5 py-2 text-xs font-medium rounded-sm cursor-pointer transition-all ${
                  activeConfirmModal.isDanger
                    ? "bg-rust-bright text-ink hover:bg-rust"
                    : "bg-rust text-ink hover:bg-rust-bright"
                }`}
              >
                {activeConfirmModal.confirmText || "Confirmer"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toast */}
      {notification && (
        <div className="fixed bottom-6 right-6 z-[9999] max-w-sm bg-ink-soft border border-hairline p-4 flex items-start gap-3">
          <CheckCircle className="w-4 h-4 text-sage-bright flex-shrink-0 mt-0.5" strokeWidth={1.75} />
          <p className="text-sm text-paper leading-snug flex-1">{notification.message}</p>
          <button
            onClick={() => setNotification(null)}
            className="text-paper-dim/50 hover:text-paper text-xs cursor-pointer"
          >
            ✕
          </button>
        </div>
      )}

    </div>
  );
}
