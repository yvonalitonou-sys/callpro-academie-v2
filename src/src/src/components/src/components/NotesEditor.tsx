/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { WrittenNote, TrainingModule } from "../types";
import { BookOpen, Save, Check, Copy, Trash2 } from "lucide-react";

interface NotesEditorProps {
  modules: TrainingModule[];
  initialNotes: WrittenNote;
  onSaveNotes: (notes: WrittenNote) => void;
}

export default function NotesEditor({ modules, initialNotes, onSaveNotes }: NotesEditorProps) {
  const [activeModuleId, setActiveModuleId] = useState<number>(modules[0].id);
  const [notes, setNotes] = useState<WrittenNote>(initialNotes);
  const [currentText, setCurrentText] = useState("");
  const [isSaved, setIsSaved] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [isDeleteConfirming, setIsDeleteConfirming] = useState(false);

  // Sync state with selected module notes
  useEffect(() => {
    setCurrentText(notes[activeModuleId] || "");
    setIsSaved(false);
    setIsDeleteConfirming(false);
  }, [activeModuleId, notes]);

  const handleSave = () => {
    const updatedNotes = {
      ...notes,
      [activeModuleId]: currentText
    };
    setNotes(updatedNotes);
    onSaveNotes(updatedNotes);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(currentText);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleDelete = () => {
    if (!isDeleteConfirming) {
      setIsDeleteConfirming(true);
      return;
    }
    const updatedNotes = {
      ...notes,
      [activeModuleId]: ""
    };
    setNotes(updatedNotes);
    onSaveNotes(updatedNotes);
    setCurrentText("");
    setIsDeleteConfirming(false);
  };

  const activeModule = modules.find(m => m.id === activeModuleId);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-hairline">
      {/* Sidebar: Module selection list */}
      <div className="bg-ink p-5 flex flex-col h-[500px]">
        <h3 className="eyebrow mb-4 pb-3 border-b border-hairline flex items-center gap-2">
          <BookOpen className="w-3.5 h-3.5" strokeWidth={1.75} />
          Sélectionner le module
        </h3>

        <div className="flex-1 overflow-y-auto space-y-0.5 pr-1">
          {modules.map(mod => {
            const hasNotes = notes[mod.id] && notes[mod.id].trim().length > 0;
            const active = activeModuleId === mod.id;
            return (
              <button
                key={mod.id}
                onClick={() => setActiveModuleId(mod.id)}
                className={`w-full text-left py-2.5 px-3 text-xs flex items-center justify-between cursor-pointer border-l-2 transition-all ${
                  active
                    ? "border-l-rust bg-ink-lift text-paper"
                    : "border-l-transparent text-paper-dim/70 hover:text-paper hover:bg-ink-soft"
                }`}
              >
                <div className="truncate pr-2">
                  <p className="font-mono text-[10px] text-bronze">{String(mod.id).padStart(2, "0")}</p>
                  <p className="truncate font-medium">{mod.title}</p>
                </div>
                {hasNotes && (
                  <span className="w-1.5 h-1.5 rounded-full bg-bronze flex-shrink-0" title="Notes rédigées" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Editor Space */}
      <div className="md:col-span-2 bg-ink p-6 flex flex-col h-[500px]">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-4 border-b border-hairline">
          <div className="space-y-0.5">
            <p className="eyebrow">Notes de cours</p>
            <h3 className="text-base font-display font-medium text-paper truncate max-w-sm">
              Module {activeModule?.id} — {activeModule?.title}
            </h3>
          </div>
          <div className="flex items-center gap-2">
            {currentText.trim().length > 0 && (
              <>
                <button
                  type="button"
                  onClick={handleCopy}
                  title="Copier les notes"
                  className="p-2 border border-hairline hover:border-bronze rounded-sm text-paper-dim hover:text-paper transition-all cursor-pointer"
                >
                  {isCopied ? <Check className="w-3.5 h-3.5 text-sage-bright" strokeWidth={1.75} /> : <Copy className="w-3.5 h-3.5" strokeWidth={1.75} />}
                </button>
                <button
                  type="button"
                  onClick={handleDelete}
                  title={isDeleteConfirming ? "Cliquez de nouveau pour valider la suppression définitive" : "Supprimer les notes"}
                  className={`p-2 rounded-sm border transition-all cursor-pointer flex items-center gap-1.5 text-xs font-medium ${
                    isDeleteConfirming
                      ? "border-rust-bright text-rust-bright bg-rust/10 px-3"
                      : "border-hairline text-paper-dim hover:text-rust-bright hover:border-rust/40"
                  }`}
                >
                  <Trash2 className="w-3.5 h-3.5" strokeWidth={1.75} />
                  {isDeleteConfirming && <span>Confirmer ?</span>}
                </button>
              </>
            )}
            <button
              type="button"
              onClick={handleSave}
              className="flex items-center gap-1.5 px-4 py-2 bg-rust hover:bg-rust-bright text-ink font-medium text-xs rounded-sm transition-all cursor-pointer"
            >
              {isSaved ? <Check className="w-3.5 h-3.5" strokeWidth={1.75} /> : <Save className="w-3.5 h-3.5" strokeWidth={1.75} />}
              {isSaved ? "Enregistré" : "Enregistrer"}
            </button>
          </div>
        </div>

        <div className="flex-1 flex flex-col relative">
          <textarea
            value={currentText}
            onChange={(e) => {
              setCurrentText(e.target.value);
              setIsSaved(false);
            }}
            placeholder="Rédigez ici vos résumés, termes clés, formulations à retenir ou fiches mémo pour votre entretien. Vos notes restent stockées dans ce navigateur."
            className="w-full flex-1 bg-ink-soft border border-hairline rounded-sm p-4 text-sm text-paper outline-none focus:border-rust resize-none placeholder-paper-dim/40 font-sans"
          />
          <div className="absolute bottom-3 right-3 font-mono text-[10px] text-paper-dim/60 bg-ink-soft px-2 py-1 rounded-sm border border-hairline pointer-events-none">
            {currentText.length} caractères · {currentText.split(/\s+/).filter(Boolean).length} mots
          </div>
        </div>
      </div>
    </div>
  );
}
