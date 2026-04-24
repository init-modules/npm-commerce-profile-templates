import type { PhotonBlock } from "@init/photon";
import {
	checkoutCartHref,
	createCommerceCatalogBlock,
	createCommerceCheckoutBlocks,
	createCommerceDetailBlocks,
	createCommerceOrdersBlocks,
	resolvePrimaryCatalogHref,
	t,
	type CommerceCatalogBindingPath,
	type CommerceProfileBlockFamily,
	type CommerceProfileTemplateLocale,
	type CommerceProfileTemplateScenario,
} from "../shared";

type InitLandingIconKey =
	| "award"
	| "barChart3"
	| "blocks"
	| "globe"
	| "layoutTemplate"
	| "packageCheck"
	| "shield"
	| "sparkles"
	| "users"
	| "wandSparkles"
	| "workflow"
	| "zap";

const resolveNumericStat = (value: string, fallback: number) => {
	const parsed = Number.parseInt(value.replace(/[^\d]/g, ""), 10);

	return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
};

const resolveStatSuffix = (value: string) => {
	const suffix = value.replace(/[\d\s]/g, "").trim();

	return suffix.length > 3 ? "" : suffix;
};

const createInitHeroBlock = (
	scenario: CommerceProfileTemplateScenario,
	locale: CommerceProfileTemplateLocale,
): PhotonBlock => ({
	id: "init-commerce-hero",
	module: "marketing-demo",
	type: "init-landing-hero",
	props: {
		badge: t(locale, scenario.hero.eyebrow),
		title: t(locale, {
			en:
				scenario.kind === "services"
					? "Turn service demand into"
					: scenario.kind === "hybrid"
						? "Sell products and services through"
						: "Launch product sales through",
			ru:
				scenario.kind === "services"
					? "Превратите спрос на услуги в"
					: scenario.kind === "hybrid"
						? "Продавайте товары и услуги через"
						: "Запустите продажи товаров через",
		}),
		highlightedTitle: t(locale, {
			en:
				scenario.kind === "services"
					? "a bookable commerce flow"
					: scenario.kind === "hybrid"
						? "one commerce flow"
						: "a focused storefront",
			ru:
				scenario.kind === "services"
					? "commerce flow с записью"
					: scenario.kind === "hybrid"
						? "единый commerce flow"
						: "сфокусированную витрину",
		}),
		supportingTexts: [
			t(locale, scenario.hero.title),
			t(locale, scenario.hero.body),
			t(locale, scenario.catalog.body),
		],
		primaryCta: {
			label: t(locale, scenario.hero.primaryLabel),
			href: resolvePrimaryCatalogHref(scenario),
		},
		secondaryCta: {
			label: t(locale, scenario.hero.secondaryLabel),
			href: "/account/orders",
		},
		leadCapture: {
			placeholder: scenario.contact,
			buttonLabel: t(locale, {
				en: scenario.kind === "services" ? "Request call" : "Ask support",
				ru: scenario.kind === "services" ? "Запросить звонок" : "Спросить",
			}),
			helperText: t(locale, {
				en:
					scenario.kind === "services"
						? "Leave a number and the studio will confirm the service request."
						: "Leave a number and the storefront team will help with the order.",
				ru:
					scenario.kind === "services"
						? "Оставьте номер, и студия подтвердит заявку на услугу."
						: "Оставьте номер, и команда витрины поможет с заказом.",
			}),
		},
		featurePills: [
			{
				icon: "packageCheck" satisfies InitLandingIconKey,
				label: t(locale, scenario.catalog.title),
			},
			{
				icon: "workflow" satisfies InitLandingIconKey,
				label: t(locale, { en: "Cart and checkout", ru: "Корзина и checkout" }),
			},
			{
				icon: "users" satisfies InitLandingIconKey,
				label: t(locale, { en: "Account orders", ru: "Заказы аккаунта" }),
			},
			{
				icon: "shield" satisfies InitLandingIconKey,
				label: t(locale, scenario.proofTitle),
			},
		],
		stats: scenario.proofItems.slice(0, 4).map((item, index) => ({
			value: resolveNumericStat(item.value, index + 1),
			suffix: resolveStatSuffix(item.value),
			label: t(locale, item.label),
		})),
	},
});

const createInitServicesBlock = (
	scenario: CommerceProfileTemplateScenario,
	locale: CommerceProfileTemplateLocale,
): PhotonBlock => ({
	id: "init-commerce-offer-map",
	module: "marketing-demo",
	type: "init-landing-services",
	props: {
		sectionId: "services",
		eyebrow: t(locale, scenario.features.eyebrow),
		title: t(locale, {
			en:
				scenario.kind === "services"
					? "A service company page that still behaves like commerce"
					: scenario.kind === "hybrid"
						? "A hybrid offer page built from reusable commerce primitives"
						: "A store page that moves directly into catalog actions",
			ru:
				scenario.kind === "services"
					? "Страница сервисной компании, которая ведет себя как commerce"
					: scenario.kind === "hybrid"
						? "Гибридная витрина на переиспользуемых commerce-примитивах"
						: "Страница магазина, которая сразу ведет к действиям каталога",
		}),
		description: t(locale, scenario.features.body),
		items: [
			...scenario.features.items.slice(0, 3).map((item, index) => ({
				icon: (["layoutTemplate", "workflow", "shield"] as InitLandingIconKey[])[
					index
				],
				title: t(locale, item.title),
				description: t(locale, item.body),
			})),
			{
				icon: "packageCheck" satisfies InitLandingIconKey,
				title: t(locale, scenario.catalog.title),
				description: t(locale, scenario.catalog.body),
			},
		],
	},
});

const createInitProcessBlock = (
	scenario: CommerceProfileTemplateScenario,
	locale: CommerceProfileTemplateLocale,
): PhotonBlock => ({
	id: "init-commerce-process",
	module: "marketing-demo",
	type: "init-landing-process",
	props: {
		sectionId: "process",
		eyebrow: t(locale, { en: "Commerce path", ru: "Commerce path" }),
		title: t(locale, {
			en: "Same operational loop, different landing-page composition",
			ru: "Та же операционная логика, другая landing-page композиция",
		}),
		description: t(locale, {
			en: "The Init family changes the presentation layer, while catalog data, product pages, cart, checkout and order history stay package-provided.",
			ru: "Init family меняет слой презентации, а catalog data, страницы товара, корзина, checkout и история заказов остаются пакетными.",
		}),
		steps: [
			{
				number: "01",
				title: t(locale, scenario.catalog.eyebrow),
				description: t(locale, scenario.catalog.body),
			},
			{
				number: "02",
				title:
					scenario.kind === "services"
						? t(locale, { en: "Open service detail", ru: "Открыть услугу" })
						: scenario.kind === "hybrid"
							? t(locale, { en: "Open offer detail", ru: "Открыть оффер" })
							: t(locale, { en: "Open product detail", ru: "Открыть товар" }),
				description: t(locale, {
					en: "Detail pages keep live product bindings and reusable add-to-cart behavior.",
					ru: "Детальные страницы сохраняют живые product bindings и переиспользуемое add-to-cart поведение.",
				}),
			},
			{
				number: "03",
				title:
					scenario.kind === "services"
						? t(locale, { en: "Build booking cart", ru: "Собрать корзину записи" })
						: t(locale, { en: "Build cart", ru: "Собрать корзину" }),
				description: t(locale, {
					en: "The same cart route handles selected items before checkout.",
					ru: "Один и тот же cart route обрабатывает выбранные позиции перед checkout.",
				}),
			},
			{
				number: "04",
				title:
					scenario.kind === "services"
						? t(locale, { en: "Send request", ru: "Отправить заявку" })
						: t(locale, { en: "Place order", ru: "Разместить заказ" }),
				description: t(locale, {
					en: "Checkout creates an order snapshot and account history stays available after conversion.",
					ru: "Checkout создает снимок заказа, а история аккаунта остается доступной после конверсии.",
				}),
			},
		],
	},
});

const createInitWhyUsBlock = (
	scenario: CommerceProfileTemplateScenario,
	locale: CommerceProfileTemplateLocale,
): PhotonBlock => ({
	id: "init-commerce-why-us",
	module: "marketing-demo",
	type: "init-landing-why-us",
	props: {
		sectionId: "why-us",
		eyebrow: t(locale, scenario.proofTitle),
		title: t(locale, scenario.cta.title),
		description: t(locale, scenario.cta.body),
		body: t(locale, scenario.features.body),
		trustItems: scenario.cta.panelItems.map((item) => t(locale, item)),
		items: scenario.proofItems.slice(0, 4).map((item, index) => ({
			icon: (["award", "barChart3", "shield", "zap"] as InitLandingIconKey[])[
				index
			],
			title: item.value,
			description: t(locale, item.label),
		})),
	},
});

const createInitCtaBlock = (
	scenario: CommerceProfileTemplateScenario,
	locale: CommerceProfileTemplateLocale,
): PhotonBlock => ({
	id: "init-commerce-cta",
	module: "marketing-demo",
	type: "init-landing-cta",
	props: {
		sectionId: "contact",
		title: t(locale, scenario.cta.title),
		description: t(locale, scenario.cta.body),
		primaryCta: {
			label: t(locale, scenario.cta.primaryLabel),
			href: resolvePrimaryCatalogHref(scenario),
		},
		secondaryCta: {
			label: t(locale, scenario.cta.secondaryLabel),
			href: checkoutCartHref,
		},
		note: t(locale, {
			en: `${scenario.email} · ${scenario.contact}`,
			ru: `${scenario.email} · ${scenario.contact}`,
		}),
	},
});

const createInitHeaderBlock = (
	scenario: CommerceProfileTemplateScenario,
	locale: CommerceProfileTemplateLocale,
): PhotonBlock => ({
	id: "init-landing-header",
	module: "marketing-demo",
	type: "init-landing-header",
	props: {
		brandLabel: t(locale, scenario.brand),
		homeHref: "/",
		navItems: [
			{
				label: t(locale, { en: "Offers", ru: "Предложения" }),
				href: "#services",
			},
			{
				label: t(locale, { en: "Catalog", ru: "Каталог" }),
				href: resolvePrimaryCatalogHref(scenario),
			},
			{
				label: t(locale, { en: "Process", ru: "Процесс" }),
				href: "#process",
			},
			{
				label: t(locale, { en: "Orders", ru: "Заказы" }),
				href: "/account/orders",
			},
		],
		cta: {
			label:
				scenario.kind === "services"
					? t(locale, { en: "Book", ru: "Записаться" })
					: t(locale, { en: "Shop", ru: "Купить" }),
			href: resolvePrimaryCatalogHref(scenario),
		},
		searchPlaceholder:
			scenario.kind === "services"
				? t(locale, { en: "Search services", ru: "Поиск услуг" })
				: scenario.kind === "hybrid"
					? t(locale, { en: "Search offers", ru: "Поиск предложений" })
					: t(locale, { en: "Search products", ru: "Поиск товаров" }),
		showLocaleSwitcher: true,
		showLoginAction: true,
		loginLabel: t(locale, { en: "Sign in", ru: "Войти" }),
		mobile: {
			menu: {
				type: "drawer",
				triggerPlacement: "fixed",
				scrollLock: true,
				floating: false,
				disableFloatingOnSmallScreens: true,
			},
		},
	},
});

const createInitFooterBlock = (
	scenario: CommerceProfileTemplateScenario,
	locale: CommerceProfileTemplateLocale,
): PhotonBlock => ({
	id: "init-landing-footer",
	module: "marketing-demo",
	type: "init-landing-footer",
	props: {
		brandLabel: t(locale, scenario.brand),
		homeHref: "/",
		brandDescription: t(locale, scenario.cta.body),
		services: [
			{
				name: t(locale, { en: "Products", ru: "Товары" }),
				href: "/products",
			},
			{
				name: t(locale, { en: "Services", ru: "Услуги" }),
				href: "/services",
			},
			{
				name: t(locale, { en: "Checkout", ru: "Оформление" }),
				href: "/checkout",
			},
			{
				name: t(locale, { en: "Orders", ru: "Заказы" }),
				href: "/account/orders",
			},
		],
		company: [
			{
				name: t(locale, { en: "Offers", ru: "Предложения" }),
				href: "#services",
			},
			{
				name: t(locale, { en: "Process", ru: "Процесс" }),
				href: "#process",
			},
			{
				name: t(locale, { en: "Why us", ru: "Почему мы" }),
				href: "#why-us",
			},
			{
				name: t(locale, { en: "Contact", ru: "Контакты" }),
				href: "#contact",
			},
		],
		legal: [
			{ name: "Privacy Policy", href: "/privacy" },
			{ name: "Terms of Service", href: "/terms" },
		],
		contact: {
			email: scenario.email,
			phone: scenario.contact,
			location: locale === "ru" ? "Алматы, Казахстан" : "Almaty, Kazakhstan",
		},
	},
});

export const commerceInitLandingProfileBlockFamily: CommerceProfileBlockFamily =
	{
		id: "init-landing",
		createHomeBlocks: (scenario, locale) => [
			createInitHeroBlock(scenario, locale),
			createInitServicesBlock(scenario, locale),
			createCommerceCatalogBlock(
				scenario,
				locale,
				"init-commerce-live-catalog",
			),
			createInitProcessBlock(scenario, locale),
			createInitWhyUsBlock(scenario, locale),
			createInitCtaBlock(scenario, locale),
		],
		createCatalogBlocks: (
			scenario,
			locale,
			path?: CommerceCatalogBindingPath,
		) => [
			createCommerceCatalogBlock(
				scenario,
				locale,
				path ? `init-commerce-${path}-grid` : "init-commerce-product-grid",
				path,
			),
		],
		createDetailBlocks: createCommerceDetailBlocks,
		createCheckoutBlocks: createCommerceCheckoutBlocks,
		createOrdersBlocks: createCommerceOrdersBlocks,
		createSiteRegionBlocks: (scenario, locale, key) => [
			key === "header"
				? createInitHeaderBlock(scenario, locale)
				: createInitFooterBlock(scenario, locale),
		],
		createSiteSettings: () => ({
			design: {
				presetId: "init-landing",
			},
		}),
	};
