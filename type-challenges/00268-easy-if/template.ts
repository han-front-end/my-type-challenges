type If<C extends boolean, T extends unknown, F extends unknown> = C extends true  ? T : F
