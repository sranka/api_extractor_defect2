/** Property that offers a function that returns flux-sanitized value of an object.  */
export const FLUX_VALUE = Symbol("FLUX_VALUE");
export const STRING_VALUE = "ADDED_just_to_know_if_it_is_scoped-to_symbol_only";

/**
 * A flux parameter can print its (sanitized) flux value.
 */
export interface FluxParameterLike {
  [FLUX_VALUE](): string;
  [STRING_VALUE](): string;
}
