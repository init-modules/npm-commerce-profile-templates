import { commerceAuroraCurrentProfileBlockFamily } from "./aurora-current";
import { commerceInitLandingProfileBlockFamily } from "./init-landing";
import type {
	CommerceProfileBlockFamily,
	CommerceProfileBlockFamilyId,
} from "./shared";

export type {
	CommerceCatalogBindingPath,
	CommerceProfileBlockFamily,
	CommerceProfileBlockFamilyId,
	CommerceProfileTemplateId,
	CommerceProfileTemplateKind,
	CommerceProfileTemplateLocale,
	CommerceProfileTemplateScenario,
	LocalizedText,
} from "./shared";

export const commerceProfileBlockFamilies = [
	commerceAuroraCurrentProfileBlockFamily,
	commerceInitLandingProfileBlockFamily,
] as const;

export const getCommerceProfileBlockFamily = (
	id: CommerceProfileBlockFamilyId = "aurora-current",
): CommerceProfileBlockFamily =>
	commerceProfileBlockFamilies.find((family) => family.id === id) ??
	commerceAuroraCurrentProfileBlockFamily;
