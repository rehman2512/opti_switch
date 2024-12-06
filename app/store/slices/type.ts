export const Test = "Test" as const;
export const Test2 = "Test2" as const;
export const Test3 = "Test3" as const;

export type ActionType = typeof Test | typeof Test2 | typeof Test3;
