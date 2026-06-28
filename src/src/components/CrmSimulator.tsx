/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { CRMField } from "../types";
import { CheckCircle, RefreshCw, Send, AlertCircle } from "lucide-react";

interface CrmSimulatorProps {
  initialFields: CRMField[];
  scenario: string;
  expectedKeywords?: { key: string; keywords: string[]; hint: string }[];
  onSaveSuccess?: () => void;
}

export default function CrmSimulator({ initialFields, scenario, expectedKeywords = [], onSaveSuccess }: CrmSimulatorProps) {
  const [fields, setFields] = useState<CRMField[]>(initialFields);
  const [isSaved, setIsSaved] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [feedback, setFeedback] = useState<{ key: string; message: string }[]>([]);

  const handleInputChange = (key: string, val: string) => {
    setFields(prev =>
      prev.map(f => (f.key === key ? { ...f, value: val } : f))
    );
    setIsSaved(false);
  };

  const handleReset = () => {
    setFields(initialFields.map(f => ({ ...f, value: "" })));
    setIsSaved(false);
    setFeedback([]);
  };

  // Light-touch quality check: flags fields whose content doesn't mention
  // any of the expected keywords for that field, without blocking submission.
  const evaluateQuality = (): { key: string; message: string }[] => {
    const notes: { key: string; message: string }[] = [];
    expectedKeywords.forEach(({ key, keywords, hint }) => {
      const field = fields.find(f => f.key === key);
      if (!field) return;
      const value = field.value.toLowerCase();
      const found = keywords.some(kw => value.includes(kw.toLowerCase()));
      if (field.value.trim().length > 0 && !found) {
        notes.push({ key, message: hint });
      }
    });
    return notes;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      setIsSaved(true);
      setFeedback(evaluateQuality());
      if (onSaveSuccess) onSaveSuccess();
    }, 900);
  };

  return (
    <div className="border border-hairline rounded-sm max-w-2xl mx-auto my-6">
      <div className="px-6 py-4 border-b border-hairline">
        <p className="eyebrow text-rust-bright mb-2">Mise en situation</p>
        <p className="text-sm text-paper-dim leading-relaxed font-voice-italic">
          {scenario}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="p-6 space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {fields.map(field => {
            if (field.type === "textarea") return null;
            const hasFeedback = feedback.some(f => f.key === field.key);
            return (
              <div key={field.key} className="space-y-1.5">
                <label className="block text-xs font-medium text-paper-dim/80">
                  {field.label} {field.required && <span className="text-rust-bright">*</span>}
                </label>
                {field.type === "select" ? (
                  <select
                    value={field.value}
                    onChange={e => handleInputChange(field.key, e.target.value)}
                    required={field.required}
                    className={`w-full bg-ink-soft border rounded-sm py-2 px-3 text-sm text-paper focus:outline-none focus:border-rust ${hasFeedback ? "border-bronze" : "border-hairline"}`}
                  >
                    <option value="">Choisir...</option>
                    {field.options?.map(opt => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={field.type}
                    value={field.value}
                    onChange={e => handleInputChange(field.key, e.target.value)}
                    required={field.required}
                    placeholder={`Saisir le ${field.label.toLowerCase()}`}
                    className={`w-full bg-ink-soft border rounded-sm py-2 px-3 text-sm text-paper focus:outline-none focus:border-rust ${hasFeedback ? "border-bronze" : "border-hairline"}`}
                  />
                )}
                {hasFeedback && (
                  <p className="text-[11px] text-bronze flex items-start gap-1 pt-0.5">
                    <AlertCircle className="w-3 h-3 flex-shrink-0 mt-0.5" strokeWidth={1.75} />
                    {feedback.find(f => f.key === field.key)?.message}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {fields.filter(f => f.type === "textarea").map(field => {
          const hasFeedback = feedback.some(f => f.key === field.key);
          return (
            <div key={field.key} className="space-y-1.5">
              <label className="block text-xs font-medium text-paper-dim/80">
                {field.label} {field.required && <span className="text-rust-bright">*</span>}
              </label>
              <textarea
                rows={4}
                value={field.value}
                onChange={e => handleInputChange(field.key, e.target.value)}
                required={field.required}
                placeholder="Rédigez un résumé neutre et complet de l'appel..."
                className={`w-full bg-ink-soft border rounded-sm py-2 px-3 text-sm text-paper focus:outline-none focus:border-rust resize-none ${hasFeedback ? "border-bronze" : "border-hairline"}`}
              />
              {hasFeedback && (
                <p className="text-[11px] text-bronze flex items-start gap-1 pt-0.5">
                  <AlertCircle className="w-3 h-3 flex-shrink-0 mt-0.5" strokeWidth={1.75} />
                  {feedback.find(f => f.key === field.key)?.message}
                </p>
              )}
            </div>
          );
        })}

        <div className="flex items-center justify-end gap-3 pt-2">
          <button
            type="button"
            onClick={handleReset}
            className="flex items-center gap-1.5 px-4 py-2 text-paper-dim hover:text-paper text-xs font-medium rounded-sm border border-hairline hover:border-bronze transition-all cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" strokeWidth={1.75} />
            Réinitialiser
          </button>
          <button
            type="submit"
            disabled={isSaving}
            className={`flex items-center gap-1.5 px-6 py-2 rounded-sm text-xs font-medium transition-all cursor-pointer ${
              isSaving ? "bg-rust/50 text-ink" : "bg-rust hover:bg-rust-bright text-ink"
            }`}
          >
            {isSaving ? (
              <>
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                Enregistrement...
              </>
            ) : (
              <>
                <Send className="w-3.5 h-3.5" strokeWidth={1.75} />
                Enregistrer la fiche
              </>
            )}
          </button>
        </div>
      </form>

      {isSaved && (
        <div className="px-6 pb-6">
          <div className="flex items-start gap-3 bg-sage/10 border border-sage-bright/25 p-4 rounded-sm">
            <CheckCircle className="text-sage-bright w-4 h-4 flex-shrink-0 mt-0.5" strokeWidth={1.75} />
            <div className="text-sm text-paper leading-normal">
              <p className="font-medium">Fiche enregistrée.</p>
              <p className="text-paper-dim text-xs mt-0.5">
                {feedback.length > 0
                  ? "Quelques champs gagneraient en précision — voir les remarques ci-dessus."
                  : "Tous les éléments attendus sont présents dans votre saisie."}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
