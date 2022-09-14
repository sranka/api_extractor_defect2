/** Property that offers a function that returns flux-sanitized value of an object.  */
export const FLUX_VALUE = Symbol('FLUX_VALUE')

/**
 * A flux parameter can print its (sanitized) flux value.
 */
export interface FluxParameterLike {
  [FLUX_VALUE](): string
}