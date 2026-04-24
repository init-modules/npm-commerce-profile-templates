import type { PhotonBlock } from "@init/photon";

export type CommerceProfileTemplateLocale = "en" | "ru";
export type CommerceProfileTemplateKind = "retail" | "services" | "hybrid";
export type CommerceProfileBlockFamilyId = "aurora-current" | "init-landing";
export type CommerceCatalogBindingPath = "items" | "products" | "services";

export type CommerceProfileTemplateId =
	| "commerce-ready-retail-store"
	| "commerce-ready-service-studio"
	| "commerce-ready-hybrid-market"
	| "commerce-init-retail-store"
	| "commerce-init-service-company"
	| "commerce-init-hybrid-market";

export type LocalizedText = {
	en: string;
	ru: string;
};

export type CommerceProfileTemplateScenario = {
	id: CommerceProfileTemplateId;
	familyId: CommerceProfileBlockFamilyId;
	kind: CommerceProfileTemplateKind;
	label: string;
	description: string;
	sourcePresetId: CommerceProfileTemplateId;
	previewRoute: string;
	brand: LocalizedText;
	contact: string;
	email: string;
	hero: {
		eyebrow: LocalizedText;
		title: LocalizedText;
		body: LocalizedText;
		primaryLabel: LocalizedText;
		secondaryLabel: LocalizedText;
		spotlightLabel: LocalizedText;
		spotlightValue: LocalizedText;
		imageUrl: string;
		imageAlt: LocalizedText;
	};
	catalog: {
		eyebrow: LocalizedText;
		title: LocalizedText;
		body: LocalizedText;
		emptyTitle: LocalizedText;
		emptyBody: LocalizedText;
		cardCtaLabel: LocalizedText;
		columns: number;
	};
	proofTitle: LocalizedText;
	proofItems: Array<{
		value: string;
		label: LocalizedText;
	}>;
	features: {
		eyebrow: LocalizedText;
		title: LocalizedText;
		body: LocalizedText;
		items: Array<{
			title: LocalizedText;
			body: LocalizedText;
		}>;
	};
	cta: {
		badge: LocalizedText;
		title: LocalizedText;
		body: LocalizedText;
		primaryLabel: LocalizedText;
		secondaryLabel: LocalizedText;
		panelEyebrow: LocalizedText;
		panelLabel: LocalizedText;
		panelItems: LocalizedText[];
	};
};

export type CommerceProfileBlockFamily = {
	id: CommerceProfileBlockFamilyId;
	createHomeBlocks: (
		scenario: CommerceProfileTemplateScenario,
		locale: CommerceProfileTemplateLocale,
	) => PhotonBlock[];
	createCatalogBlocks: (
		scenario: CommerceProfileTemplateScenario,
		locale: CommerceProfileTemplateLocale,
		path?: CommerceCatalogBindingPath,
	) => PhotonBlock[];
	createDetailBlocks: (
		scenario: CommerceProfileTemplateScenario,
		locale: CommerceProfileTemplateLocale,
	) => PhotonBlock[];
	createCheckoutBlocks: (
		scenario: CommerceProfileTemplateScenario,
		locale: CommerceProfileTemplateLocale,
	) => PhotonBlock[];
	createOrdersBlocks: (
		scenario: CommerceProfileTemplateScenario,
		locale: CommerceProfileTemplateLocale,
	) => PhotonBlock[];
	createSiteRegionBlocks: (
		scenario: CommerceProfileTemplateScenario,
		locale: CommerceProfileTemplateLocale,
		key: "header" | "footer",
	) => PhotonBlock[];
	createSiteSettings: (scenario: CommerceProfileTemplateScenario) => {
		design: {
			presetId: CommerceProfileBlockFamilyId;
			colorSchemeId?: string;
		};
	};
};

export const checkoutCartHref = "/checkout?checkoutStep=cart";

export const t = (
	locale: CommerceProfileTemplateLocale,
	value: LocalizedText,
) => (locale === "ru" ? value.ru : value.en);

export const resolvePrimaryCatalogHref = (
	scenario: CommerceProfileTemplateScenario,
) => (scenario.kind === "services" ? "/services" : "/products");

export const createCommerceCatalogBlock = (
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

export const createCommerceDetailBlocks = (
	scenario: CommerceProfileTemplateScenario,
	locale: CommerceProfileTemplateLocale,
): PhotonBlock[] => [
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
			cartHref: checkoutCartHref,
		},
		bindings: {
			product: {
				source: "commerceProduct",
				path: "product",
				mode: "read",
			},
		},
	},
];

export const createCommerceCheckoutBlocks = (
	scenario: CommerceProfileTemplateScenario,
	locale: CommerceProfileTemplateLocale,
): PhotonBlock[] => [
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
			breadcrumbCartLabel: t(locale, { en: "Cart", ru: "Корзина" }),
			breadcrumbCheckoutLabel:
				scenario.kind === "services"
					? t(locale, { en: "Request booking", ru: "Оставить заявку" })
					: t(locale, { en: "Checkout", ru: "Оформить заказ" }),
			cartEyebrow:
				scenario.kind === "services"
					? t(locale, { en: "Booking request", ru: "Заявка на запись" })
					: t(locale, { en: "Cart", ru: "Корзина" }),
			cartTitle:
				scenario.kind === "services"
					? t(locale, { en: "Selected services", ru: "Выбранные услуги" })
					: scenario.kind === "hybrid"
						? t(locale, {
								en: "Selected offers",
								ru: "Выбранные предложения",
							})
						: t(locale, { en: "Your cart", ru: "Ваша корзина" }),
			cartCheckoutLabel:
				scenario.kind === "services"
					? t(locale, { en: "Request booking", ru: "Оставить заявку" })
					: t(locale, { en: "Checkout", ru: "Оформить заказ" }),
			cartEmptyTitle: t(locale, {
				en: "Your cart is empty",
				ru: "Корзина пуста",
			}),
			cartEmptyBody:
				scenario.kind === "services"
					? t(locale, {
							en: "Choose a service package to start a booking request.",
							ru: "Выберите пакет услуг, чтобы начать заявку на запись.",
						})
					: t(locale, {
							en: "Add an active catalog item to continue checkout.",
							ru: "Добавьте позицию каталога, чтобы продолжить оформление.",
						}),
			cartCatalogLabel: t(locale, {
				en: "Back to catalog",
				ru: "Назад в каталог",
			}),
			cartCatalogHref: resolvePrimaryCatalogHref(scenario),
			cartStepTitle: t(locale, { en: "Cart", ru: "Корзина" }),
			cartStepDescription: t(locale, {
				en: "Review items",
				ru: "Проверьте позиции",
			}),
			checkoutStepTitle: t(locale, {
				en: "Checkout",
				ru: "Оформление",
			}),
			checkoutStepDescription: t(locale, {
				en: "Contacts and order",
				ru: "Контакты и заказ",
			}),
			doneStepTitle:
				scenario.kind === "services"
					? t(locale, { en: "Request sent", ru: "Заявка отправлена" })
					: t(locale, { en: "Order placed", ru: "Заказ создан" }),
			doneStepDescription:
				scenario.kind === "services"
					? t(locale, { en: "Request saved", ru: "Заявка сохранена" })
					: t(locale, { en: "Order placed", ru: "Заказ создан" }),
			summaryTitle: t(locale, { en: "Cart", ru: "Корзина" }),
			summaryTotalLabel: t(locale, { en: "Total", ru: "Итого" }),
			summaryEmptyBody: t(locale, {
				en: "Cart is empty.",
				ru: "Корзина пуста.",
			}),
			summaryReturnLabel: t(locale, {
				en: "Return to cart",
				ru: "Вернуться в корзину",
			}),
			nameLabel: t(locale, { en: "Name", ru: "Имя" }),
			emailLabel: "Email",
			phoneLabel: t(locale, { en: "Phone", ru: "Телефон" }),
			submitLabel:
				scenario.kind === "services"
					? t(locale, { en: "Send request", ru: "Отправить заявку" })
					: t(locale, { en: "Place order", ru: "Разместить заказ" }),
			savingLabel: t(locale, { en: "Placing...", ru: "Размещаем..." }),
			errorLabel: t(locale, {
				en: "Unable to place order",
				ru: "Не удалось разместить заказ",
			}),
			successTitle:
				scenario.kind === "services"
					? t(locale, { en: "Request sent", ru: "Заявка отправлена" })
					: t(locale, { en: "Order placed", ru: "Заказ создан" }),
			successBody:
				scenario.kind === "services"
					? t(locale, {
							en: "We saved your request and the team will contact you for confirmation.",
							ru: "Мы сохранили заявку, команда свяжется с вами для подтверждения.",
						})
					: t(locale, {
							en: "We saved your order and will keep its status updated in your account.",
							ru: "Мы сохранили заказ и будем обновлять его статус в личном кабинете.",
						}),
			orderDetailsTitle: t(locale, {
				en: "Order details",
				ru: "Детали заказа",
			}),
			orderNumberLabel: t(locale, {
				en: "Order number",
				ru: "Номер заказа",
			}),
			orderStatusLabel: t(locale, { en: "Status", ru: "Статус" }),
			orderTotalLabel: t(locale, { en: "Total", ru: "Итого" }),
			trackOrderLabel: t(locale, {
				en: "Track order status in your account",
				ru: "Отслеживать статус заказа в личном кабинете",
			}),
			cartHref: checkoutCartHref,
			accountOrdersHref: "/account/orders",
		},
	},
];

export const createCommerceOrdersBlocks = (
	scenario: CommerceProfileTemplateScenario,
	locale: CommerceProfileTemplateLocale,
): PhotonBlock[] => [
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
];
