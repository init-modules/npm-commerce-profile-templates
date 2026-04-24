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

const getAuroraMarketingVariant = (
	scenario: CommerceProfileTemplateScenario,
) => (scenario.kind === "services" ? "air" : "default");

const getAuroraColorSchemeId = (scenario: CommerceProfileTemplateScenario) =>
	scenario.kind === "services"
		? "soft-cloud"
		: scenario.kind === "hybrid"
			? "mint-ledger"
			: "midnight-mint";

const createHeroBlock = (
	scenario: CommerceProfileTemplateScenario,
	locale: CommerceProfileTemplateLocale,
): PhotonBlock => ({
	id: "commerce-profile-hero",
	module: "marketing-demo",
	type: "hero-spotlight",
	props: {
		variant: getAuroraMarketingVariant(scenario),
		eyebrow: t(locale, scenario.hero.eyebrow),
		title: t(locale, scenario.hero.title),
		body: t(locale, scenario.hero.body),
		primaryLabel: t(locale, scenario.hero.primaryLabel),
		primaryMetaLabel: locale === "ru" ? "Каталог" : "Catalog",
		primaryHref: resolvePrimaryCatalogHref(scenario),
		secondaryLabel: t(locale, scenario.hero.secondaryLabel),
		secondaryHref: "/account/orders",
		spotlightLabel: t(locale, scenario.hero.spotlightLabel),
		spotlightValue: t(locale, scenario.hero.spotlightValue),
		imageUrl: scenario.hero.imageUrl,
		imageAlt: t(locale, scenario.hero.imageAlt),
	},
});

const createProofBlock = (
	scenario: CommerceProfileTemplateScenario,
	locale: CommerceProfileTemplateLocale,
): PhotonBlock => ({
	id: "commerce-profile-proof",
	module: "marketing-demo",
	type: "proof-strip",
	props: {
		variant: getAuroraMarketingVariant(scenario),
		title: t(locale, scenario.proofTitle),
		items: scenario.proofItems.map((item) => ({
			value: item.value,
			label: t(locale, item.label),
		})),
	},
});

const createFeatureBlock = (
	scenario: CommerceProfileTemplateScenario,
	locale: CommerceProfileTemplateLocale,
): PhotonBlock => ({
	id: "commerce-profile-features",
	module: "marketing-demo",
	type: "feature-grid",
	props: {
		variant: getAuroraMarketingVariant(scenario),
		eyebrow: t(locale, scenario.features.eyebrow),
		title: t(locale, scenario.features.title),
		body: t(locale, scenario.features.body),
		features: scenario.features.items.map((item) => ({
			title: t(locale, item.title),
			body: t(locale, item.body),
		})),
	},
});

const createCtaBlock = (
	scenario: CommerceProfileTemplateScenario,
	locale: CommerceProfileTemplateLocale,
): PhotonBlock => ({
	id: "commerce-profile-cta",
	module: "marketing-demo",
	type: "command-center-cta",
	props: {
		variant: getAuroraMarketingVariant(scenario),
		badge: t(locale, scenario.cta.badge),
		title: t(locale, scenario.cta.title),
		body: t(locale, scenario.cta.body),
		primaryLabel: t(locale, scenario.cta.primaryLabel),
		primaryHref: resolvePrimaryCatalogHref(scenario),
		secondaryLabel: t(locale, scenario.cta.secondaryLabel),
		secondaryHref: checkoutCartHref,
		panelEyebrow: t(locale, scenario.cta.panelEyebrow),
		panelLabel: t(locale, scenario.cta.panelLabel),
		panelItems: scenario.cta.panelItems.map((item) => t(locale, item)),
	},
});

const createHeaderBlock = (
	scenario: CommerceProfileTemplateScenario,
	locale: CommerceProfileTemplateLocale,
): PhotonBlock => ({
	id: "site-header-shell",
	module: "photon-system",
	type: "site-header-shell",
	props: {
		variant: "commerce-inline",
		brandLabel: t(locale, scenario.brand),
		brandHref: "/",
		logoImage: null,
		utilityLinks: [
			{
				label: t(locale, { en: "Products", ru: "Товары" }),
				href: "/products",
			},
			{
				label: t(locale, { en: "Services", ru: "Услуги" }),
				href: "/services",
			},
			{
				label: t(locale, { en: "Orders", ru: "Заказы" }),
				href: "/account/orders",
			},
		],
		catalogLabel:
			scenario.kind === "services"
				? t(locale, { en: "Services", ru: "Услуги" })
				: t(locale, { en: "Catalog", ru: "Каталог" }),
		searchPlaceholder:
			scenario.kind === "services"
				? t(locale, { en: "Search services", ru: "Поиск услуг" })
				: scenario.kind === "hybrid"
					? t(locale, { en: "Search offers", ru: "Поиск предложений" })
					: t(locale, { en: "Search products", ru: "Поиск товаров" }),
		contactValue: scenario.contact,
		contactCaption:
			scenario.kind === "services"
				? t(locale, { en: "Booking support", ru: "Поддержка записи" })
				: t(locale, { en: "Daily support", ru: "Поддержка каждый день" }),
		primaryCtaLabel:
			scenario.kind === "services"
				? t(locale, { en: "Book now", ru: "Записаться" })
				: t(locale, { en: "Shop now", ru: "Купить" }),
		primaryCtaHref: resolvePrimaryCatalogHref(scenario),
		secondaryCtaLabel: t(locale, { en: "Orders", ru: "Заказы" }),
		secondaryCtaHref: "/account/orders",
		showLoginAction: true,
		loginLabel: t(locale, { en: "Sign in", ru: "Войти" }),
		sticky: true,
		compactOnScroll: true,
		mobile: {
			sticky: false,
			menu: {
				type: "drawer",
				triggerPlacement: "header",
				scrollLock: true,
				floating: false,
				disableFloatingOnSmallScreens: true,
			},
			bottomMenu: {
				enabled: true,
				showBurger: true,
				floating: false,
				disableFloatingOnSmallScreens: true,
			},
		},
		categoryLinks: [
			{
				label: t(locale, { en: "Products", ru: "Товары" }),
				href: "/products",
			},
			{
				label: t(locale, { en: "Services", ru: "Услуги" }),
				href: "/services",
			},
			{
				label: t(locale, { en: "Checkout", ru: "Оформление" }),
				href: "/checkout",
			},
		],
	},
});

const createFooterBlock = (
	scenario: CommerceProfileTemplateScenario,
	locale: CommerceProfileTemplateLocale,
): PhotonBlock => ({
	id: "site-footer-shell",
	module: "photon-system",
	type: "site-footer-shell",
	props: {
		variant: "classic-dark",
		brandTitle: t(locale, scenario.brand),
		brandBody: t(locale, {
			en:
				scenario.kind === "services"
					? "Service catalog, booking-cart requests and account request history for repeat clients."
					: scenario.kind === "hybrid"
						? "Unified commerce profile for products, service packages, checkout and account order history."
						: "Product catalog, shopping cart, checkout and account order history for a polished online shop.",
			ru:
				scenario.kind === "services"
					? "Каталог услуг, заявки через корзину записи и история обращений для постоянных клиентов."
					: scenario.kind === "hybrid"
						? "Единый commerce-профиль для товаров, сервисных пакетов, checkout и истории заказов."
						: "Каталог товаров, корзина, checkout и история заказов для аккуратного интернет-магазина.",
		}),
		logoImage: null,
		subscriptionTitle: t(locale, {
			en: "Get updates",
			ru: "Получать обновления",
		}),
		subscriptionBody: t(locale, {
			en: "New arrivals, seasonal service slots and operational updates.",
			ru: "Новинки, сезонные сервисные слоты и операционные обновления.",
		}),
		subscriptionPlaceholder: "Email",
		subscriptionButtonLabel: t(locale, {
			en: "Subscribe",
			ru: "Подписаться",
		}),
		navigationColumns: [
			{
				title: t(locale, { en: "Storefront", ru: "Витрина" }),
				links: [
					{
						label: t(locale, { en: "Home", ru: "Главная" }),
						href: "/",
					},
					{
						label: t(locale, { en: "Products", ru: "Товары" }),
						href: "/products",
					},
					{
						label: t(locale, { en: "Services", ru: "Услуги" }),
						href: "/services",
					},
				],
			},
			{
				title: t(locale, { en: "Account", ru: "Аккаунт" }),
				links: [
					{
						label: t(locale, { en: "Orders", ru: "Заказы" }),
						href: "/account/orders",
					},
					{
						label: t(locale, { en: "Checkout", ru: "Оформление" }),
						href: "/checkout",
					},
				],
			},
		],
		contactItems: [
			scenario.contact,
			scenario.email,
			locale === "ru" ? "Алматы, Казахстан" : "Almaty, Kazakhstan",
		],
		legalLabel: t(locale, {
			en: "Privacy policy",
			ru: "Политика конфиденциальности",
		}),
		legalHref: "/privacy",
		copyrightLabel: `${t(locale, scenario.brand)} 2026`,
		developerLabel: t(locale, {
			en: "Built by init",
			ru: "Сделано init",
		}),
		developerHref: "https://init.kz",
	},
});

export const commerceAuroraCurrentProfileBlockFamily: CommerceProfileBlockFamily =
	{
		id: "aurora-current",
		createHomeBlocks: (scenario, locale) => [
			createHeroBlock(scenario, locale),
			createProofBlock(scenario, locale),
			createFeatureBlock(scenario, locale),
			createCommerceCatalogBlock(
				scenario,
				locale,
				"commerce-home-catalog",
			),
			createCtaBlock(scenario, locale),
		],
		createCatalogBlocks: (
			scenario,
			locale,
			path?: CommerceCatalogBindingPath,
		) => [
			createCommerceCatalogBlock(
				scenario,
				locale,
				path ? `commerce-${path}-grid` : "commerce-product-grid",
				path,
			),
		],
		createDetailBlocks: createCommerceDetailBlocks,
		createCheckoutBlocks: createCommerceCheckoutBlocks,
		createOrdersBlocks: createCommerceOrdersBlocks,
		createSiteRegionBlocks: (scenario, locale, key) => [
			key === "header"
				? createHeaderBlock(scenario, locale)
				: createFooterBlock(scenario, locale),
		],
		createSiteSettings: (scenario) => ({
			design: {
				presetId: "aurora-current",
				colorSchemeId: getAuroraColorSchemeId(scenario),
			},
		}),
	};
