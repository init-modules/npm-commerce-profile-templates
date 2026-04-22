import type {
	PhotonBlock,
	PhotonDocument,
} from "@init/photon";

export type CommerceProfileTemplateLocale = "en" | "ru";
export type CommerceProfileTemplateId =
	| "commerce-ready-retail-store"
	| "commerce-ready-service-studio"
	| "commerce-ready-hybrid-market";
export type CommerceProfileTemplateSource =
	| { type: "preset"; sourceId?: string }
	| { type: "template"; sourceId?: string };

type CommerceProfileTemplateKind = "retail" | "services" | "hybrid";
type CommerceCatalogBindingPath = "items" | "products" | "services";

type CommerceProfileTemplateScenario = {
	id: CommerceProfileTemplateId;
	kind: CommerceProfileTemplateKind;
	label: string;
	description: string;
	sourcePresetId: CommerceProfileTemplateId;
	previewRoute: string;
	brand: {
		en: string;
		ru: string;
	};
	contact: string;
	email: string;
	hero: {
		eyebrow: { en: string; ru: string };
		title: { en: string; ru: string };
		body: { en: string; ru: string };
		primaryLabel: { en: string; ru: string };
		secondaryLabel: { en: string; ru: string };
		spotlightLabel: { en: string; ru: string };
		spotlightValue: { en: string; ru: string };
		imageUrl: string;
		imageAlt: { en: string; ru: string };
	};
	catalog: {
		eyebrow: { en: string; ru: string };
		title: { en: string; ru: string };
		body: { en: string; ru: string };
		emptyTitle: { en: string; ru: string };
		emptyBody: { en: string; ru: string };
		cardCtaLabel: { en: string; ru: string };
		columns: number;
	};
	proofTitle: { en: string; ru: string };
	proofItems: Array<{
		value: string;
		label: { en: string; ru: string };
	}>;
	features: {
		eyebrow: { en: string; ru: string };
		title: { en: string; ru: string };
		body: { en: string; ru: string };
		items: Array<{
			title: { en: string; ru: string };
			body: { en: string; ru: string };
		}>;
	};
	cta: {
		badge: { en: string; ru: string };
		title: { en: string; ru: string };
		body: { en: string; ru: string };
		primaryLabel: { en: string; ru: string };
		secondaryLabel: { en: string; ru: string };
		panelEyebrow: { en: string; ru: string };
		panelLabel: { en: string; ru: string };
		panelItems: Array<{ en: string; ru: string }>;
	};
};

const updatedAt = "2026-04-19T00:00:00.000Z";

const t = (
	locale: CommerceProfileTemplateLocale,
	value: { en: string; ru: string },
) => (locale === "ru" ? value.ru : value.en);

const clone = <T>(value: T): T => JSON.parse(JSON.stringify(value)) as T;

const scenarios: CommerceProfileTemplateScenario[] = [
	{
		id: "commerce-ready-retail-store",
		kind: "retail",
		label: "Commerce Retail Store",
		description:
			"Full storefront profile for a product-led online shop with catalog, product detail, cart, checkout and account order history.",
		sourcePresetId: "commerce-ready-retail-store",
		previewRoute: "/template/commerce-retail-store",
		brand: {
			en: "Nord Lane Supply",
			ru: "Nord Lane Supply",
		},
		contact: "+7 (707) 184-22-10",
		email: "care@nordlane.example",
		hero: {
			eyebrow: {
				en: "Curated home essentials",
				ru: "Товары для дома с отбором",
			},
			title: {
				en: "A calm online store for everyday furniture, lighting and tableware",
				ru: "Спокойный интернет-магазин мебели, света и сервировки на каждый день",
			},
			body: {
				en: "Nord Lane Supply sells durable home goods with fast city delivery, transparent stock and a cart flow that keeps checkout simple on mobile and desktop.",
				ru: "Nord Lane Supply продает долговечные товары для дома с быстрой городской доставкой, прозрачными остатками и простой корзиной на мобильных и desktop.",
			},
			primaryLabel: { en: "Shop the catalog", ru: "Открыть каталог" },
			secondaryLabel: { en: "Track orders", ru: "Мои заказы" },
			spotlightLabel: { en: "Launch focus", ru: "Фокус запуска" },
			spotlightValue: {
				en: "120 SKU launch catalog",
				ru: "120 SKU в стартовом каталоге",
			},
			imageUrl:
				"https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&w=1400&q=80",
			imageAlt: {
				en: "Warm retail shelf with home goods and ceramics",
				ru: "Теплая полка магазина с товарами для дома и керамикой",
			},
		},
		catalog: {
			eyebrow: { en: "Live catalog", ru: "Живой каталог" },
			title: {
				en: "Best sellers ready to ship",
				ru: "Хиты продаж готовы к доставке",
			},
			body: {
				en: "Show current product cards from the commerce catalog: price, stock-aware item pages and a direct route into cart and checkout.",
				ru: "Показывайте актуальные карточки из commerce catalog: цены, страницы товара с остатками и прямой путь в корзину и оформление.",
			},
			emptyTitle: {
				en: "No active products yet",
				ru: "Активных товаров пока нет",
			},
			emptyBody: {
				en: "Add active catalog products to turn this section into the storefront grid.",
				ru: "Добавьте активные товары каталога, чтобы эта секция стала витриной.",
			},
			cardCtaLabel: { en: "View item", ru: "Открыть товар" },
			columns: 3,
		},
		proofTitle: {
			en: "Retail profile coverage",
			ru: "Что покрывает retail-профиль",
		},
		proofItems: [
			{
				value: "24h",
				label: {
					en: "city delivery promise",
					ru: "обещание доставки по городу",
				},
			},
			{
				value: "4 pages",
				label: {
					en: "catalog, item, cart and checkout",
					ru: "каталог, товар, корзина и оформление",
				},
			},
			{
				value: "B2C",
				label: {
					en: "copy tuned for product sales",
					ru: "тексты под розничные продажи",
				},
			},
			{
				value: "KZT",
				label: {
					en: "ready for local pricing",
					ru: "готово для локальных цен",
				},
			},
		],
		features: {
			eyebrow: { en: "Store operations", ru: "Операции магазина" },
			title: {
				en: "A storefront profile with practical merchandising sections",
				ru: "Профиль витрины с практичным мерчандайзингом",
			},
			body: {
				en: "The template keeps the first screen editorial, then quickly moves visitors into live product cards and a measurable checkout path.",
				ru: "Шаблон оставляет первый экран редакционным, затем быстро ведет посетителей к живым карточкам и понятному пути оформления.",
			},
			items: [
				{
					title: {
						en: "Product-first navigation",
						ru: "Навигация вокруг товаров",
					},
					body: {
						en: "Header, footer and CTAs point to catalog, cart and order history without extra marketing detours.",
						ru: "Хедер, футер и CTA ведут в каталог, корзину и историю заказов без лишних маркетинговых обходов.",
					},
				},
				{
					title: {
						en: "Readable empty states",
						ru: "Понятные пустые состояния",
					},
					body: {
						en: "When the catalog is not populated yet, customers see useful operational copy instead of broken grids.",
						ru: "Пока каталог не заполнен, покупатели видят рабочие тексты вместо сломанной сетки.",
					},
				},
				{
					title: {
						en: "Checkout-ready pages",
						ru: "Страницы готовы к checkout",
					},
					body: {
						en: "Cart, checkout and order history pages are included so teams can test the full commerce loop immediately.",
						ru: "Корзина, оформление и история заказов включены, чтобы команда сразу проверяла полный commerce loop.",
					},
				},
			],
		},
		cta: {
			badge: { en: "Retail launch kit", ru: "Retail launch kit" },
			title: {
				en: "Publish a product store without rebuilding the commerce flow",
				ru: "Запустите магазин товаров без пересборки commerce flow",
			},
			body: {
				en: "Use the profile as a production-ready starter: replace catalog items, refine copy and keep the operational pages intact.",
				ru: "Используйте профиль как production-ready starter: замените товары, уточните тексты и оставьте операционные страницы на месте.",
			},
			primaryLabel: { en: "Start shopping", ru: "Перейти к покупкам" },
			secondaryLabel: { en: "Review cart", ru: "Проверить корзину" },
			panelEyebrow: { en: "Included", ru: "Включено" },
			panelLabel: {
				en: "Retail storefront workflow",
				ru: "Retail storefront workflow",
			},
			panelItems: [
				{
					en: "Home merchandising page",
					ru: "Главная страница мерчандайзинга",
				},
				{
					en: "Catalog and product detail templates",
					ru: "Каталог и шаблон страницы товара",
				},
				{
					en: "Cart, checkout and account orders",
					ru: "Корзина, checkout и заказы аккаунта",
				},
			],
		},
	},
	{
		id: "commerce-ready-service-studio",
		kind: "services",
		label: "Commerce Service Studio",
		description:
			"Booking-style profile for service providers with service catalog, service detail, cart-style booking request and checkout.",
		sourcePresetId: "commerce-ready-service-studio",
		previewRoute: "/template/commerce-service-studio",
		brand: {
			en: "Northstar Care Studio",
			ru: "Northstar Care Studio",
		},
		contact: "+7 (707) 311-90-44",
		email: "hello@northstar.example",
		hero: {
			eyebrow: {
				en: "Service booking storefront",
				ru: "Витрина записи на услуги",
			},
			title: {
				en: "A trusted service studio for consultations, diagnostics and ongoing care plans",
				ru: "Сервисная студия для консультаций, диагностики и долгосрочных программ сопровождения",
			},
			body: {
				en: "Northstar turns service packages into a clear catalog: visitors compare formats, add the right appointment to a booking cart and leave contact details for confirmation.",
				ru: "Northstar превращает пакеты услуг в понятный каталог: посетители сравнивают форматы, добавляют нужную запись в корзину бронирования и оставляют контакты для подтверждения.",
			},
			primaryLabel: { en: "Explore services", ru: "Выбрать услугу" },
			secondaryLabel: { en: "My bookings", ru: "Мои записи" },
			spotlightLabel: { en: "Typical use", ru: "Типовой сценарий" },
			spotlightValue: { en: "Consultation bundles", ru: "Пакеты консультаций" },
			imageUrl:
				"https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=80",
			imageAlt: {
				en: "Consultants planning a service session with a client",
				ru: "Консультанты планируют сервисную сессию с клиентом",
			},
		},
		catalog: {
			eyebrow: { en: "Service catalog", ru: "Каталог услуг" },
			title: {
				en: "Book a focused service package",
				ru: "Запишитесь на понятный пакет услуг",
			},
			body: {
				en: "Use live catalog items as bookable service packages with descriptions, price anchors and a checkout request flow.",
				ru: "Используйте позиции каталога как пакеты услуг с описаниями, ценами и flow заявки через checkout.",
			},
			emptyTitle: {
				en: "No active services yet",
				ru: "Активных услуг пока нет",
			},
			emptyBody: {
				en: "Add active service catalog items to publish the booking storefront.",
				ru: "Добавьте активные услуги в каталог, чтобы опубликовать витрину записи.",
			},
			cardCtaLabel: { en: "View service", ru: "Открыть услугу" },
			columns: 2,
		},
		proofTitle: {
			en: "Built for service teams",
			ru: "Собрано для сервисных команд",
		},
		proofItems: [
			{
				value: "30 min",
				label: {
					en: "starter consultation unit",
					ru: "базовый слот консультации",
				},
			},
			{
				value: "2-step",
				label: {
					en: "service selection to request",
					ru: "выбор услуги и заявка",
				},
			},
			{
				value: "CRM",
				label: { en: "clean order snapshots", ru: "чистые снимки заказов" },
			},
			{
				value: "B2B",
				label: {
					en: "copy for trust-led selling",
					ru: "тексты для продаж через доверие",
				},
			},
		],
		features: {
			eyebrow: { en: "Booking operations", ru: "Операции записи" },
			title: {
				en: "Everything a service provider needs before a scheduler exists",
				ru: "Все, что нужно провайдеру услуг до полноценного scheduler",
			},
			body: {
				en: "The commerce primitives handle service cards, booking-cart intent and checkout contact capture while the team keeps service operations lightweight.",
				ru: "Commerce-примитивы закрывают карточки услуг, намерение записи через корзину и сбор контактов в checkout, пока команда держит операции легкими.",
			},
			items: [
				{
					title: { en: "Service-first language", ru: "Язык под услуги" },
					body: {
						en: "Labels and empty states talk about booking, packages and confirmation rather than product shipment.",
						ru: "Лейблы и пустые состояния говорят о записи, пакетах и подтверждении, а не об отправке товара.",
					},
				},
				{
					title: { en: "Trust before conversion", ru: "Доверие до конверсии" },
					body: {
						en: "Hero, proof and feature sections explain process and reliability before the catalog asks for action.",
						ru: "Hero, proof и feature-секции объясняют процесс и надежность до того, как каталог просит действие.",
					},
				},
				{
					title: {
						en: "Order history as requests",
						ru: "История заказов как заявки",
					},
					body: {
						en: "Account orders become a simple request history for repeat clients and service managers.",
						ru: "Заказы аккаунта становятся простой историей заявок для постоянных клиентов и менеджеров услуг.",
					},
				},
			],
		},
		cta: {
			badge: { en: "Service launch kit", ru: "Service launch kit" },
			title: {
				en: "Turn expertise into a bookable service catalog",
				ru: "Превратите экспертизу в каталог услуг с записью",
			},
			body: {
				en: "The profile gives service teams a real storefront now and leaves room for a deeper scheduling integration later.",
				ru: "Профиль дает сервисным командам настоящую витрину сейчас и оставляет место для глубокой scheduling-интеграции позже.",
			},
			primaryLabel: { en: "Choose a service", ru: "Выбрать услугу" },
			secondaryLabel: { en: "See requests", ru: "Посмотреть заявки" },
			panelEyebrow: { en: "Workflow", ru: "Workflow" },
			panelLabel: {
				en: "Service request funnel",
				ru: "Service request funnel",
			},
			panelItems: [
				{
					en: "Service catalog and service detail",
					ru: "Каталог услуг и страница услуги",
				},
				{
					en: "Booking-cart style add action",
					ru: "Добавление в стиле booking cart",
				},
				{
					en: "Checkout form for contact confirmation",
					ru: "Checkout-форма для подтверждения контактов",
				},
			],
		},
	},
	{
		id: "commerce-ready-hybrid-market",
		kind: "hybrid",
		label: "Commerce Hybrid Market",
		description:
			"Combined commerce profile for businesses that sell physical products and service packages from one storefront.",
		sourcePresetId: "commerce-ready-hybrid-market",
		previewRoute: "/template/commerce-hybrid-market",
		brand: {
			en: "Field & Form Market",
			ru: "Field & Form Market",
		},
		contact: "+7 (707) 522-18-77",
		email: "team@fieldform.example",
		hero: {
			eyebrow: { en: "Products plus services", ru: "Товары плюс услуги" },
			title: {
				en: "One storefront for equipment, subscriptions and expert setup services",
				ru: "Одна витрина для оборудования, подписок и экспертной настройки",
			},
			body: {
				en: "Field & Form combines shippable kits with paid setup and maintenance services, so customers can buy the product and book the support around it in one flow.",
				ru: "Field & Form объединяет доставляемые наборы с платной настройкой и сопровождением, чтобы клиент покупал продукт и заказывал поддержку вокруг него в одном flow.",
			},
			primaryLabel: { en: "Browse all offers", ru: "Смотреть предложения" },
			secondaryLabel: { en: "Order history", ru: "История заказов" },
			spotlightLabel: { en: "Hybrid offer", ru: "Гибридное предложение" },
			spotlightValue: {
				en: "Kit + setup + care",
				ru: "Набор + настройка + уход",
			},
			imageUrl:
				"https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80",
			imageAlt: {
				en: "Team preparing products and service plans in a workshop",
				ru: "Команда готовит продукты и сервисные планы в мастерской",
			},
		},
		catalog: {
			eyebrow: { en: "Unified catalog", ru: "Единый каталог" },
			title: {
				en: "Products and service packages in one cart",
				ru: "Товары и пакеты услуг в одной корзине",
			},
			body: {
				en: "Mix physical items, subscriptions and service appointments while keeping one cart, one checkout and one account order history.",
				ru: "Смешивайте физические товары, подписки и сервисные записи, сохраняя одну корзину, один checkout и одну историю заказов.",
			},
			emptyTitle: {
				en: "No active offers yet",
				ru: "Активных предложений пока нет",
			},
			emptyBody: {
				en: "Add product and service catalog items to show the full hybrid offer.",
				ru: "Добавьте товары и услуги в каталог, чтобы показать полное гибридное предложение.",
			},
			cardCtaLabel: { en: "Open offer", ru: "Открыть предложение" },
			columns: 3,
		},
		proofTitle: {
			en: "Hybrid commerce profile",
			ru: "Гибридный commerce-профиль",
		},
		proofItems: [
			{
				value: "1 cart",
				label: { en: "for products and services", ru: "для товаров и услуг" },
			},
			{
				value: "3 flows",
				label: { en: "buy, book and reorder", ru: "покупка, запись и повтор" },
			},
			{
				value: "Ops",
				label: {
					en: "clear fulfillment copy",
					ru: "понятные операционные тексты",
				},
			},
			{
				value: "Scale",
				label: {
					en: "ready for mixed catalogs",
					ru: "готово для смешанных каталогов",
				},
			},
		],
		features: {
			eyebrow: {
				en: "Mixed catalog strategy",
				ru: "Стратегия смешанного каталога",
			},
			title: {
				en: "A profile for teams that sell the thing and the outcome",
				ru: "Профиль для команд, которые продают и вещь, и результат",
			},
			body: {
				en: "The first screen explains the combined offer, the catalog shows everything together and the operational pages keep checkout consistent.",
				ru: "Первый экран объясняет комбинированное предложение, каталог показывает все вместе, а операционные страницы держат checkout единым.",
			},
			items: [
				{
					title: {
						en: "Unified offer architecture",
						ru: "Единая архитектура оффера",
					},
					body: {
						en: "Physical products, service packages and support subscriptions can share one storefront language.",
						ru: "Физические товары, сервисные пакеты и подписки поддержки говорят на одном языке витрины.",
					},
				},
				{
					title: { en: "Clear customer path", ru: "Понятный путь клиента" },
					body: {
						en: "Visitors understand whether they are buying, booking or combining both before they reach checkout.",
						ru: "Посетители понимают, покупают они, записываются или комбинируют оба сценария до checkout.",
					},
				},
				{
					title: {
						en: "Reusable commerce pages",
						ru: "Переиспользуемые commerce-страницы",
					},
					body: {
						en: "The same catalog, detail, cart, checkout and orders pages work for both sides of the business.",
						ru: "Одинаковые страницы каталога, детали, корзины, checkout и заказов работают для обеих сторон бизнеса.",
					},
				},
			],
		},
		cta: {
			badge: { en: "Hybrid launch kit", ru: "Hybrid launch kit" },
			title: {
				en: "Launch the mixed catalog before the business outgrows one checkout",
				ru: "Запустите смешанный каталог до того, как бизнес перерастет один checkout",
			},
			body: {
				en: "Keep products and services together until operations prove which parts need deeper domain-specific automation.",
				ru: "Держите товары и услуги вместе, пока операции не покажут, каким частям нужна более глубокая доменная автоматизация.",
			},
			primaryLabel: { en: "Open catalog", ru: "Открыть каталог" },
			secondaryLabel: { en: "Check cart", ru: "Проверить корзину" },
			panelEyebrow: { en: "Included", ru: "Включено" },
			panelLabel: { en: "Hybrid commerce loop", ru: "Hybrid commerce loop" },
			panelItems: [
				{
					en: "Combined positioning and catalog copy",
					ru: "Комбинированное позиционирование и тексты каталога",
				},
				{
					en: "Offer detail template for any item type",
					ru: "Шаблон страницы предложения для любого типа позиции",
				},
				{
					en: "Single cart, checkout and order history",
					ru: "Единая корзина, checkout и история заказов",
				},
			],
		},
	},
];

const scenarioById = new Map(
	scenarios.map((scenario) => [scenario.id, scenario]),
);

const resolveScenario = (
	source: CommerceProfileTemplateSource,
): CommerceProfileTemplateScenario => {
	const sourceId = source.sourceId as CommerceProfileTemplateId | undefined;
	const scenario = sourceId ? scenarioById.get(sourceId) : null;

	return scenario ?? scenarios[0];
};

const resolvePrimaryCatalogHref = (
	scenario: CommerceProfileTemplateScenario,
) => (scenario.kind === "services" ? "/services" : "/products");

export const isCommerceProfileTemplateSource = (source: {
	type: string;
	sourceId?: string;
}) =>
	(source.type === "preset" || source.type === "template") &&
	typeof source.sourceId === "string" &&
	scenarioById.has(source.sourceId as CommerceProfileTemplateId);

const createDocument = (
	id: string,
	name: string,
	route: string,
	blocks: PhotonDocument["blocks"],
): PhotonDocument => ({
	id,
	name,
	route,
	updatedAt,
	blocks,
});

const createPageEntry = (document: PhotonDocument) => ({
	document: clone(document),
	settings: {
		page: {
			name: document.name,
			path: document.route,
		},
		template: {},
		record: {},
	},
	resources: {},
	seo: {
		page: {
			title: document.name,
		},
		template: {},
		record: {},
	},
});

const createHeroBlock = (
	scenario: CommerceProfileTemplateScenario,
	locale: CommerceProfileTemplateLocale,
): PhotonBlock => ({
	id: "commerce-profile-hero",
	module: "marketing-demo",
	type: "hero-spotlight",
	props: {
		variant: scenario.kind === "services" ? "air" : "default",
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
		variant: scenario.kind === "services" ? "air" : "default",
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
		variant: scenario.kind === "services" ? "air" : "default",
		eyebrow: t(locale, scenario.features.eyebrow),
		title: t(locale, scenario.features.title),
		body: t(locale, scenario.features.body),
		features: scenario.features.items.map((item) => ({
			title: t(locale, item.title),
			body: t(locale, item.body),
		})),
	},
});

const createCatalogBlock = (
	scenario: CommerceProfileTemplateScenario,
	locale: CommerceProfileTemplateLocale,
	id = "commerce-product-grid",
	path?: CommerceCatalogBindingPath,
): PhotonBlock => ({
	id,
	module: "commerce-photon",
	type: "commerce-product-grid",
	props: {
		eyebrow: t(locale, scenario.catalog.eyebrow),
		title: t(locale, scenario.catalog.title),
		body: t(locale, scenario.catalog.body),
		emptyTitle: t(locale, scenario.catalog.emptyTitle),
		emptyBody: t(locale, scenario.catalog.emptyBody),
		cardCtaLabel: t(locale, scenario.catalog.cardCtaLabel),
		addToCartLabel:
			path === "services" || scenario.kind === "services"
				? t(locale, { en: "Book", ru: "Записаться" })
				: t(locale, { en: "Add to cart", ru: "В корзину" }),
		columns:
			path === "services" || scenario.kind === "services"
				? Math.min(scenario.catalog.columns, 3)
				: Math.max(scenario.catalog.columns, 5),
		showDescription: true,
	},
	bindings: {
		items: {
			source: "commerceCatalog",
			path:
				path ??
				(scenario.kind === "retail"
					? "products"
					: scenario.kind === "services"
						? "services"
						: "items"),
			mode: "write",
		},
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
		variant: scenario.kind === "services" ? "air" : "default",
		badge: t(locale, scenario.cta.badge),
		title: t(locale, scenario.cta.title),
		body: t(locale, scenario.cta.body),
		primaryLabel: t(locale, scenario.cta.primaryLabel),
		primaryHref: resolvePrimaryCatalogHref(scenario),
		secondaryLabel: t(locale, scenario.cta.secondaryLabel),
		secondaryHref: "/cart",
		panelEyebrow: t(locale, scenario.cta.panelEyebrow),
		panelLabel: t(locale, scenario.cta.panelLabel),
		panelItems: scenario.cta.panelItems.map((item) => t(locale, item)),
	},
});

const createHomeDocument = (
	scenario: CommerceProfileTemplateScenario,
	locale: CommerceProfileTemplateLocale,
) =>
	createDocument(
		`${scenario.id}-home`,
		t(locale, {
			en: `${scenario.label} Home`,
			ru:
				scenario.kind === "retail"
					? "Главная интернет-магазина"
					: scenario.kind === "services"
						? "Главная витрины услуг"
						: "Главная гибридной витрины",
		}),
		"/",
		[
			createHeroBlock(scenario, locale),
			createProofBlock(scenario, locale),
			createFeatureBlock(scenario, locale),
			createCatalogBlock(scenario, locale, "commerce-home-catalog"),
			createCtaBlock(scenario, locale),
		],
	);

const createCatalogDocument = (
	scenario: CommerceProfileTemplateScenario,
	locale: CommerceProfileTemplateLocale,
) =>
	createDocument(
		`${scenario.id}-catalog`,
		t(locale, {
			en:
				scenario.kind === "services"
					? "Service Catalog"
					: scenario.kind === "hybrid"
						? "Offer Catalog"
						: "Product Catalog",
			ru:
				scenario.kind === "services"
					? "Каталог услуг"
					: scenario.kind === "hybrid"
						? "Каталог предложений"
						: "Каталог товаров",
		}),
		"/catalog",
		[createCatalogBlock(scenario, locale)],
	);

const createTypedCatalogDocument = (
	scenario: CommerceProfileTemplateScenario,
	locale: CommerceProfileTemplateLocale,
	path: Extract<CommerceCatalogBindingPath, "products" | "services">,
) =>
	createDocument(
		`${scenario.id}-${path}`,
		path === "services"
			? t(locale, { en: "Services", ru: "Услуги" })
			: t(locale, { en: "Products", ru: "Товары" }),
		path === "services" ? "/services" : "/products",
		[createCatalogBlock(scenario, locale, `commerce-${path}-grid`, path)],
	);

const createDetailDocument = (
	scenario: CommerceProfileTemplateScenario,
	locale: CommerceProfileTemplateLocale,
) =>
	createDocument(
		`${scenario.id}-detail-template`,
		t(locale, {
			en:
				scenario.kind === "services"
					? "Service Detail"
					: scenario.kind === "hybrid"
						? "Offer Detail"
						: "Product Detail",
			ru:
				scenario.kind === "services"
					? "Страница услуги"
					: scenario.kind === "hybrid"
						? "Страница предложения"
						: "Страница товара",
		}),
		"/catalog/{slug}",
		[
			{
				id: "commerce-product-detail",
				module: "commerce-photon",
				type: "commerce-product-detail",
				props: {
					eyebrow:
						scenario.kind === "services"
							? t(locale, { en: "Service", ru: "Услуга" })
							: scenario.kind === "hybrid"
								? t(locale, { en: "Offer", ru: "Предложение" })
								: t(locale, { en: "Product", ru: "Товар" }),
					backLabel: t(locale, {
						en: "Back to catalog",
						ru: "Назад в каталог",
					}),
					showSku: scenario.kind !== "services",
					showDescription: true,
					showImage: true,
				},
				bindings: {
					product: {
						source: "commerceProduct",
						path: "product",
						mode: "write",
					},
				},
			},
			{
				id: "commerce-add-to-cart",
				module: "commerce-photon",
				type: "commerce-add-to-cart",
				props: {
					quantityLabel:
						scenario.kind === "services"
							? t(locale, { en: "Sessions", ru: "Сессии" })
							: t(locale, { en: "Quantity", ru: "Количество" }),
					buttonLabel:
						scenario.kind === "services"
							? t(locale, { en: "Book service", ru: "Записаться" })
							: scenario.kind === "hybrid"
								? t(locale, { en: "Add offer", ru: "Добавить предложение" })
								: t(locale, { en: "Add to cart", ru: "Добавить в корзину" }),
					successLabel: t(locale, { en: "Added", ru: "Добавлено" }),
					cartHref: "/cart",
				},
				bindings: {
					product: {
						source: "commerceProduct",
						path: "product",
						mode: "read",
					},
				},
			},
		],
	);

const createCartDocument = (
	scenario: CommerceProfileTemplateScenario,
	locale: CommerceProfileTemplateLocale,
) =>
	createDocument(
		`${scenario.id}-cart`,
		t(locale, { en: "Cart", ru: "Корзина" }),
		"/cart",
		[
			{
				id: "commerce-cart-summary",
				module: "commerce-photon",
				type: "commerce-cart-summary",
				props: {
					eyebrow:
						scenario.kind === "services"
							? t(locale, { en: "Booking request", ru: "Заявка на запись" })
							: t(locale, { en: "Cart", ru: "Корзина" }),
					title:
						scenario.kind === "services"
							? t(locale, { en: "Selected services", ru: "Выбранные услуги" })
							: scenario.kind === "hybrid"
								? t(locale, {
										en: "Selected offers",
										ru: "Выбранные предложения",
									})
								: t(locale, { en: "Your cart", ru: "Ваша корзина" }),
					emptyTitle: t(locale, {
						en: "Your cart is empty",
						ru: "Корзина пуста",
					}),
					emptyBody:
						scenario.kind === "services"
							? t(locale, {
									en: "Choose a service package to start a booking request.",
									ru: "Выберите пакет услуг, чтобы начать заявку на запись.",
								})
							: t(locale, {
									en: "Add an active catalog item to continue checkout.",
									ru: "Добавьте позицию каталога, чтобы продолжить оформление.",
								}),
					checkoutLabel:
						scenario.kind === "services"
							? t(locale, { en: "Request booking", ru: "Оставить заявку" })
							: t(locale, { en: "Checkout", ru: "Оформить заказ" }),
					catalogLabel: t(locale, {
						en: "Back to catalog",
						ru: "Назад в каталог",
					}),
					catalogHref: resolvePrimaryCatalogHref(scenario),
					checkoutHref: "/checkout",
				},
			},
		],
	);

const createCheckoutDocument = (
	scenario: CommerceProfileTemplateScenario,
	locale: CommerceProfileTemplateLocale,
) =>
	createDocument(
		`${scenario.id}-checkout`,
		t(locale, { en: "Checkout", ru: "Оформление" }),
		"/checkout",
		[
			{
				id: "commerce-checkout-form",
				module: "commerce-photon",
				type: "commerce-checkout-form",
				props: {
					eyebrow: t(locale, { en: "Checkout", ru: "Оформление" }),
					title:
						scenario.kind === "services"
							? t(locale, {
									en: "Confirm your service request",
									ru: "Подтвердите заявку на услугу",
								})
							: t(locale, { en: "Place your order", ru: "Оформить заказ" }),
					body:
						scenario.kind === "services"
							? t(locale, {
									en: "Leave contact details and the team will confirm the appointment time.",
									ru: "Оставьте контакты, и команда подтвердит время записи.",
								})
							: t(locale, {
									en: "Review your cart and leave contact details for the order snapshot.",
									ru: "Проверьте корзину и оставьте контакты для снимка заказа.",
								}),
					nameLabel: t(locale, { en: "Name", ru: "Имя" }),
					emailLabel: "Email",
					phoneLabel: t(locale, { en: "Phone", ru: "Телефон" }),
					submitLabel:
						scenario.kind === "services"
							? t(locale, { en: "Send request", ru: "Отправить заявку" })
							: t(locale, { en: "Place order", ru: "Разместить заказ" }),
					successTitle:
						scenario.kind === "services"
							? t(locale, { en: "Request sent", ru: "Заявка отправлена" })
							: t(locale, { en: "Order placed", ru: "Заказ создан" }),
					cartHref: "/cart",
				},
			},
		],
	);

const createOrdersDocument = (
	scenario: CommerceProfileTemplateScenario,
	locale: CommerceProfileTemplateLocale,
) =>
	createDocument(
		`${scenario.id}-orders`,
		t(locale, { en: "Account Orders", ru: "Заказы аккаунта" }),
		"/account/orders",
		[
			{
				id: "commerce-order-list",
				module: "commerce-photon",
				type: "commerce-order-list",
				props: {
					eyebrow: t(locale, { en: "Account", ru: "Личный кабинет" }),
					title:
						scenario.kind === "services"
							? t(locale, {
									en: "Your service requests",
									ru: "Ваши заявки на услуги",
								})
							: t(locale, { en: "Your orders", ru: "Ваши заказы" }),
					emptyTitle:
						scenario.kind === "services"
							? t(locale, { en: "No requests yet", ru: "Заявок пока нет" })
							: t(locale, { en: "No orders yet", ru: "Заказов пока нет" }),
					emptyBody:
						scenario.kind === "services"
							? t(locale, {
									en: "Send your first service request to see history here.",
									ru: "Отправьте первую заявку на услугу, чтобы увидеть историю.",
								})
							: t(locale, {
									en: "Checkout your first cart to see order history here.",
									ru: "Оформите первую корзину, чтобы увидеть историю заказов.",
								}),
					orderLabel:
						scenario.kind === "services"
							? t(locale, { en: "Request", ru: "Заявка" })
							: t(locale, { en: "Order", ru: "Заказ" }),
					totalLabel: t(locale, { en: "Total", ru: "Итого" }),
					itemCountLabel: t(locale, { en: "items", ru: "позиций" }),
					catalogLabel: t(locale, {
						en: "Open catalog",
						ru: "Открыть каталог",
					}),
					catalogHref: resolvePrimaryCatalogHref(scenario),
					limit: 20,
				},
			},
		],
	);

const createSiteRegionDocument = (
	scenario: CommerceProfileTemplateScenario,
	locale: CommerceProfileTemplateLocale,
	key: "header" | "footer",
) =>
	key === "header"
		? createDocument(
				`${scenario.id}-site-header`,
				t(locale, { en: "Commerce Header", ru: "Commerce хедер" }),
				"/_site/header",
				[
					{
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
								{
									label: t(locale, { en: "Cart", ru: "Корзина" }),
									href: "/cart",
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
										? t(locale, {
												en: "Search offers",
												ru: "Поиск предложений",
											})
										: t(locale, { en: "Search products", ru: "Поиск товаров" }),
							contactValue: scenario.contact,
							contactCaption:
								scenario.kind === "services"
									? t(locale, { en: "Booking support", ru: "Поддержка записи" })
									: t(locale, {
											en: "Daily support",
											ru: "Поддержка каждый день",
										}),
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
									label: t(locale, { en: "Cart", ru: "Корзина" }),
									href: "/cart",
								},
								{
									label: t(locale, { en: "Checkout", ru: "Оформление" }),
									href: "/checkout",
								},
							],
						},
					},
				],
			)
		: createDocument(
				`${scenario.id}-site-footer`,
				t(locale, { en: "Commerce Footer", ru: "Commerce футер" }),
				"/_site/footer",
				[
					{
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
										{
											label: t(locale, { en: "Cart", ru: "Корзина" }),
											href: "/cart",
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
					},
				],
			);

const createSiteSettings = (scenario: CommerceProfileTemplateScenario) => ({
	design: {
		presetId: "aurora-current",
		colorSchemeId:
			scenario.kind === "services"
				? "soft-cloud"
				: scenario.kind === "hybrid"
					? "mint-ledger"
					: "midnight-mint",
	},
});

export const createCommerceProfileTemplateTree = (
	locale: CommerceProfileTemplateLocale,
	source: CommerceProfileTemplateSource,
) => {
	const scenario = resolveScenario(source);
	const home = createHomeDocument(scenario, locale);
	const catalog = createCatalogDocument(scenario, locale);
	const products = createTypedCatalogDocument(scenario, locale, "products");
	const services = createTypedCatalogDocument(scenario, locale, "services");
	const detail = createDetailDocument(scenario, locale);
	const cart = createCartDocument(scenario, locale);
	const checkout = createCheckoutDocument(scenario, locale);
	const orders = createOrdersDocument(scenario, locale);

	return {
		pages: {
			home: createPageEntry(home),
			catalog: createPageEntry(catalog),
			products: createPageEntry(products),
			services: createPageEntry(services),
			product: createPageEntry(detail),
			cart: createPageEntry(cart),
			checkout: createPageEntry(checkout),
			accountOrders: createPageEntry(orders),
		},
		site: {
			regions: {
				header: {
					document: createSiteRegionDocument(scenario, locale, "header"),
				},
				footer: {
					document: createSiteRegionDocument(scenario, locale, "footer"),
				},
			},
			settings: createSiteSettings(scenario),
		},
		seo: {
			site: {
				title: t(locale, scenario.brand),
			},
		},
		settings: {
			publication: {
				locale,
			},
		},
		meta: {
			source: "commerce-profile-templates",
			sourceId: scenario.id,
		},
	};
};

export const commerceProfileTemplatePresets = scenarios.map((scenario) => ({
	id: scenario.id,
	label: scenario.label,
	description: scenario.description,
	starterRecipe: {
		type: "commerce-ready-profile",
	},
}));

export const commerceProfileDesignTemplates = scenarios.map((scenario) => ({
	id: scenario.id,
	label: `${scenario.label} Template`,
	description: `${scenario.description} Use this immutable source when creating a commerce profile.`,
	sourcePresetId: scenario.sourcePresetId,
	previewRoute: scenario.previewRoute,
}));

export const commerceProfileTemplateDocuments = Object.fromEntries(
	scenarios.map((scenario) => [
		`template-${scenario.id}`,
		createHomeDocument(scenario, "en"),
	]),
);
