'use client';

import { useMemo, useState } from 'react';

function cur(n: number) {
  return n.toLocaleString(undefined, { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
}

export default function ROIPage() {
  // Defaults match the example
  const [audits, setAudits] = useState(5);
  const [hoursPerAudit, setHoursPerAudit] = useState(300);
  const [hourlyCost, setHourlyCost] = useState(150);
  const [automationFactor, setAutomationFactor] = useState(0.8);

  const [deals, setDeals] = useState(20);
  const [avgDeal, setAvgDeal] = useState(250_000);
  const [cycleReduction, setCycleReduction] = useState(0.10);

  const [incidentProb, setIncidentProb] = useState(0.05);
  const [incidentCost, setIncidentCost] = useState(1_000_000);
  const [riskReduction, setRiskReduction] = useState(0.50);

  const [annualSignetCost, setAnnualSignetCost] = useState(150_000);

  const compliance = useMemo(() =>
    audits * hoursPerAudit * hourlyCost * automationFactor, [audits, hoursPerAudit, hourlyCost, automationFactor]);

  const risk = useMemo(() =>
    incidentProb * incidentCost * riskReduction, [incidentProb, incidentCost, riskReduction]);

  const sales = useMemo(() =>
    deals * avgDeal * cycleReduction, [deals, avgDeal, cycleReduction]);

  const total = compliance + risk + sales;
  const roi = total > 0 ? (total - annualSignetCost) / annualSignetCost : 0;
  const paybackMonths = total > 0 ? (12 * annualSignetCost) / total : Infinity;

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <header className="mb-10">
        <h1 className="text-3xl font-semibold">ROI Model — Signet Protocol</h1>
        <p className="mt-2 text-sm text-neutral-600">
          Estimate annual value from compliance automation, incident reduction, and deal acceleration.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Inputs */}
        <section className="lg:col-span-2 space-y-8">
          <div className="rounded-lg border p-6">
            <h2 className="text-lg font-medium">1) Compliance Automation</h2>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <label className="flex flex-col">
                <span className="text-sm text-neutral-600">Audits per year</span>
                <input type="number" className="mt-1 rounded border p-2"
                  value={audits} onChange={e => setAudits(+e.target.value)} />
              </label>
              <label className="flex flex-col">
                <span className="text-sm text-neutral-600">Hours per audit</span>
                <input type="number" className="mt-1 rounded border p-2"
                  value={hoursPerAudit} onChange={e => setHoursPerAudit(+e.target.value)} />
              </label>
              <label className="flex flex-col">
                <span className="text-sm text-neutral-600">Loaded hourly cost (USD)</span>
                <input type="number" className="mt-1 rounded border p-2"
                  value={hourlyCost} onChange={e => setHourlyCost(+e.target.value)} />
              </label>
              <label className="flex flex-col">
                <span className="text-sm text-neutral-600">Automation factor (0–1)</span>
                <input type="number" step="0.05" min="0" max="1" className="mt-1 rounded border p-2"
                  value={automationFactor} onChange={e => setAutomationFactor(+e.target.value)} />
              </label>
            </div>
            <p className="mt-3 text-sm text-neutral-600">
              Savings = Audits × Hours × Cost × Automation factor
            </p>
          </div>

          <div className="rounded-lg border p-6">
            <h2 className="text-lg font-medium">2) Deal Acceleration</h2>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <label className="flex flex-col">
                <span className="text-sm text-neutral-600">Deals per year</span>
                <input type="number" className="mt-1 rounded border p-2"
                  value={deals} onChange={e => setDeals(+e.target.value)} />
              </label>
              <label className="flex flex-col">
                <span className="text-sm text-neutral-600">Average deal size (USD)</span>
                <input type="number" className="mt-1 rounded border p-2"
                  value={avgDeal} onChange={e => setAvgDeal(+e.target.value)} />
              </label>
              <label className="flex flex-col">
                <span className="text-sm text-neutral-600">Cycle reduction (0–1)</span>
                <input type="number" step="0.01" min="0" max="1" className="mt-1 rounded border p-2"
                  value={cycleReduction} onChange={e => setCycleReduction(+e.target.value)} />
              </label>
            </div>
            <p className="mt-3 text-sm text-neutral-600">
              Value = Deals × Deal size × Cycle reduction
            </p>
          </div>

          <div className="rounded-lg border p-6">
            <h2 className="text-lg font-medium">3) Incident Cost Avoidance</h2>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <label className="flex flex-col">
                <span className="text-sm text-neutral-600">Annual incident probability (0–1)</span>
                <input type="number" step="0.01" min="0" max="1" className="mt-1 rounded border p-2"
                  value={incidentProb} onChange={e => setIncidentProb(+e.target.value)} />
              </label>
              <label className="flex flex-col">
                <span className="text-sm text-neutral-600">Average incident cost (USD)</span>
                <input type="number" className="mt-1 rounded border p-2"
                  value={incidentCost} onChange={e => setIncidentCost(+e.target.value)} />
              </label>
              <label className="flex flex-col">
                <span className="text-sm text-neutral-600">Risk reduction (0–1)</span>
                <input type="number" step="0.05" min="0" max="1" className="mt-1 rounded border p-2"
                  value={riskReduction} onChange={e => setRiskReduction(+e.target.value)} />
              </label>
            </div>
            <p className="mt-3 text-sm text-neutral-600">
              Avoided cost = Probability × Cost × Reduction
            </p>
          </div>

          <div className="rounded-lg border p-6">
            <h2 className="text-lg font-medium">4) Investment</h2>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <label className="flex flex-col">
                <span className="text-sm text-neutral-600">Annual Signet cost (USD)</span>
                <input type="number" className="mt-1 rounded border p-2"
                  value={annualSignetCost} onChange={e => setAnnualSignetCost(+e.target.value)} />
              </label>
            </div>
          </div>
        </section>

        {/* Summary */}
        <aside className="space-y-4">
          <div className="rounded-lg border p-6">
            <h3 className="text-base font-semibold">Annual Value Summary</h3>
            <dl className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between"><dt>Compliance savings</dt><dd className="font-medium">{cur(compliance)}</dd></div>
              <div className="flex justify-between"><dt>Deal acceleration</dt><dd className="font-medium">{cur(sales)}</dd></div>
              <div className="flex justify-between"><dt>Incident avoidance</dt><dd className="font-medium">{cur(risk)}</dd></div>
              <div className="flex justify-between border-t pt-2"><dt>Total annual value</dt><dd className="font-semibold">{cur(total)}</dd></div>
            </dl>
          </div>

          <div className="rounded-lg border p-6">
            <h3 className="text-base font-semibold">ROI & Payback</h3>
            <dl className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between"><dt>Annual cost (Signet)</dt><dd className="font-medium">{cur(annualSignetCost)}</dd></div>
              <div className="flex justify-between"><dt>ROI</dt><dd className="font-semibold">{(roi * 100).toFixed(0)}%</dd></div>
              <div className="flex justify-between"><dt>Payback</dt><dd className="font-semibold">{isFinite(paybackMonths) ? `${paybackMonths.toFixed(1)} months` : '—'}</dd></div>
            </dl>
            <p className="mt-3 text-xs text-neutral-600">
              ROI = (Total value − Cost) / Cost. Payback = 12 × Cost / Total value.
            </p>
          </div>

          <div className="rounded-lg border p-6">
            <h3 className="text-base font-semibold">Assumptions</h3>
            <ul className="mt-3 list-disc pl-5 text-sm text-neutral-700 space-y-1">
              <li>Automation factor reflects evidence generation at runtime.</li>
              <li>Deal acceleration captures earlier recognition + velocity only.</li>
              <li>Adjust incident rates/costs to your environment and history.</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
