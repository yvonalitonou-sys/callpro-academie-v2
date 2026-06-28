/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { TrainingModule, QuizQuestion, KPICompareItem, ObjectionItem, DialogueExample, ScriptExample } from "../types";
import { 
  Check, X, Award, HelpCircle, ArrowRight, ArrowLeft, RefreshCw, 
  ThumbsUp, ThumbsDown, BookOpen, 
  HelpCircle as HelpIcon, Eye 
} from "lucide-react";
import CrmScenarioPicker from "./CrmScenarioPicker";

interface ModuleStudyViewProps {
  module: TrainingModule;
  onQuizSubmit: (scorePercent: number) => void;
  savedScore: number;
  isCompleted: boolean;
  onNextModule?: () => void;
  onPrevModule?: () => void;
}

export default function ModuleStudyView({
  module,
  onQuizSubmit,
  savedScore,
  isCompleted,
  onNextModule,
  onPrevModule
}: ModuleStudyViewProps) {
  const [activeTab, setActiveTab] = useState<"cours" | "concrets" | "retenir" | "quiz">("cours");
  
  // Reset tab when module changes
  useEffect(() => {
    setActiveTab("cours");
  }, [module.id]);

  return (
    <div className="space-y-6">
      {/* Module Title Header */}
      <div className="border-b border-hairline pb-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-3">
              <span className="eyebrow text-rust-bright">Module {String(module.id).padStart(2, "0")}</span>
              <span className="font-mono text-[11px] text-paper-dim/70">{module.duration}</span>
            </div>
            <h2 className="text-2xl font-display font-medium text-paper tracking-tight">
              {module.title}
            </h2>
            <p className="text-sm text-paper-dim leading-normal max-w-3xl">
              {module.description}
            </p>
          </div>

          <div className="flex items-center gap-3 self-start md:self-auto">
            <div className="text-right">
              <p className="eyebrow">Évaluation</p>
              <p className="text-sm font-medium text-paper">
                {isCompleted ? `Validé — ${savedScore}%` : "Non validé"}
              </p>
            </div>
            <div className={`w-2 h-2 rounded-full flex-shrink-0 ${isCompleted ? "bg-sage-bright" : "bg-hairline"}`}></div>
          </div>
        </div>

        {/* Tab Selection */}
        <div className="mt-6 flex flex-wrap gap-6 border-b border-hairline">
          {(["cours", "concrets", "retenir", "quiz"] as const).map(tab => {
            const labels = {
              cours: "Leçon",
              concrets: "Exemple concret",
              retenir: "À retenir",
              quiz: "Évaluation"
            };
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 text-sm font-medium transition-all cursor-pointer border-b-2 -mb-px ${
                  activeTab === tab
                    ? "text-rust-bright border-b-rust"
                    : "text-paper-dim/70 hover:text-paper border-b-transparent"
                }`}
              >
                {labels[tab]}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Study Workspace Area */}
      <div className="min-h-[400px]">
        {activeTab === "cours" && <LessonTabContent module={module} />}
        {activeTab === "concrets" && <ExamplesTabContent module={module} />}
        {activeTab === "retenir" && <RetainTabContent module={module} />}
        {activeTab === "quiz" && (
          <QuizTabContent 
            quiz={module.quiz} 
            savedScore={savedScore}
            onQuizSubmit={onQuizSubmit} 
            moduleId={module.id}
          />
        )}
      </div>

      {/* Action buttons at bottom */}
      <div className="flex items-center justify-between pt-6 border-t border-hairline no-print">
        {onPrevModule ? (
          <button
            onClick={onPrevModule}
            className="flex items-center gap-2 px-5 py-2.5 text-sm text-paper-dim hover:text-paper font-medium transition-all border border-hairline hover:border-bronze rounded-sm cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" strokeWidth={1.75} />
            Module précédent
          </button>
        ) : (
          <div />
        )}

        {onNextModule ? (
          <button
            onClick={onNextModule}
            className="flex items-center gap-2 px-5 py-2.5 bg-rust hover:bg-rust-bright text-ink rounded-sm text-sm font-medium transition-all cursor-pointer"
          >
            Module suivant
            <ArrowRight className="w-4 h-4" strokeWidth={1.75} />
          </button>
        ) : (
          <p className="text-sm text-bronze font-voice-italic">Vous avez atteint le dernier module — félicitations.</p>
        )}
      </div>
    </div>
  );
}

/* =========================================
   LEÇON TAB
   ========================================= */
function LessonTabContent({ module }: { module: TrainingModule }) {
  // Convert standard markdown structures to nice HTML
  const formatText = (text: string) => {
    return text.split("\n\n").map((para, i) => {
      if (para.startsWith("###")) {
        return (
          <h3 key={i} className="text-lg font-display font-medium text-rust-bright tracking-wide mt-6 mb-3">
            {para.replace("###", "").trim()}
          </h3>
        );
      }
      if (para.startsWith("*")) {
        return (
          <ul key={i} className="list-disc pl-6 space-y-2 text-paper-dim my-4">
            {para.split("\n").map((li, j) => (
              <li
                key={j}
                className="leading-relaxed"
                dangerouslySetInnerHTML={{ __html: li.replace(/^\*\s*/, "").trim().replace(/\*\*(.*?)\*\*/g, "<strong class='text-paper'>$1</strong>") }}
              />
            ))}
          </ul>
        );
      }
      if (para.match(/^\d+\./)) {
        return (
          <ol key={i} className="list-decimal pl-6 space-y-2 text-paper-dim my-4">
            {para.split("\n").map((li, j) => (
              <li
                key={j}
                className="leading-relaxed"
                dangerouslySetInnerHTML={{ __html: li.replace(/^\d+\.\s*/, "").trim().replace(/\*\*(.*?)\*\*/g, "<strong class='text-paper'>$1</strong>") }}
              />
            ))}
          </ol>
        );
      }
      return (
        <p key={i} className="text-paper-dim text-sm leading-relaxed mb-4" 
           dangerouslySetInnerHTML={{ __html: para.replace(/\*\*(.*?)\*\*/g, "<strong class='text-paper'>$1</strong>") }} />
      );
    });
  };

  return (
    <div className="panel p-6 md:p-8 rounded-sm border border-hairline bg-ink-soft/50 space-y-4">
      <div className="prose prose-invert max-w-none prose-p:leading-relaxed">
        {formatText(module.coursText)}
      </div>
    </div>
  );
}

/* =========================================
   EXEMPLE CONCRET TAB
   ========================================= */
function ExamplesTabContent({ module }: { module: TrainingModule }) {
  // Render based on module id to handle exact tables/comparisons
  switch (module.id) {
    case 1:
      // Module 1: Comparative entrants/sortants table
      const kpis = module.extraHTMLTable as KPICompareItem[];
      return (
        <div className="panel p-6 rounded-sm border border-hairline space-y-6">
          <h4 className="text-paper font-display font-medium text-md border-b border-hairline pb-2">
            Tableau Comparatif : Appels Entrants vs Appels Sortants
          </h4>
          <div className="overflow-x-auto rounded-sm border border-hairline">
            <table className="w-full text-sm text-left text-paper-dim">
              <thead className="bg-ink-soft text-rust-bright text-xs uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-4">Indicateur / Posture</th>
                  <th className="px-6 py-4">Appels Entrants (Inbound)</th>
                  <th className="px-6 py-4">Appels Sortants (Outbound)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-hairline bg-ink-soft/50">
                {kpis.map((item, id) => (
                  <tr key={id} className="hover:bg-ink-lift/20 transition-all">
                    <td className="px-6 py-4 font-semibold text-paper">{item.kpi}</td>
                    <td className="px-6 py-4 leading-relaxed">{item.entrant}</td>
                    <td className="px-6 py-4 leading-relaxed">{item.sortant}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );

    case 2:
      // Module 2: 5 side-by-side behavioral dialogues comparing bad vs good
      return (
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-2 border-b border-hairline">
            <h4 className="text-paper font-display font-medium text-md">
              5 Dialogues Pratiques: Posture Inadaptée vs Posture Championne
            </h4>
            <span className="text-xs text-rust-bright bg-rust/10 px-2 py-1 rounded">Écoute empathique</span>
          </div>

          <div className="space-y-6">
            {module.dialoguesList?.map((dialogue, i) => (
              <div key={i} className="panel rounded-sm border border-hairline overflow-hidden">
                <div className="bg-ink-soft px-5 py-3 border-b border-hairline">
                  <h5 className="text-xs font-semibold text-paper font-display flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-rust/20 text-rust-bright flex items-center justify-center text-[11px] font-bold">
                      {i + 1}
                    </span>
                    {dialogue.title}
                  </h5>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-hairline">
                  {/* Bad behavior red block */}
                  <div className="p-5 bg-red-950/20 space-y-3">
                    <div className="flex items-center gap-1.5 text-red-400 font-bold text-xs uppercase tracking-wider">
                      <ThumbsDown className="w-4 h-4" />
                      Erreur verbale à bannir
                    </div>
                    <div className="text-xs text-paper-dim font-mono whitespace-pre-line leading-relaxed pl-3 border-l-2 border-red-500/30">
                      {dialogue.badText}
                    </div>
                  </div>
                  {/* Good behavior green block */}
                  <div className="p-5 bg-sage/10 space-y-3">
                    <div className="flex items-center gap-1.5 text-sage-bright font-bold text-xs uppercase tracking-wider">
                      <ThumbsUp className="w-4 h-4" />
                      Formule gagnante recommandée
                    </div>
                    <div className="text-xs text-paper-dim font-mono whitespace-pre-line leading-relaxed pl-3 border-l-2 border-sage-bright/50">
                      {dialogue.goodText}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    case 3:
      // Module 3: 3 call center scripts with commentaries
      return (
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-2 border-b border-hairline">
            <h4 className="text-paper font-display font-medium text-md">
              3 Scripts d'Accueil Métiers Complets et Commentés
            </h4>
            <span className="text-xs text-bronze bg-bronze/15 px-2 py-1 rounded">Ton et sourire</span>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {module.scriptsList?.map((script, sIdx) => (
              <div key={sIdx} className="panel p-6 rounded-sm border border-hairline space-y-4">
                <div>
                  <h5 className="text-sm font-display font-medium text-rust-bright">{script.title}</h5>
                  <p className="text-xs text-paper-dim/80 italic">Contexte : {script.context}</p>
                </div>

                <div className="space-y-4 bg-ink-soft/70 p-4 rounded-sm border border-hairline">
                  {script.dialogue.map((line, lIdx) => (
                    <div key={lIdx} className="grid grid-cols-1 md:grid-cols-4 gap-3 items-start text-xs border-b border-hairline pb-3 last:border-b-0 last:pb-0">
                      <div className="font-bold text-rust-bright">{line.speaker}</div>
                      <div className="md:col-span-2 text-paper-dim leading-relaxed italic">{line.text}</div>
                      <div className="text-bronze bg-bronze/10 p-2 rounded-lg border border-hairline text-[11px] leading-normal font-sans">
                        {line.comment}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    case 4:
      // Module 4: 4 CROC Commented scripts line by line
      const crocScripts = [
        {
          title: "Script 1: Support Client Télécom (C-Tact)",
          lines: [
            { step: "C - CONTACT", text: "« Horizon Télécom, bonjour. Je m'appelle Rémi, j'ai le plaisir de vous accompagner pour vos services. Quel est votre numéro de contrat s'il vous plaît ? »", notes: "Validation d'identité sécurisée, ton et élocution professionnels d'accueil." },
            { step: "R - RAISON", text: "« Allô bonjour, je vous appelle car la facture de ce mois a doublé, je ne comprends pas ! » (Le client énonce le problème)", notes: "Identifier de façon neutre le motif précis de l'appel pour l'orienter." },
            { step: "O - OBJECTIF", text: "« C'est tout à fait entendu. Je constate qu'il y a eu la souscription d'une option Canal Sport d'un mois gratuit qui est passée payante. Souhaitez-vous que je la désactive de ce pas pour recalculer la créance ? »", notes: "L'expert effectue la recherche et solutionne l'incident avec exactitude commerciale." },
            { step: "C - CONGÉ", text: "« Voilà, l'option est résiliée et un remboursement compensatoire de 15€ sera crédité sur la prochaine facture. Puis-je faire autre chose pour vous accompagner aujourd'hui ? Je vous souhaite de passer une excellente fin de journée. Au revoir Madame. »", notes: "Vérifier la satisfaction totale et prendre congé avec une grande courtoisie orale." }
          ]
        },
        {
          title: "Script 2: Télévente Prévoyance Obsèques (Appel Sortant)",
          lines: [
            { step: "C - CONTACT", text: "« Bonjour Monsieur Dubois. Je me nomme Sandra, de l'Union Nationale de Prévoyance. Je ne vous dérange pas en plein repas ? »", notes: "S'assurer qu'on dispose de la pleine attention du client sans l'agresser de but en blanc." },
            { step: "R - RAISON", text: "« Je fais suite à la brochure d'information sur la protection des familles que vous avez complétée en ligne le mois dernier. »", notes: "Lien de contextualisation : légitime l'appel immédiatement comme de sa volonté." },
            { step: "O - OBJECTIF", text: "« L'objectif est d'étudier ensemble le capital à garantir pour soulager le budget d'obsèques de vos proches, de sorte que vous soyez serein au quotidien. »", notes: "Valorisant le bénéfice psychologique 'serein' avant de figer des chiffres froids." },
            { step: "C - CONGÉ", text: "« Nous figeons donc les options d'assurance sur 10 000€. L'envoi du projet est expédié aujourd'hui. Je vous remercie de cet entretien très constructif constructif, Monsieur Dubois. Excellente journée. »", notes: "Prend congé sur un succès qualifié et formule d'estime." }
          ]
        },
        {
          title: "Script 3: Prise de Rendez-vous Commercial Energie",
          lines: [
            { step: "C - CONTACT", text: "« Cabinet EcoLogik, bonjour. Je suis Jean-Marc, conseiller pour la conformité thermique. »", notes: "Prénom, marque et secteur d'action précis formulé distinctement." },
            { step: "R - RAISON", text: "« Je vous contacte dans le cadre de la campagne régionale de contrôle de l'isolation des toits de plus de 15 ans. »", notes: "Formule un contexte de service régional fort, exclut le démarchage sauvage." },
            { step: "O - OBJECTIF", text: "« Notre technicien passe dans votre rue ce jeudi. Je vous propose qu'il s'arrête 15 min chez vous pour effectuer l'évaluation gratuite de votre grenier. Préféreriez-vous qu'il vous rende visite en matinée ou après-midi ? »", notes: "Question alternative limitant la possibilité de 'non' et bloquant l'accord direct." },
            { step: "C - CONGÉ", text: "« C'est noté pour jeudi à 11h. Je valide votre adresse au 12 rue Victor Hugo. Je vous remercie infiniment de votre accueil et vous souhaite d'agréables préparatifs thermique. Au revoir. »", notes: "Récapituler heure et adresse." }
          ]
        },
        {
          title: "Script 4: Réclamation Litige Achat SAV",
          lines: [
            { step: "C - CONTACT", text: "« Service Relations Clientèle Boutique-Style, bonjour. Coralie à votre service. Expliquez-moi votre demande ? »", notes: "Prêt à accueillir la tension sans barrière hostile." },
            { step: "R - RAISON", text: "« J'ai reçu mes bottes en cuir mais elles sont griffées sur le côté, c'est intolérable ! »", notes: "Accueillir le préjudice et l'anomalie logistique." },
            { step: "O - OBJECTIF", text: "« Je mesure la déception et le préjudice. Soyez rassuré, je procède en direct à l'édition d'une étiquette d'envoi de retour prépayée et je fais repartir une boîte neuve aujourd'hui. »", notes: "L'agent propose une issue à effet immédiat rassurante sans polémiquer avec le destinataire." },
            { step: "C - CONGÉ", text: "« Cette étiquette est déjà dans votre boite mail. Avez-vous une autre question ? Je vous prie de nous excuser pour ce contretemps logistique. Excellente journée. »", notes: "S'excuser au nom de la Compagnie et clore avec politesse." }
          ]
        }
      ];

      return (
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-2 border-b border-hairline">
            <h4 className="text-paper font-display font-medium text-md">
              Mise en Pratique de la Structure CROC : 4 Scripts Commentés Ligne par Ligne
            </h4>
            <span className="text-xs text-rust-bright bg-rust/10 px-2 py-1 rounded">Méthode CROC</span>
          </div>

          <div className="space-y-6">
            {crocScripts.map((sc, scIdx) => (
              <div key={scIdx} className="panel p-6 rounded-sm border border-hairline space-y-4">
                <h5 className="text-sm font-display font-medium text-bronze flex items-center gap-2">
                  {sc.title}
                </h5>

                <div className="space-y-3">
                  {sc.lines.map((ln, lIdx) => (
                    <div key={lIdx} className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center text-xs p-3 bg-ink-soft/50 rounded-sm border border-hairline">
                      <div className="md:col-span-2 font-mono font-bold text-rust-bright uppercase">
                        {ln.step}
                      </div>
                      <div className="md:col-span-6 text-paper-dim italic">
                        {ln.text}
                      </div>
                      <div className="md:col-span-4 pl-3 border-l md:border-l-2 border-bronze/30 text-paper-dim/80 leading-normal text-[11px] font-sans">
                        {ln.notes}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    case 5:
      // Module 5: 20 typical question types dictionary (entonnoir / QQOQCP)
      const qTypes = [
        { type: "Ouverte", q: "Comment s'est manifestée la coupure de votre liaison internet ?", usage: "Identifier les symptômes d'une panne" },
        { type: "Ouverte", q: "Selon vous, quels critères justifieraient un changement d'assureur ?", usage: "Faire s'exprimer le prospect sur ses besoins réels" },
        { type: "Ouverte", q: "En quoi nos solutions logicielles vous attirent-elles ?", usage: "Déceler les motivations intrinsèques d'achat" },
        { type: "Ouverte", q: "Quelles difficultés rencontrez-vous historiquement avec ce SAV ?", usage: "Comprendre les litiges concurrentiels" },
        { type: "Alternative", q: "Souhaitez-vous fixer le RDV mardi à 10h ou jeudi à 15h ?", usage: "Orienter sans violence et bloquer la date" },
        { type: "Alternative", q: "Préférez-vous souscrire à la formule Privilège ou Éco ?", usage: "Forcer la décision entre deux forfaits rentables" },
        { type: "Alternative", q: "Ce document, puis-je vous l'adresser par email ou par SMS ?", usage: "Faciliter l'accès aux contacts client" },
        { type: "Alternative", q: "Les mensualités, préférez-vous être prélevé le 5 ou le 10 du mois ?", usage: "Consolider la souscription de facturation" },
        { type: "Fermée", q: "Confirmez-vous être le titulaire officiel de cette ligne ?", usage: "Vérifier la conformité de sécurité (Sécurisation)" },
        { type: "Fermée", q: "Avez-vous bien connecté la box à la prise électrique murale ?", usage: "Exclure l'erreur de raccordement simple" },
        { type: "Fermée", q: "Avez-vous complété la signature de votre mandat de mandat ?", usage: "Enregistrer l'étape légale de vente" },
        { type: "Fermée", q: "Disposez-vous de l'autorisation d'urbanisme requise ?", usage: "Vérifier la faisabilité d'un chantier solaire" },
        { type: "Rebond", q: "Vous parliez d'un raccordement difficile, c'est-à-dire ?", usage: "Approfondir une réponse vague utile" },
        { type: "Rebond", q: "Pourquoi cela vous paraît crucial de préserver cette clause ?", usage: "Comprendre les vrais enjeux d'une objection" },
        { type: "Rebond", q: "Quand vous affirmez que c'est trop cher, à quoi comparez-vous ?", usage: "Défendre la marge face aux repères client" },
        { type: "Rebond", q: "Vous disiez que le débit faiblit, à quel moment de la journée ?", usage: "Préciser les diagnostics d'anomalies de réseau" },
        { type: "Suggestion", q: "Une garantie de 5 ans pièces incluses résoudrait vos doutes ?", usage: "Orienter finement vers la validation de vente" },
        { type: "Suggestion", q: "Une réduction de 10% sur votre facture listerait-elle ce contrat ?", usage: "Tâter le terrain d'un closing immédiat" },
        { type: "Suggestion", q: "Un transfert vers un technicien résoudra plus vite cette panne ?", usage: "Valider l'intérêt du transfert technique" },
        { type: "Suggestion", q: "Pensez-vous qu'un modèle à écran tactile serait adapté ?", usage: "Amorcer une transition d'upgrade produit" }
      ];

      return (
        <div className="panel p-6 rounded-sm border border-hairline space-y-4">
          <div className="flex items-center justify-between border-b border-hairline pb-2 mb-3">
            <h4 className="text-paper font-display font-medium text-md">
              Tableau Thématique : 20 Questions Piliers du Téléconseiller (Entonnoir)
            </h4>
            <span className="text-xs text-bronze bg-bronze/15 px-2 py-1 rounded">20 questions types</span>
          </div>
          
          <div className="overflow-y-auto max-h-[400px] rounded-sm border border-hairline relative">
            <table className="w-full text-xs text-left text-paper-dim">
              <thead className="bg-ink-soft text-rust-bright uppercase sticky top-0">
                <tr>
                  <th className="px-4 py-3">N°</th>
                  <th className="px-4 py-3">Typologie</th>
                  <th className="px-4 py-3">Question Modèle</th>
                  <th className="px-4 py-3">Utilité Clinique d'usage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-hairline bg-ink-soft/50 font-sans">
                {qTypes.map((q, id) => (
                  <tr key={id} className="hover:bg-ink-lift/20 transition-all">
                    <td className="px-4 py-2 text-bronze font-bold">{id + 1}</td>
                    <td className="px-4 py-2 font-mono text-[10px] uppercase text-rust-bright">{q.type}</td>
                    <td className="px-4 py-2 font-semibold text-paper">« {q.q} »</td>
                    <td className="px-4 py-2 text-paper-dim/80">{q.usage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );

    case 6:
      // Module 6: 6 Product Sheets argumented using CAB Caracteristique/Avantage/Benefice
      interface CABItem {
        item: string;
        cab: string;
      }
      const cabList = module.extraHTMLTable as CABItem[];
      return (
        <div className="space-y-6">
          <div className="flex justify-between items-center pb-2 border-b border-hairline">
            <h4 className="text-paper font-display font-medium text-md">
              6 Fiches d'Argumentation CAB (Caractéristique, Avantage, Bénéfice)
            </h4>
            <span className="text-xs text-rust-bright bg-rust/10 px-2 py-1 rounded">METHODE CAB</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cabList.map((c, idx) => {
              const parts = c.cab.split(" | ");
              const charact = parts[0]?.replace("C: ", "");
              const advantage = parts[1]?.replace("A: ", "");
              const benefit = parts[2]?.replace("B: ", "");

              return (
                <div key={idx} className="panel p-5 rounded-sm border border-hairline bg-ink-soft/30 hover:border-bronze/40 hover: transition-all flex flex-col justify-between">
                  <div className="space-y-3">
                    <h5 className="text-xs font-mono font-bold text-bronze uppercase tracking-wider border-b border-hairline pb-1">
                      Fiche {idx + 1} : {c.item}
                    </h5>
                    
                    <div className="space-y-2 text-xs">
                      <p className="text-paper-dim leading-normal">
                        <strong className="text-rust-bright font-mono uppercase bg-rust/10 px-1 py-0.5 rounded text-[9px] mr-1">Caractéristique (C)</strong> 
                        {charact}
                      </p>
                      <p className="text-paper-dim leading-normal">
                        <strong className="text-bronze font-mono uppercase bg-bronze/15 px-1 py-0.5 rounded text-[9px] mr-1">Avantage Technique (A)</strong> 
                        {advantage}
                      </p>
                      <p className="text-gray-100 leading-normal font-medium bg-rust/10 p-2 rounded border border-hairline">
                        <strong className="text-sage-bright font-mono uppercase bg-sage-bright/10 px-1 py-0.5 rounded text-[9px] mr-1">Bénéfice Client (B)</strong> 
                        {benefit}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );

    case 7:
      // Module 7: 8 price objections resolved via CRAC
      return (
        <div className="space-y-6">
          <div className="flex justify-between items-center pb-2 border-b border-hairline">
            <h4 className="text-paper font-display font-medium text-md">
              8 Objections Prix Courantes Traitées avec la Structure CRAC
            </h4>
            <span className="text-xs text-bronze bg-bronze/15 px-2 py-1 rounded">METHODE CRAC</span>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {module.objectionsList?.map((ob, idx) => (
              <div key={idx} className="panel p-6 rounded-sm border border-hairline bg-ink-soft/40 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-bronze bg-bronze/15 px-2 py-0.5 rounded-full">Cas {idx + 1}</span>
                  <h5 className="text-sm font-display font-medium text-paper">{ob.objection}</h5>
                </div>
                <p className="text-xs text-paper-dim/80 italic">Typologie de frein : {ob.freinType}</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2 text-xs">
                  <div className="p-3 bg-ink-soft/70 rounded-sm border border-hairline">
                    <span className="text-[9px] font-mono text-rust-bright font-bold uppercase bg-rust/10 px-1.5 py-0.5 rounded block w-max mb-1">C - Creuser / Accueillir</span>
                    <p className="text-paper-dim leading-relaxed italic">{ob.remedes[0]}</p>
                  </div>
                  <div className="p-3 bg-ink-soft/70 rounded-sm border border-hairline">
                    <span className="text-[9px] font-mono text-[#D7CCC8] font-bold uppercase bg-bronze/15 px-1.5 py-0.5 rounded block w-max mb-1">R/A - Rebondir / Argumenter</span>
                    <p className="text-paper-dim leading-relaxed italic">{ob.remedes[1]}</p>
                  </div>
                  <div className="p-3 bg-ink-soft/70 rounded-sm border border-hairline">
                    <span className="text-[9px] font-mono text-sage-bright font-bold uppercase bg-sage-bright/10 px-1.5 py-0.5 rounded block w-max mb-1">C - Conclure / Valider</span>
                    <p className="text-paper-dim leading-relaxed italic">{ob.remedes[2]}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    case 8:
      // Module 8: Objections diverses (Je réfléchis, déjà client, e-mail) — rendu via module.objectionsList
      return (
        <div className="space-y-6">
          <div className="flex justify-between items-center pb-2 border-b border-hairline">
            <h4 className="text-paper font-display font-medium text-md">
              Analyse des freins et réponses systématiques (objections diverses)
            </h4>
            <span className="text-xs text-rust-bright bg-rust/10 px-2 py-1 rounded-sm font-medium">Freins divers</span>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {module.objectionsList?.map((ob, idx) => (
              <div key={idx} className="panel p-6 rounded-sm border border-hairline bg-ink-soft/40 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium text-bronze bg-bronze/15 px-2 py-0.5 rounded-full">Cas {idx + 1}</span>
                  <h5 className="text-sm font-display font-medium text-paper">{ob.objection}</h5>
                </div>
                <p className="text-xs text-paper-dim/80 italic">Typologie de frein : {ob.freinType}</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2 text-xs">
                  <div className="p-3 bg-ink-soft/70 rounded-sm border border-hairline">
                    <span className="text-[9px] font-mono text-rust-bright font-medium uppercase bg-rust/10 px-1.5 py-0.5 rounded-sm block w-max mb-1">Accueillir</span>
                    <p className="text-paper-dim leading-relaxed italic">{ob.remedes[0]}</p>
                  </div>
                  <div className="p-3 bg-ink-soft/70 rounded-sm border border-hairline">
                    <span className="text-[9px] font-mono text-bronze font-medium uppercase bg-bronze/15 px-1.5 py-0.5 rounded-sm block w-max mb-1">Rebondir</span>
                    <p className="text-paper-dim leading-relaxed italic">{ob.remedes[1]}</p>
                  </div>
                  <div className="p-3 bg-ink-soft/70 rounded-sm border border-hairline">
                    <span className="text-[9px] font-mono text-sage-bright font-medium uppercase bg-sage-bright/10 px-1.5 py-0.5 rounded-sm block w-max mb-1">Conclure</span>
                    <p className="text-paper-dim leading-relaxed italic">{ob.remedes[2]}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    case 9:
      // Module 9: 4 scripts of closing (vente, rdv, refus, réclamation)
      return (
        <div className="space-y-6">
          <div className="flex justify-between items-center pb-2 border-b border-hairline">
            <h4 className="text-paper font-display font-medium text-md">
              4 Scripts de Fin de Communication Clés (Closing)
            </h4>
            <span className="text-xs text-bronze bg-bronze/15 px-2 py-1 rounded">Techniques de closing</span>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {module.scriptsList?.map((sc, sIdx) => (
              <div key={sIdx} className="panel p-6 rounded-sm border border-hairline bg-ink-soft/40 space-y-4">
                <div>
                  <h5 className="text-sm font-display font-medium text-rust-bright">{sc.title}</h5>
                  <p className="text-xs text-paper-dim/80 italic">Contexte d'usage : {sc.context}</p>
                </div>

                <div className="space-y-3 bg-ink-soft/70 p-4 rounded-sm border border-hairline">
                  {sc.dialogue.map((line, lIdx) => (
                    <div key={lIdx} className="grid grid-cols-1 md:grid-cols-4 gap-3 items-center text-xs pb-3 last:pb-0 border-b border-hairline last:border-0">
                      <div className="font-bold text-bronze">{line.speaker}</div>
                      <div className="md:col-span-2 text-paper-dim italic">« {line.text} »</div>
                      <div className="text-paper-dim/80 font-sans text-[11px] bg-ink-soft p-1.5 rounded border border-hairline">
                        {line.comment}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    case 10:
      // Module 10: Appels difficiles (3 studies of text cases + hidden corrections DESC)
      return (
        <div className="space-y-6">
          <div className="flex justify-between items-center pb-2 border-b border-hairline">
            <h4 className="text-paper font-display font-medium text-md">
              3 Études de Cas Cliniques : Désamorcer l'Agressivité en Clientèle (DESC)
            </h4>
            <span className="text-xs text-rust-bright bg-rust/10 px-2 py-1 rounded font-bold">Méthode DESC</span>
          </div>

          <div className="space-y-6">
            {(module.extraHTMLTable as { cas: string; details: string; corriger: string }[]).map((c, idx) => (
              <CaseStudyRow key={idx} c={c} idx={idx} />
            ))}
          </div>
        </div>
      );

    case 11:
      // Module 11: 30 terms glossary + CRM simulator with multiple selectable scenarios
      return (
        <div className="space-y-8">
          <div className="flex justify-between items-center pb-2 border-b border-hairline">
            <h4 className="text-paper font-display font-medium text-md">
              Outil métier : qualification CRM et lexique télécom
            </h4>
            <span className="text-xs text-bronze bg-bronze/15 px-2 py-1 rounded-sm">Simulateur CRM</span>
          </div>

          {/* CRM Simulator Widget — pick one of three scenarios */}
          <div className="space-y-4">
            <div className="text-center max-w-2xl mx-auto space-y-1">
              <h5 className="text-sm font-display font-medium text-rust-bright">
                Mise en pratique : remplir la fiche client
              </h5>
              <p className="text-xs text-paper-dim/80">
                Choisissez une situation, lisez le contexte d'appel puis renseignez la fiche comme vous le feriez en plateau.
              </p>
            </div>
            {module.crmScenarios && <CrmScenarioPicker scenarios={module.crmScenarios} />}
          </div>

          {/* 30 Terms Glossary Dictionary */}
          <div className="panel p-6 rounded-sm border border-hairline space-y-4">
            <h5 className="text-sm font-display font-medium text-paper border-b border-hairline pb-2">
              Le lexique complet de l'écosystème call center — 30 termes incontournables
            </h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="space-y-3">
                <p className="leading-relaxed"><strong>1. ACD (Automatic Call Distribution) :</strong> Logiciel répartiteur d'appels entrants vers les agents libres conformes.</p>
                <p className="leading-relaxed"><strong>2. SVI (Serveur Vocal Interactif) :</strong> Boîte guidant par touches numériques repères le client ('Tapez 1...').</p>
                <p className="leading-relaxed"><strong>3. CRM (Customer Relationship Management) :</strong> Interface d'historique de dossier d'interventions client.</p>
                <p className="leading-relaxed"><strong>4. DMT (Durée Moyenne de Traitement) :</strong> Conversation + Qualification + Attente (métrique phare d'élocution).</p>
                <p className="leading-relaxed"><strong>5. DMC (Durée Moyenne de Communication) :</strong> Temps strict de conversation vocale au combiné.</p>
                <p className="leading-relaxed"><strong>6. FCR (First Contact Resolution) :</strong> Taux d'incidents soldés dès le premier contact d'ouverture.</p>
                <p className="leading-relaxed"><strong>7. Wrap-up Time :</strong> Délai d'édition post-appel assigné pour fermer sa fiche CRM.</p>
                <p className="leading-relaxed"><strong>8. Outbound :</strong> Ensemble thématique d'appels sortants prospection.</p>
                <p className="leading-relaxed"><strong>9. Inbound :</strong> Flux de réception d'appels clients entrants (SAV).</p>
                <p className="leading-relaxed"><strong>10. Taux de Décroché :</strong> Ratio d'appels aboutis par rapport aux fiches émises.</p>
                <p className="leading-relaxed"><strong>11. Script d'Appel :</strong> Guide de lecture de phrases types d'ouverture de dossier.</p>
                <p className="leading-relaxed"><strong>12. Superviseur :</strong> Manage d'équipe régulant les indicateurs DMT.</p>
                <p className="leading-relaxed"><strong>13. Double Écoute :</strong> Évaluation d'incident en direct par un tuteur qualité.</p>
                <p className="leading-relaxed"><strong>14. Appel Mystère :</strong> Audit simulé de conformité aux méthodes de courtoisie CROC.</p>
                <p className="leading-relaxed"><strong>15. Débordement (Queue) :</strong> Routage automatique vers d'autres plateaux lors de pics d'affluence.</p>
              </div>
              <div className="space-y-3">
                <p className="leading-relaxed"><strong>16. Traitement post-Appel (ACW) :</strong> Synonyme officiel de wrap-up informatique.</p>
                <p className="leading-relaxed"><strong>17. RGPD :</strong> Loi de sécurité des données proscrivant les jugements subjectifs.</p>
                <p className="leading-relaxed"><strong>18. Télévente :</strong> Prospection commerciale directe et signature de forfaits.</p>
                <p className="leading-relaxed"><strong>19. Numéroteur (Dialer) :</strong> Bot automatique d'acheminement de numéros.</p>
                <p className="leading-relaxed"><strong>20. Qualification :</strong> Acter le motif de fin de communication dans la base de données.</p>
                <p className="leading-relaxed"><strong>21. Écoute Active :</strong> Attitude neutre respectant l'expression libre sans coupure.</p>
                <p className="leading-relaxed"><strong>22. Reformulation :</strong> Structure de rassurance d'accord mutuel ('Si j'ai bien compris...').</p>
                <p className="leading-relaxed"><strong>23. Empathie :</strong> Valider le préjudice émotionnel d'incident ('Je mesure la gêne...').</p>
                <p className="leading-relaxed"><strong>24. CROC :</strong> Structure de guidage logique : Contact, Raison, Objectif, Congé.</p>
                <p className="leading-relaxed"><strong>25. CAB :</strong> Caractéristique, Avantage, Bénéfice (argumentation de vente).</p>
                <p className="leading-relaxed"><strong>26. CRAC :</strong> Creuser, Rebondir, Argumenter, Conclure (traitement des objections).</p>
                <p className="leading-relaxed"><strong>27. DESC :</strong> Description, Émotion, Solution, Conclusion (gestion d'écarts et conflits).</p>
                <p className="leading-relaxed"><strong>28. Mot Noir :</strong> Mot anxiogène interdit en clientèle ('Panne', 'Erreur', 'Impossible').</p>
                <p className="leading-relaxed"><strong>29. Geste Commercial :</strong> Compensation financière résolvant la crise d'un client.</p>
                <p className="leading-relaxed"><strong>30. Clôture de Fiche :</strong> Sauvegarder dans le CRM pour libérer l'ACD de routage.</p>
              </div>
            </div>
          </div>
        </div>
      );

    case 12:
      // Module 12: 25 rh questions answers + simulation written + checklist 10 points
      return (
        <div className="space-y-8">
          <div className="flex justify-between items-center pb-2 border-b border-hairline">
            <h4 className="text-paper font-display font-medium text-md">
              Guide d'Entraînement : 25 Questions RH & Simulation d'Entretien
            </h4>
            <span className="text-xs text-rust-bright bg-rust/10 px-2 py-1 rounded font-bold">REUSSIR SON INTEGRATION</span>
          </div>

          {/* 10 Points integration checklist cards */}
          <div className="bg-ink-soft p-6 rounded-sm border border-hairline">
            <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-bronze mb-3 text-center">
              CHECKLIST DU TÉLÉCONSEILLER D'ÉLITE (10 POINTS CLÉS DE SUCCÈS)
            </h5>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3 text-xs">
              <div className="bg-ink-lift/60 p-3 rounded-sm border border-hairline text-center space-y-1">
                <span className="text-bronze font-bold block text-sm">1. Ponctuel</span>
                <p className="text-paper-dim/80 text-[10px]">Présence 5 min d'avance.</p>
              </div>
              <div className="bg-ink-lift/60 p-3 rounded-sm border border-hairline text-center space-y-1">
                <span className="text-bronze font-bold block text-sm">2. Matériel</span>
                <p className="text-paper-dim/80 text-[10px]">Casque USB filaire testé.</p>
              </div>
              <div className="bg-ink-lift/60 p-3 rounded-sm border border-hairline text-center space-y-1">
                <span className="text-bronze font-bold block text-sm">3. Zone calme</span>
                <p className="text-paper-dim/80 text-[10px]">Aucun bruit ambiant.</p>
              </div>
              <div className="bg-ink-lift/60 p-3 rounded-sm border border-hairline text-center space-y-1">
                <span className="text-bronze font-bold block text-sm">4. Élocution</span>
                <p className="text-paper-dim/80 text-[10px]">Diction nette.</p>
              </div>
              <div className="bg-ink-lift/60 p-3 rounded-sm border border-hairline text-center space-y-1">
                <span className="text-bronze font-bold block text-sm">5. Sourire</span>
                <p className="text-paper-dim/80 text-[10px]">Timbre chaleureux.</p>
              </div>
              <div className="bg-ink-lift/60 p-3 rounded-sm border border-hairline text-center space-y-1">
                <span className="text-bronze font-bold block text-sm">6. Jargon</span>
                <p className="text-paper-dim/80 text-[10px]">CROC, DMT, CRM.</p>
              </div>
              <div className="bg-ink-lift/60 p-3 rounded-sm border border-hairline text-center space-y-1">
                <span className="text-bronze font-bold block text-sm">7. Empathie</span>
                <p className="text-paper-dim/80 text-[10px]">Écoute sans couper.</p>
              </div>
              <div className="bg-ink-lift/60 p-3 rounded-sm border border-hairline text-center space-y-1">
                <span className="text-bronze font-bold block text-sm">8. Curiosité</span>
                <p className="text-paper-dim/80 text-[10px]">Questions de fin.</p>
              </div>
              <div className="bg-ink-lift/60 p-3 rounded-sm border border-hairline text-center space-y-1">
                <span className="text-bronze font-bold block text-sm">9. Suivi</span>
                <p className="text-paper-dim/80 text-[10px]">Mail de remerciement.</p>
              </div>
              <div className="bg-ink-lift/60 p-3 rounded-sm border border-hairline text-center space-y-1">
                <span className="text-bronze font-bold block text-sm">10. Moral</span>
                <p className="text-paper-dim/80 text-[10px]">Ténacité commerciale.</p>
              </div>
            </div>
          </div>

          {/* Interactive Collapsible FAQ for the questions */}
          <div className="space-y-4">
            <h5 className="text-sm font-display font-medium text-paper border-b border-hairline pb-2 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-bronze" />
              Répertoire National d'Entretien : 10 Questions d'Élite & Réponses Modèles Rédigées
            </h5>

            <div className="space-y-3">
              {module.questionsRHList?.map((faq, fIdx) => (
                <QuestionRow key={fIdx} faq={faq} index={fIdx} />
              ))}
            </div>
            
            {/* Formulate another 15 theoretical questions to reach 25 exactly as asked by the user */}
            <h5 className="text-sm font-display font-medium text-paper border-b border-hairline pb-2 mt-8 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-rust-bright" />
              15 Questions Experts Additionnelles pour parfaire le Jury
            </h5>

            <div className="grid grid-cols-1 gap-2 text-xs">
              {[
                { q: "Qu'est-ce qu'un pic d'appels et comment vous intégrez-vous dans cette surcharge ?", r: "C'est l'affluence massive d'utilisateurs. Je limite mes paraphrases pour écourter la DMT sans bâcler et je garde les notes CRM brèves." },
                { q: "Qu'est-ce que le 'wrap-up' et pourquoi est-il mesuré au dixième de seconde ?", r: "C'est la qualification administrative après l'appel. S'il est trop long, l'ACD attend et le taux de décroché général s'effondre." },
                { q: "Comment réagir en cas d'erreur de facturation de notre part ?", r: "Reconnaître l'anomalie sans fuite : 'Nous constatons ce prélèvement excédentaire et validons le litige.' puis lancer la régulation de crédit en direct." },
                { q: "Quelle différence faites-vous entre de la vente et du conseil ?", r: "Vendre réclame d'orienter le bénéfice CAB vers la prise de licence. Conseiller résout un litige d'assistance technique pour fidéliser l'abonné." },
                { q: "Si un client refuse définitivement de vous écouter en prospection sortante ?", r: "Je respecte sa liberté, je prends note de sa volonté de désinscription RGPD, je le remercie de son accueil poli et je prends congé chaleureusement." },
                { q: "Que signifie pour vous la charte RGPD dans le renseignement informatique ?", r: "L'obligation légale d'écrire des commentaires respectueux, totalement objectifs et neutres, car le consommateur peut demander un audit de ses données." },
                { q: "Quelle formation vous a mené à ces démarches téléphoniques ?", r: "L'Académie CallPro a validé mon expertise des structures CROC, de l'entonnoir commercial, des méthodes CRAC (objections) et DESC (résolutions de crise)." },
                { q: "Comment gérez-vous l'agressive routine d'essuyer 90% de non en télévente ?", r: "C'est une métrique statistique naturelle de prospection. Chaque refus qualifie les profils et me rapproche de la confirmation finale." },
                { q: "Un client signale que vous êtes trop familier dans votre phrasé vocal ?", r: "Je m'excuse immédiatement avec empathie et je reviens au vouvoiement le plus formel et protocolaire." },
                { q: "Qu'est-ce que le 'First Contact Resolution' (FCR) et pourquoi est-il l'indicateur roi ?", r: "C'est solder le souci dès l'appel. Cela donne une satisfaction maximale et supprime les appels redondants de réclamation saturant l'ACD." },
                { q: "À quel moment sollicitez-vous votre superviseur ?", r: "Uniquement lors d'anomalies de dérogation tarifaire hors de ma juridiction informatique, ou en cas d'agression grossière répétée malgré avertissement." },
                { q: "Quelles questions de curiosité posez-vous en fin d'oral ?", r: "Je m'enquiers de la version système du CRM (Salesforce / Genesys) et de l'indicateur principal suivi en priorité par l'équipe qualité." },
                { q: "Comment énoncez-vous un mot d'articulation technique difficile à l'agent ?", r: "En utilisant l'alphabet phonétique OACI international : A comme Anatole, B comme Beatrice, de façon lente et distincte." },
                { q: "Quelle différence de posture vocale face à un jeune et un senior ?", r: "Je conserve un vouvoiement égal mais je ralentis le rythme d'énonciation des adresses mails et termes informatiques pour un profil âgé." },
                { q: "Quel est votre principal point de progression à distance ?", r: "Canaliser mon enthousiasme naturel pour préserver une DMT rigoureuse lors de thématiques de bavardages conviviaux." }
              ].map((faq, i) => (
                <div key={i} className="bg-ink-soft/50 p-4 rounded-sm border border-hairline space-y-1">
                  <p className="font-semibold text-bronze flex items-center gap-1.5">
                    <span className="text-[10px] text-paper-dim/60 font-mono">Q.{i + 11}</span>
                    {faq.q}
                  </p>
                  <p className="text-paper-dim italic pl-5 leading-normal">
                    « {faq.r} »
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      );

    default:
      return <div className="text-paper-dim/80">Exemple non disponible pour ce cours.</div>;
  }
}

// Collapsible helper component for Case Studies in Module 10
function CaseStudyRow({ c, idx }: { c: { cas: string; details: string; corriger: string }; idx: number; key?: any }) {
  const [showResult, setShowResult] = useState(false);

  return (
    <div className="panel p-6 rounded-sm border border-hairline bg-ink-soft/30 space-y-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-hairline pb-2">
        <h5 className="text-sm font-display font-medium text-rust-bright">
          Cas d'étude {idx + 1} : {c.cas}
        </h5>
        <span className="text-xs text-bronze font-mono uppercase bg-bronze/15 px-2 py-0.5 rounded">CONFRONTATION AVÉRÉE</span>
      </div>
      
      <p className="text-xs text-paper-dim bg-ink-soft p-3 rounded-lg border border-hairline leading-relaxed">
        <strong>Contexte :</strong> {c.details}
      </p>

      <div>
        <button
          type="button"
          onClick={() => setShowResult(!showResult)}
          className="flex items-center gap-2 px-4 py-2 bg-ink-lift hover:bg-ink-lift text-rust-bright text-xs font-semibold rounded-sm border border-rust/35 transition-all cursor-pointer"
        >
          <Eye className="w-3.5 h-3.5" />
          {showResult ? "Masquer le corrigé académique" : "Révéler le corrigé et l'analyse DESC"}
        </button>

        {showResult && (
          <div className="mt-3 p-4 bg-sage/10 border border-sage-bright/25 rounded-sm space-y-2 animate-fade-in">
            <span className="text-[10px] font-mono tracking-wider text-sage-bright font-bold uppercase block">Résolution recommandée</span>
            <p className="text-xs text-paper font-sans leading-relaxed">
              {c.corriger}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// Collapsible helper code component for standard study FAQ row
function QuestionRow({ faq, index }: { faq: { question: string; answer: string; criteria?: string }; index: number; key?: any }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-ink-soft/50 rounded-sm border border-hairline overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full text-left p-4 hover:bg-ink-lift/60 transition-all flex justify-between items-center cursor-pointer text-xs font-semibold text-paper font-display"
      >
        <span className="flex items-center gap-2">
          <span className="text-bronze font-mono">Q.{index + 1}</span>
          {faq.question}
        </span>
        <span className="text-rust-bright font-bold">{open ? "[-]" : "[+]"}</span>
      </button>

      {open && (
        <div className="p-4 bg-ink-soft/70 border-t border-hairline text-xs text-paper-dim leading-relaxed font-sans italic">
          <p className="text-bronze font-semibold text-[10px] uppercase font-mono tracking-wider mb-1">RÉPONSE MODÈLE RECOMMANDÉE :</p>
          « {faq.answer} »
        </div>
      )}
    </div>
  );
}

/* =========================================
   À RETENIR TAB
   ========================================= */
function RetainTabContent({ module }: { module: TrainingModule }) {
  return (
    <div className="panel p-6 md:p-8 rounded-sm border border-bronze/35 bg-bronze/10 flex items-start gap-4 ">
      <div className="w-10 h-10 rounded-full bg-bronze/15 border border-bronze/40 flex items-center justify-center text-bronze flex-shrink-0">
        <Award className="w-5 h-5 " />
      </div>
      <div className="space-y-2">
        <h4 className="text-md font-display font-medium text-bronze">
          L'Aide-mémoire : À retenir absolument !
        </h4>
        <p className="text-sm text-paper-dim leading-relaxed font-sans font-medium">
          {module.retractionText}
        </p>
        <div className="pt-3 flex flex-wrap gap-2 text-[10px] font-mono text-paper-dim/80">
          <span className="px-2 py-0.5 bg-ink-soft rounded border border-hairline">POSTURE COMMERCIALE</span>
          <span className="px-2 py-0.5 bg-ink-soft rounded border border-hairline">EXAMEN RH CONFORME</span>
          <span className="px-2 py-0.5 bg-ink-soft rounded border border-hairline">SOUTIEN QUALITÉ</span>
        </div>
      </div>
    </div>
  );
}

/* =========================================
   QUIZ TAB
   ========================================= */
interface QuizTabProps {
  quiz: QuizQuestion[];
  savedScore: number;
  onQuizSubmit: (score: number) => void;
  moduleId: number;
}

function QuizTabContent({ quiz, savedScore, onQuizSubmit, moduleId }: QuizTabProps) {
  const [selectedAnswers, setSelectedAnswers] = useState<{ [qId: number]: number }>({});
  const [showResults, setShowResults] = useState(false);
  const [currentScore, setCurrentScore] = useState(0);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Reset local state if moduleId changes
  useEffect(() => {
    setSelectedAnswers({});
    setShowResults(false);
    setCurrentScore(0);
    setErrorMsg(null);
  }, [moduleId]);

  const handleSelectOption = (questionId: number, optionIdx: number) => {
    if (showResults) return; // Locked once evaluated
    setErrorMsg(null);
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: optionIdx
    }));
  };

  const handleEvaluate = () => {
    // Check if fully answered
    if (Object.keys(selectedAnswers).length < quiz.length) {
      setErrorMsg("Veuillez répondre aux 5 questions avant de soumettre l'évaluation.");
      return;
    }

    let correctCount = 0;
    quiz.forEach(q => {
      if (selectedAnswers[q.id] === q.correctAnswerIndex) {
        correctCount++;
      }
    });

    const percent = Math.round((correctCount / quiz.length) * 100);
    setCurrentScore(percent);
    setShowResults(true);
    onQuizSubmit(percent);
  };

  const handleResetQuiz = () => {
    setSelectedAnswers({});
    setShowResults(false);
    setCurrentScore(0);
  };

  const isAllAnswered = Object.keys(selectedAnswers).length === quiz.length;

  return (
    <div className="space-y-6">
      {/* Intro info card */}
      <div className="bg-ink-soft/60 border border-hairline rounded-sm p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <h4 className="text-paper font-display font-medium text-md flex items-center gap-2">
            <HelpIcon className="w-5 h-5 text-bronze" />
            Évaluation de fin de module : Validation des compétences
          </h4>
          <p className="text-xs text-paper-dim max-w-xl leading-normal">
            Ce QCM de 5 questions valide votre assimilation des notions abordées. Vous devez obtenir au moins <strong className="text-bronze">80% de réussite</strong> (4 bonnes réponses) pour valider ce module dans votre certification.
          </p>
        </div>
        
        {savedScore > 0 && (
          <div className="bg-ink-soft/70 p-3 rounded-sm border border-hairline text-center self-start md:self-auto min-w-32">
            <p className="text-[9px] uppercase font-mono tracking-wider text-paper-dim/80">Meilleur score</p>
            <p className="text-xl font-display font-medium text-rust-bright">{savedScore}%</p>
            <p className="text-[10px] text-paper-dim/80">
              {savedScore >= 80 ? "Validé" : "À reprendre"}
            </p>
          </div>
        )}
      </div>

      {/* Quiz question list */}
      <div className="space-y-6">
        {quiz.map((q, qIdx) => {
          const userAns = selectedAnswers[q.id];
          const isCorrect = userAns === q.correctAnswerIndex;

          return (
            <div key={q.id} className="panel p-6 rounded-sm border border-hairline bg-ink-soft/30 space-y-4">
              <div className="flex items-start gap-2.5">
                <span className="w-6 h-6 rounded-md bg-rust/10 text-rust-bright font-bold border border-bronze/30 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                  {qIdx + 1}
                </span>
                <p className="text-sm font-semibold text-paper leading-relaxed">{q.question}</p>
              </div>

              {/* Options list */}
              <div className="grid grid-cols-1 gap-2 pl-8">
                {q.options.map((opt, oIdx) => {
                  const isSelected = userAns === oIdx;
                  let optStyle = "bg-ink-soft/50 border-hairline text-paper-dim hover:bg-ink-soft/60 hover:text-paper";
                  
                  if (isSelected) {
                    optStyle = "bg-rust/15 border-rust text-paper ring-1 ring-rust";
                  }

                  if (showResults) {
                    const isCurrentCorrect = q.correctAnswerIndex === oIdx;
                    if (isCurrentCorrect) {
                      optStyle = "bg-sage/15 border-sage-bright text-paper font-medium ring-1 ring-sage-bright";
                    } else if (isSelected && !isCorrect) {
                      optStyle = "bg-red-500/10 border-red-500 text-red-200 ring-1 ring-red-500";
                    } else {
                      optStyle = "opacity-40 border-hairline text-paper-dim/60 pointer-events-none";
                    }
                  }

                  return (
                    <button
                      key={oIdx}
                      type="button"
                      disabled={showResults}
                      onClick={() => handleSelectOption(q.id, oIdx)}
                      className={`w-full text-left p-3.5 rounded-sm border text-xs transition-all flex items-center justify-between cursor-pointer ${optStyle}`}
                    >
                      <span>{opt}</span>
                      <div className="flex items-center gap-2">
                        {showResults && q.correctAnswerIndex === oIdx && <Check className="w-4 h-4 text-sage-bright" />}
                        {showResults && isSelected && !isCorrect && <X className="w-4 h-4 text-red-400" />}
                        <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                          isSelected ? "border-rust bg-rust" : "border-paper-dim/40"
                        }`}>
                          {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-ink" />}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Correction Summary Box */}
              {showResults && (
                <div className={`mt-3 p-4 rounded-sm text-xs flex gap-3 pl-8 animate-fade-in ${
                  isCorrect 
                    ? "bg-sage/10 border border-sage-bright/20 text-paper" 
                    : "bg-red-500/5 border border-red-500/10 text-red-100"
                }`}>
                  <div className="font-mono text-xl">{isCorrect ? "😇" : "🧐"}</div>
                  <div className="space-y-1">
                    <p className="font-bold">
                      {isCorrect ? "Bonne réponse !" : "Réponse incorrecte"}
                    </p>
                    <p className="text-paper-dim leading-normal font-sans">
                      {q.explanation}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Evaluate Action button bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-hairline">
        {!isAllAnswered && !showResults && (
          <span className="text-xs font-semibold text-bronze bg-bronze/10 border border-hairline px-3.5 py-1.5 rounded-sm animate-pulse flex items-center gap-1.5 self-start sm:self-auto">
            ⚠️ Répondez encore à {quiz.length - Object.keys(selectedAnswers).length} question(s) pour débloquer.
          </span>
        )}
        {errorMsg && (
          <span className="text-xs font-semibold text-red-400 bg-red-400/5 border border-red-500/10 px-3.5 py-1.5 rounded-sm animate-bounce self-start sm:self-auto">
            {errorMsg}
          </span>
        )}
        <div className="flex items-center gap-3 ml-auto">
          {showResults ? (
            <>
              <div className="text-right mr-2">
                <p className="text-xs text-paper-dim/80">Score de cette tentative :</p>
                <p className={`text-md font-bold ${currentScore >= 80 ? "text-sage-bright" : "text-bronze"}`}>
                  {currentScore}% ({currentScore >= 80 ? "Validé !" : "Échec, sous les 80%"})
                </p>
              </div>
              <button
                type="button"
                onClick={handleResetQuiz}
                className="flex items-center gap-1.5 px-6 py-2.5 bg-ink-lift hover:bg-ink-soft text-paper-dim hover:text-rust-bright text-xs font-semibold rounded-sm border border-hairline transition-all cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                Recommencer le Quiz
              </button>
            </>
          ) : (
            <button
              type="button"
              onClick={handleEvaluate}
              disabled={!isAllAnswered}
              className={`flex items-center gap-1.5 px-8 py-3 rounded-sm text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                isAllAnswered
                  ? "bg-rust hover:bg-rust-bright text-ink hover:"
                  : "bg-rust/20 text-ink/60 border border-hairline cursor-not-allowed"
              }`}
            >
              Soumettre mes réponses
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
