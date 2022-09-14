/** Property that offers a function that returns flux-sanitized value of an object.  */
export declare const FLUX_VALUE: unique symbol;
/**
 * A flux parameter can print its (sanitized) flux value.
 */
export interface FluxParameterLike {
    [FLUX_VALUE](): string;
}
//# sourceMappingURL=index.d.ts.map