export interface WorkflowAssumptions {
  baseline: number;
  eligible: number;
  automated: number;
  review: number;
}

export const defaultAssumptions: WorkflowAssumptions = {
  baseline: 100,
  eligible: 60,
  automated: 80,
  review: 8,
};

export function calculateWorkflow(input: WorkflowAssumptions) {
  const { baseline, eligible, automated, review } = input;
  if (
    ![baseline, eligible, automated, review].every(Number.isFinite) ||
    baseline <= 0 ||
    eligible < 0 ||
    eligible > 100 ||
    automated < 0 ||
    automated > 100 ||
    review < 0
  ) {
    throw new RangeError(
      "Enter a positive baseline, percentages from 0 to 100, and nonnegative review time.",
    );
  }
  const eligibleBefore = (baseline * eligible) / 100;
  const other = baseline - eligibleBefore;
  const remaining = eligibleBefore * (1 - automated / 100);
  const assisted = remaining + other + review;
  return {
    eligibleBefore,
    other,
    remaining,
    review,
    assisted,
    saved: baseline - assisted,
    reduction: ((baseline - assisted) / baseline) * 100,
  };
}
