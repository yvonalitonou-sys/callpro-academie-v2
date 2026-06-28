/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { CRMScenario } from "../types";
import CrmSimulator from "./CrmSimulator";

interface CrmScenarioPickerProps {
  scenarios: CRMScenario[];
}

export default function CrmScenarioPicker({ scenarios }: CrmScenarioPickerProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  // Resetting the simulator when the scenario changes requires a fresh
  // field state, so we key the child component by index.
  const active = scenarios[activeIdx];

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2 justify-center">
        {scenarios.map((sc, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIdx(idx)}
            className={`px-4 py-2 text-xs font-medium rounded-sm border transition-all cursor-pointer ${
              activeIdx === idx
                ? "border-rust bg-rust/10 text-rust-bright"
                : "border-hairline text-paper-dim/70 hover:text-paper hover:border-bronze"
            }`}
          >
            Situation {idx + 1}
          </button>
        ))}
      </div>
      <CrmSimulator
        key={activeIdx}
        initialFields={active.fields}
        scenario={active.scenario}
        expectedKeywords={active.expectedKeywords}
      />
    </div>
  );
}
