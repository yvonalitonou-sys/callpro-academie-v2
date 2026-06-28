/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useState } from "react";
import { Award, Printer, ShieldCheck, Calendar, User, Download, FileCheck, Loader2 } from "lucide-react";

interface DiplomaCertificateProps {
  score: number;
  fullNameDefault: string;
  directorName?: string;
}

// --- Native Canvas Helpers for Offline-safe Multi-platform Exports ---
function wrapText(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  lineHeight: number
) {
  const words = text.split(" ");
  let line = "";
  let currentY = y;

  for (let n = 0; n < words.length; n++) {
    const testLine = line + words[n] + " ";
    const metrics = ctx.measureText(testLine);
    const testWidth = metrics.width;
    if (testWidth > maxWidth && n > 0) {
      ctx.fillText(line.trim(), x, currentY);
      line = words[n] + " ";
      currentY += lineHeight;
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line.trim(), x, currentY);
}

function drawAwardInsignia(ctx: CanvasRenderingContext2D, cx: number, cy: number) {
  ctx.save();
  ctx.strokeStyle = "#B8612F";
  ctx.lineWidth = 4;

  // Ribbon left
  ctx.beginPath();
  ctx.moveTo(cx - 15, cy + 15);
  ctx.lineTo(cx - 30, cy + 70);
  ctx.lineTo(cx - 15, cy + 60);
  ctx.lineTo(cx, cy + 70);
  ctx.lineTo(cx - 5, cy + 15);
  ctx.closePath();
  ctx.fillStyle = "rgba(184, 97, 47, 0.85)";
  ctx.fill();

  // Ribbon right
  ctx.beginPath();
  ctx.moveTo(cx + 5, cy + 15);
  ctx.lineTo(cx, cy + 70);
  ctx.lineTo(cx + 15, cy + 60);
  ctx.lineTo(cx + 30, cy + 70);
  ctx.lineTo(cx + 15, cy + 15);
  ctx.closePath();
  ctx.fillStyle = "rgba(184, 97, 47, 0.85)";
  ctx.fill();

  // Draw star/sun rays polygon
  ctx.beginPath();
  const spikes = 16;
  const outerRadius = 40;
  const innerRadius = 30;
  let rot = Math.PI / 2 * 3;
  let x = cx;
  let y = cy;
  const step = Math.PI / spikes;

  for (let i = 0; i < spikes; i++) {
    x = cx + Math.cos(rot) * outerRadius;
    y = cy + Math.sin(rot) * outerRadius;
    ctx.lineTo(x, y);
    rot += step;

    x = cx + Math.cos(rot) * innerRadius;
    y = cy + Math.sin(rot) * innerRadius;
    ctx.lineTo(x, y);
    rot += step;
  }
  ctx.closePath();
  ctx.fillStyle = "rgba(14, 13, 12, 0.95)";
  ctx.fill();
  ctx.stroke();

  // Inner bronze circle
  ctx.beginPath();
  ctx.arc(cx, cy, 24, 0, Math.PI * 2);
  ctx.strokeStyle = "#B8612F";
  ctx.lineWidth = 2.5;
  ctx.stroke();

  // Inner star decoration
  ctx.beginPath();
  ctx.arc(cx, cy, 14, 0, Math.PI * 2);
  ctx.fillStyle = "#B8612F";
  ctx.fill();

  // Cutout center
  ctx.beginPath();
  ctx.arc(cx, cy, 8, 0, Math.PI * 2);
  ctx.fillStyle = "#0E0D0C";
  ctx.fill();

  ctx.restore();
}

function drawStampSeal(ctx: CanvasRenderingContext2D, cx: number, cy: number) {
  ctx.save();
  // Outer dash circle
  ctx.strokeStyle = "rgba(184, 97, 47, 0.6)";
  ctx.lineWidth = 2.5;
  ctx.setLineDash([7, 4]);
  ctx.beginPath();
  ctx.arc(cx, cy, 55, 0, Math.PI * 2);
  ctx.stroke();
  ctx.setLineDash([]);

  // Inner solid circle
  ctx.strokeStyle = "rgba(184, 97, 47, 0.4)";
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.arc(cx, cy, 45, 0, Math.PI * 2);
  ctx.stroke();

  // Draw an elegant "Check" inside the seal
  ctx.strokeStyle = "#B8612F";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(cx - 16, cy + 2);
  ctx.lineTo(cx - 4, cy + 14);
  ctx.lineTo(cx + 18, cy - 14);
  ctx.stroke();

  // Seal text
  ctx.fillStyle = "#B8612F";
  ctx.font = "600 13px 'Inter', sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("CERTIFIÉ", cx, cy + 32);
  ctx.restore();
}

export default function DiplomaCertificate({ score, fullNameDefault, directorName = "La Direction Pédagogique" }: DiplomaCertificateProps) {
  const [fullName, setFullName] = useState(fullNameDefault || "");
  const [isDownloading, setIsDownloading] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const certRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadImage = async () => {
    setIsDownloading(true);

    try {
      const canvas = document.createElement("canvas");
      canvas.width = 1920;
      canvas.height = 1357;
      const ctx = canvas.getContext("2d");
      if (!ctx) throw new Error("Impossible d'obtenir le contexte 2D du canvas");

      ctx.textBaseline = "middle";
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";

      // Charcoal radial wash background
      const grad = ctx.createRadialGradient(960, 678, 100, 960, 678, 1000);
      grad.addColorStop(0, "#1E1B18");
      grad.addColorStop(1, "#0E0D0C");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 1920, 1357);

      // Double bronze borders
      ctx.strokeStyle = "#B8612F";
      ctx.lineWidth = 4;
      ctx.strokeRect(40, 40, 1920 - 80, 1357 - 80);

      ctx.strokeStyle = "rgba(184, 97, 47, 0.4)";
      ctx.lineWidth = 2;
      ctx.strokeRect(52, 52, 1920 - 104, 1357 - 104);

      // Corners
      const corners = [
        { x1: 30, y1: 80, x2: 30, y2: 30, x3: 80, y3: 30 },
        { x1: 1920 - 80, y1: 30, x2: 1920 - 30, y2: 30, x3: 1920 - 30, y3: 80 },
        { x1: 30, y1: 1357 - 80, x2: 30, y2: 1357 - 30, x3: 80, y3: 1357 - 30 },
        { x1: 1920 - 80, y1: 1357 - 30, x2: 1920 - 30, y2: 1357 - 30, x3: 1920 - 30, y3: 1357 - 80 }
      ];
      ctx.strokeStyle = "#B8612F";
      ctx.lineWidth = 3;
      corners.forEach(c => {
        ctx.beginPath();
        ctx.moveTo(c.x1, c.y1);
        ctx.lineTo(c.x2, c.y2);
        ctx.lineTo(c.x3, c.y3);
        ctx.stroke();
      });

      drawAwardInsignia(ctx, 960, 140);

      // Header eyebrow
      ctx.textAlign = "center";
      ctx.fillStyle = "#8A7A5C";
      ctx.font = "600 20px 'Inter', 'Helvetica Neue', Arial, sans-serif";
      ctx.fillText("CERTIFICATION PROFESSIONNELLE", 960, 245);

      // Title
      ctx.fillStyle = "#F5F1E8";
      ctx.font = "italic 500 58px 'Georgia', 'Times New Roman', serif";
      ctx.fillText("CallPro Académie", 960, 310);

      // Divider line
      const divGrad = ctx.createLinearGradient(760, 0, 1160, 0);
      divGrad.addColorStop(0, "rgba(184, 97, 47, 0)");
      divGrad.addColorStop(0.5, "rgba(184, 97, 47, 1)");
      divGrad.addColorStop(1, "rgba(184, 97, 47, 0)");
      ctx.strokeStyle = divGrad;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(760, 355);
      ctx.lineTo(1160, 355);
      ctx.stroke();

      // Subtitle
      ctx.fillStyle = "#C9C3B6";
      ctx.font = "italic 26px 'Georgia', serif";
      ctx.fillText("Le comité d'évaluation atteste que", 960, 420);

      // Candidate name
      const displayNameNormalized = (fullName.trim() || "NOM ET PRÉNOM").toUpperCase();
      ctx.fillStyle = "#F5F1E8";
      ctx.font = "600 60px 'Georgia', serif";
      ctx.fillText(displayNameNormalized, 960, 520);

      // Sub-line under name
      ctx.strokeStyle = "rgba(138, 122, 92, 0.4)";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(560, 575);
      ctx.lineTo(1360, 575);
      ctx.stroke();

      // Description paragraph
      ctx.fillStyle = "#E8E4DA";
      ctx.font = "26px 'Inter', Arial, sans-serif";
      const descText = "a validé le programme d'enseignement intensif de Téléconseiller Opérationnel, incluant l'écoute active, la structure d'appel CROC, la méthode de closing, le traitement d'objections CRAC, et le pilotage d'outils CRM métiers.";
      wrapText(ctx, descText, 960, 680, 1200, 46);

      // Result pill
      const pillText = `Résultat obtenu : moyenne de ${score.toFixed(1)}% aux évaluations`;

      ctx.font = "600 23px 'Inter', Arial, sans-serif";
      ctx.textAlign = "center";
      const measuredTextWidth = ctx.measureText(pillText).width;

      const badgeY = 880;
      const pillWidth = Math.max(980, Math.ceil(measuredTextWidth) + 80);
      const pillHeight = 76;
      const pillX = 960 - pillWidth / 2;

      ctx.fillStyle = "rgba(184, 97, 47, 0.08)";
      ctx.strokeStyle = "#B8612F";
      ctx.lineWidth = 1.5;

      const r = 4;
      const x_p = pillX, y_p = badgeY, w_p = pillWidth, h_p = pillHeight;
      ctx.beginPath();
      ctx.moveTo(x_p + r, y_p);
      ctx.lineTo(x_p + w_p - r, y_p);
      ctx.quadraticCurveTo(x_p + w_p, y_p, x_p + w_p, y_p + r);
      ctx.lineTo(x_p + w_p, y_p + h_p - r);
      ctx.quadraticCurveTo(x_p + w_p, y_p + h_p, x_p + w_p - r, y_p + h_p);
      ctx.lineTo(x_p + r, y_p + h_p);
      ctx.quadraticCurveTo(x_p, y_p + h_p, x_p, y_p + h_p - r);
      ctx.lineTo(x_p, y_p + r);
      ctx.quadraticCurveTo(x_p, y_p, x_p + r, y_p);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = "#D6753C";
      ctx.font = "600 23px 'Inter', Arial, sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(pillText, 960, badgeY + pillHeight / 2);

      // Footer
      const footerY = 1110;

      ctx.textAlign = "left";
      ctx.fillStyle = "#C9C3B6";
      ctx.font = "24px 'Inter', Arial, sans-serif";
      ctx.fillText(`Date de délivrance : ${new Date().toLocaleDateString('fr-FR')}`, 130, footerY);

      ctx.fillStyle = "#8A8580";
      ctx.font = "19px 'Courier New', Courier, monospace";
      ctx.fillText(`ID Certificat : CP-${(score * 17).toString(36).toUpperCase()}-2026`, 130, footerY + 38);

      ctx.fillStyle = "#8A8580";
      ctx.font = "19px 'Inter', Arial, sans-serif";
      ctx.fillText("Statut : Authentifié en ligne", 130, footerY + 74);

      drawStampSeal(ctx, 960, footerY + 34);
      ctx.fillStyle = "#B8612F";
      ctx.font = "600 13px 'Inter', sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("SCELLEMENT ACADÉMIQUE", 960, footerY + 115);

      ctx.textAlign = "right";
      ctx.fillStyle = "#C9C3B6";
      ctx.font = "italic 22px 'Georgia', serif";
      ctx.fillText("Pour la direction pédagogique :", 1790, footerY - 15);

      ctx.fillStyle = "#D6753C";
      ctx.font = "italic 600 30px 'Georgia', serif";
      ctx.fillText(directorName, 1790, footerY + 38);

      ctx.strokeStyle = "#2A2622";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(1490, footerY + 68);
      ctx.lineTo(1790, footerY + 68);
      ctx.stroke();

      ctx.fillStyle = "#8A8580";
      ctx.font = "18px 'Inter', Arial, sans-serif";
      ctx.fillText("Direction Générale CallPro", 1790, footerY + 84);

      const dataUrl = canvas.toDataURL("image/png");
      setPreviewImage(dataUrl);

      try {
        const cleanName = (fullName.trim() || "Nom_Prenom").replace(/[^a-zA-Z0-9]/g, "_");
        const link = document.createElement("a");
        link.download = `Certificat_CallPro_${cleanName}.png`;
        link.href = dataUrl;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (clickErr) {
        console.warn("Autodownload failed, relying on the preview modal", clickErr);
      }

    } catch (err) {
      console.error("Erreur d'exportation d'image", err);
      alert(
        "Erreur technique lors de la génération du certificat. Vous pouvez faire une capture d'écran, ou utiliser l'option Imprimer / PDF."
      );
    } finally {
      setIsDownloading(false);
    }
  };

  const isEligible = score >= 80;
  const displayName = fullName.trim() || "NOM ET PRÉNOM";

  return (
    <div className="max-w-4xl mx-auto space-y-6 my-4">
      {/* Configuration bar */}
      <div className="border border-hairline rounded-sm p-6 no-print">
        <h3 className="text-lg font-display font-medium text-paper flex items-center gap-2 mb-2">
          <Award className="text-bronze w-5 h-5" strokeWidth={1.5} />
          Félicitations pour votre parcours
        </h3>

        {isEligible ? (
          <div className="space-y-4">
            <p className="text-sm text-paper-dim leading-relaxed">
              Votre moyenne générale de formation est de <strong className="text-rust-bright">{score.toFixed(1)}%</strong>, ce qui dépasse le seuil requis de <strong className="text-paper">80%</strong>. Vous êtes officiellement certifié opérationnel par CallPro.
            </p>
            <div className="flex flex-col md:flex-row gap-4 items-end bg-ink-soft/60 p-4 rounded-sm border border-hairline">
              <div className="flex-1 space-y-1.5 w-full">
                <label className="text-xs text-paper-dim/80 flex items-center gap-1.5">
                  <User className="w-3 h-3 text-bronze" strokeWidth={1.75} />
                  Saisissez votre prénom et nom pour personnaliser le certificat
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Nom Prénom"
                  className="w-full bg-ink-soft border border-hairline rounded-sm py-2 px-3 text-sm text-paper focus:outline-none focus:border-rust placeholder-paper-dim/40"
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <button
                  type="button"
                  onClick={handleDownloadImage}
                  disabled={isDownloading}
                  className="flex items-center justify-center gap-2 px-6 py-2.5 bg-rust hover:bg-rust-bright disabled:bg-rust/50 text-ink font-medium text-xs tracking-wide rounded-sm transition-all cursor-pointer"
                >
                  {isDownloading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Génération en cours...
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4" strokeWidth={1.75} />
                      Télécharger le certificat (PNG HD)
                    </>
                  )}
                </button>
                <button
                  onClick={handlePrint}
                  className="flex items-center justify-center gap-2 px-6 py-2.5 border border-hairline hover:border-bronze text-paper font-medium text-xs tracking-wide rounded-sm transition-all cursor-pointer"
                >
                  <Printer className="w-4 h-4 text-bronze" strokeWidth={1.75} />
                  Imprimer / PDF
                </button>
              </div>
            </div>

            <div className="bg-ink-lift/40 px-4 py-3 border border-hairline rounded-sm space-y-1">
              <p className="text-xs text-paper-dim leading-relaxed font-sans font-medium">
                Astuces d'exportation
              </p>
              <ul className="text-[11px] text-paper-dim/80 font-sans list-disc list-inside space-y-0.5">
                <li>Le bouton <strong className="text-paper">Télécharger (PNG HD)</strong> fonctionne directement sur tous les navigateurs et téléphones.</li>
                <li>Pour imprimer ou enregistrer en PDF via le bouton secondaire, ouvrez l'application dans un onglet complet si vous êtes dans une fenêtre restreinte d'éditeur.</li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="bg-rust/10 border border-rust/25 p-4 rounded-sm text-sm flex items-start gap-3">
              <ShieldCheck className="text-rust-bright w-5 h-5 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
              <div>
                <p className="font-medium text-paper">Accès au certificat verrouillé</p>
                <p className="text-paper-dim text-xs mt-1 leading-normal">
                  Votre moyenne actuelle est de <strong className="text-rust-bright">{score.toFixed(1)}%</strong>. Un minimum de <strong className="text-paper">80%</strong> sur l'intégralité des 12 modules est requis pour obtenir le certificat CallPro.
                </p>
              </div>
            </div>
            <p className="text-xs text-paper-dim">
              Complétez l'intégralité des 12 évaluations dans l'onglet "Formation" pour remonter votre score. Vous pouvez recommencer chaque évaluation autant de fois que nécessaire.
            </p>
          </div>
        )}
      </div>

      {/* Printable Certificate */}
      {isEligible && (
        <div className="w-full overflow-x-auto pb-6 pt-2 no-print">
          <div className="min-w-[780px] p-1.5 md:p-3 bg-gradient-to-tr from-rust/15 to-bronze/10 rounded-sm">
            <div
              ref={certRef}
              className="print-certificate-container w-full aspect-[1.414/1] bg-ink rounded-sm border-4 border-double border-bronze/50 p-6 md:p-8 relative overflow-hidden flex flex-col justify-between"
            >
              {/* Decorative Corner Ornaments */}
              <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-bronze/60"></div>
              <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-bronze/60"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-bronze/60"></div>
              <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-bronze/60"></div>

              {/* Glowing Background Seal */}
              <div data-html2canvas-ignore="true" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-rust/5 rounded-full blur-[80px] pointer-events-none"></div>

              {/* Top Header */}
              <div className="text-center space-y-1.5 z-10">
                <div className="flex justify-center items-center gap-2 mb-1">
                  <Award className="text-bronze w-8 h-8" strokeWidth={1.5} />
                  <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-bronze/90">Certification professionnelle</span>
                </div>
                <h1 className="text-3xl font-display font-medium font-voice-italic text-paper tracking-wide">
                  CallPro Académie
                </h1>
                <div className="w-48 h-[1px] bg-gradient-to-r from-transparent via-bronze to-transparent mx-auto"></div>
              </div>

              {/* Certificate Body */}
              <div className="text-center space-y-4 z-10 my-3">
                <p className="text-xs italic text-paper-dim font-voice-italic">Le comité d'évaluation atteste que</p>

                <h2 className="text-2xl md:text-3xl font-display font-medium text-paper tracking-widest uppercase border-b border-hairline pb-2 max-w-lg mx-auto">
                  {displayName}
                </h2>

                <p className="text-xs md:text-sm text-paper-dim max-w-xl mx-auto leading-relaxed font-sans px-4">
                  a validé le programme d'enseignement intensif de <span className="font-medium text-rust-bright">Téléconseiller Opérationnel</span>, incluant l'écoute active, la structure d'appel CROC, la méthode de closing, le traitement d'objections CRAC, et le pilotage d'outils CRM métiers.
                </p>

                <p className="text-[10px] md:text-xs font-medium text-rust-bright bg-rust/10 py-1 px-4 rounded-sm inline-block border border-rust/25">
                  Résultat obtenu : moyenne de {score.toFixed(1)}% aux évaluations
                </p>
              </div>

              {/* Footer of the Diploma */}
              <div className="flex justify-between items-end border-t border-hairline pt-4 z-10">
                <div className="text-left space-y-1 text-[11px]">
                  <div className="flex items-center gap-1.5 text-paper-dim">
                    <Calendar className="w-3.5 h-3.5 text-bronze" strokeWidth={1.75} />
                    <span>Date de délivrance : {new Date().toLocaleDateString('fr-FR')}</span>
                  </div>
                  <p className="text-paper-dim/60 font-mono text-[9px]">ID Certificat : CP-{(score * 17).toString(36).toUpperCase()}-2026</p>
                  <p className="text-paper-dim/60 text-[9px]">Statut : Authentifié en ligne</p>
                </div>

                <div className="flex flex-col items-center justify-center relative">
                  <div className="w-12 h-12 rounded-full border border-dashed border-bronze/40 flex items-center justify-center bg-bronze/5 p-1">
                    <FileCheck className="text-bronze w-6 h-6 opacity-75" strokeWidth={1.5} />
                  </div>
                  <span className="text-[7px] font-mono tracking-wider text-bronze mt-1 uppercase text-center">Scellement académique</span>
                </div>

                <div className="text-right space-y-1">
                  <p className="text-[9px] text-paper-dim italic font-voice-italic">Pour la direction pédagogique :</p>
                  <div className="font-display font-voice-italic text-rust-bright text-xs tracking-wider">
                    {directorName}
                  </div>
                  <p className="text-[8px] uppercase tracking-wide text-paper-dim/60 border-t border-hairline pt-0.5">Direction Générale CallPro</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Preview Modal */}
      {previewImage && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-ink/95 p-4 no-print">
          <div className="bg-ink-soft border border-hairline rounded-sm max-w-2xl w-full p-5 flex flex-col gap-4 relative overflow-hidden">

            <div className="flex justify-between items-start border-b border-hairline pb-3">
              <div>
                <h4 className="text-paper font-display font-medium text-base flex items-center gap-2">
                  <Award className="w-5 h-5 text-bronze" strokeWidth={1.5} />
                  Votre certificat est prêt
                </h4>
                <p className="text-xs text-paper-dim mt-0.5">
                  Généré avec succès. Choisissez votre mode de sauvegarde.
                </p>
              </div>
              <button
                onClick={() => setPreviewImage(null)}
                className="text-paper-dim hover:text-paper p-1.5 text-xs font-medium cursor-pointer transition-colors border border-hairline rounded-sm"
              >
                Fermer
              </button>
            </div>

            <div className="bg-ink-lift/50 p-3 rounded-sm border border-hairline text-xs text-paper-dim leading-relaxed font-sans flex flex-col gap-1">
              <span className="font-medium text-paper text-[13px]">
                Sur smartphone (Android ou iPhone)
              </span>
              <span>
                Maintenez le doigt appuyé sur l'image ci-dessous, puis choisissez <strong className="text-paper">« Enregistrer l'image »</strong> ou <strong className="text-paper">« Ajouter aux photos »</strong>.
              </span>
              <span className="text-[10px] text-paper-dim/70 italic mt-0.5">
                C'est l'alternative la plus fiable, quels que soient les réglages de votre appareil.
              </span>
            </div>

            <div className="bg-ink p-2 rounded-sm border border-hairline flex items-center justify-center max-h-[50vh] overflow-hidden">
              <img
                src={previewImage}
                alt="Votre certificat CallPro"
                referrerPolicy="no-referrer"
                className="max-h-[42vh] object-contain rounded-sm border border-bronze/20 select-all"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-1 justify-end">
              <a
                href={previewImage}
                download={`Certificat_CallPro_${(fullName.trim() || "Nom_Prenom").replace(/[^a-zA-Z0-9]/g, "_")}.png`}
                className="flex items-center justify-center gap-2 px-5 py-2 bg-rust hover:bg-rust-bright text-ink font-medium text-xs tracking-wide rounded-sm transition-all"
              >
                <Download className="w-4 h-4" strokeWidth={1.75} />
                Téléchargement direct
              </a>
              <button
                onClick={() => setPreviewImage(null)}
                className="flex items-center justify-center px-4 py-2 border border-hairline hover:border-bronze text-paper rounded-sm text-xs font-medium cursor-pointer"
              >
                Fermer l'aperçu
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Print stylesheet */}
      <style>{`
        @media print {
          body {
            background-color: #0E0D0C !important;
            color: #000000 !important;
          }
          .no-print, nav, header, aside, button, footer, .sidebar-selector {
            display: none !important;
          }
          .print-certificate-container {
            border: 4px double #B8612F !important;
            background-color: #0E0D0C !important;
            box-shadow: none !important;
            border-radius: 0 !important;
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            width: 100% !important;
            height: auto !important;
            aspect-ratio: 1.414/1 !important;
            page-break-inside: avoid !important;
            z-index: 9999999 !important;
            padding: 40px !important;
          }
        }
      `}</style>
    </div>
  );
}
