import { o as onDestroy, c as create_ssr_component, a as compute_rest_props, b as spread, e as escape_attribute_value, d as escape_object, f as add_attribute, g as subscribe, v as validate_component, h as escape, i as createEventDispatcher, j as each, m as missing_component, k as set_store_value } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
import "flexsearch";
import { g as getI18nContext, a as getNavbarContext, u as uppercaseFirstLetter, b as getSidebarContext, i as isActiveSidebarLink, c as getNavigationContext, s as setNavigationContext, d as setNavbarContext, e as setSidebarContext, f as createSidebarContext, h as setI18nContext, D as DEFAULT_NAVIGATION_CONFIG, j as DEFAULT_I18N_TRANSLATIONS } from "../../chunks/contexts.js";
import { _ as __kitDocs, k as kitDocs } from "../../chunks/kit-docs.js";
import clsx from "clsx";
import { r as readable, w as writable, d as derived } from "../../chunks/index2.js";
import { B as BROWSER } from "../../chunks/prod-ssr.js";
import "../../chunks/client.js";
import { i as isUndefined, a as isNull, b as isFunction } from "../../chunks/unit.js";
const browser = BROWSER;
function createDisposalBin() {
  let bin = [];
  function add(callback) {
    bin.push(callback);
  }
  function dispose() {
    bin.forEach((fn) => fn());
    bin = [];
  }
  try {
    onDestroy(dispose);
  } catch (e) {
  }
  return {
    add,
    dispose
  };
}
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isButton;
  let buttonClass;
  let contentClass;
  let arrowClass;
  let $$restProps = compute_rest_props($$props, ["primary", "type", "arrow", "as", "class"]);
  let { primary = false } = $$props;
  let { type = "flat" } = $$props;
  let { arrow = null } = $$props;
  let { as: __as = "button" } = $$props;
  let { class: __class = "" } = $$props;
  if ($$props.primary === void 0 && $$bindings.primary && primary !== void 0) $$bindings.primary(primary);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0) $$bindings.type(type);
  if ($$props.arrow === void 0 && $$bindings.arrow && arrow !== void 0) $$bindings.arrow(arrow);
  if ($$props.as === void 0 && $$bindings.as && __as !== void 0) $$bindings.as(__as);
  if ($$props.class === void 0 && $$bindings.class && __class !== void 0) $$bindings.class(__class);
  isButton = __as === "button" && isUndefined($$restProps["href"]);
  buttonClass = clsx(
    "group transform-gpu text-base font-medium transition-transform hover:scale-105",
    type === "raised" && "flex items-center justify-center",
    (isButton || type === "raised") && "rounded-md px-4 992:px-5 py-2",
    type === "raised" ? primary ? "bg-inverse text-body hover:bg-inverse/90" : "bg-body border-2 border-inverse text-inverse" : "text-soft hover:text-inverse",
    __class
  );
  contentClass = clsx("inline-block transform transition-transform duration-100 group-hover:translate-x-0", arrow === "left" && "-translate-x-3 ", arrow === "right" && "translate-x-2");
  arrowClass = clsx(arrow && "opacity-0 transition-opacity duration-100 group-hover:visible group-hover:opacity-100", !arrow ? "hidden" : "inline-block");
  return `${isButton ? `<button${spread(
    [
      {
        class: escape_attribute_value(buttonClass)
      },
      escape_object($$restProps)
    ],
    {}
  )}>${arrow === "left" ? `<span${add_attribute("class", arrowClass, 0)}>&lt;-</span>` : ``} <span${add_attribute("class", contentClass, 0)}>${slots.default ? slots.default({}) : ``}</span> ${arrow === "right" ? `<span${add_attribute("class", arrowClass, 0)}>-&gt;</span>` : ``}</button>` : ` <a${spread(
    [
      {
        class: escape_attribute_value(buttonClass)
      },
      escape_object($$restProps)
    ],
    {}
  )}>${arrow === "left" ? `<span${add_attribute("class", arrowClass, 0)}>&lt;-</span>` : ``} <span${add_attribute("class", contentClass, 0)}>${slots.default ? slots.default({}) : ``}</span> ${arrow === "right" ? `<span${add_attribute("class", arrowClass, 0)}>-&gt;</span>` : ``}</a>`}`;
});
const Moon_clear_fill = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 24 24" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M9.822 2.238a9 9 0 0 0 11.94 11.94C20.768 18.654 16.775 22 12 22C6.477 22 2 17.523 2 12c0-4.775 3.346-8.768 7.822-9.762m8.342.053L19 2.5v1l-.836.209a2 2 0 0 0-1.455 1.455L16.5 6h-1l-.209-.836a2 2 0 0 0-1.455-1.455L13 3.5v-1l.836-.209A2 2 0 0 0 15.29.836L15.5 0h1l.209.836a2 2 0 0 0 1.455 1.455m5 5L24 7.5v1l-.836.209a2 2 0 0 0-1.455 1.455L21.5 11h-1l-.209-.836a2 2 0 0 0-1.455-1.455L18 8.5v-1l.836-.209a2 2 0 0 0 1.455-1.455L20.5 5h1l.209.836a2 2 0 0 0 1.455 1.455"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Sun_fill = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 24 24" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M12 18a6 6 0 1 1 0-12a6 6 0 0 1 0 12M11 1h2v3h-2zm0 19h2v3h-2zM3.515 4.929l1.414-1.414L7.05 5.636L5.636 7.05zM16.95 18.364l1.414-1.414l2.121 2.121l-1.414 1.414zm2.121-14.85l1.414 1.415l-2.121 2.121l-1.414-1.414zM5.636 16.95l1.414 1.414l-2.121 2.121l-1.414-1.414zM23 11v2h-3v-2zM4 11v2H1v-2z"/>`}<!-- HTML_TAG_END --></svg>`;
});
function mediaQuery(query) {
  return readable(false);
}
const prefersDarkColorScheme = mediaQuery();
const __colorScheme = writable(currentColorScheme());
const colorScheme = {
  ...__colorScheme,
  set(scheme) {
    __colorScheme.set(scheme);
  }
};
const isDarkColorScheme = derived([colorScheme, prefersDarkColorScheme], ([$scheme, $prefersDark]) => $scheme === "dark" || $scheme === "system" && $prefersDark);
function currentColorScheme() {
  const savedValue = browser;
  return savedValue ? savedValue : "system";
}
const ColorSchemeToggle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isDarkColorScheme, $$unsubscribe_isDarkColorScheme;
  let $$unsubscribe_colorScheme;
  let $i18n, $$unsubscribe_i18n;
  $$unsubscribe_isDarkColorScheme = subscribe(isDarkColorScheme, (value) => $isDarkColorScheme = value);
  $$unsubscribe_colorScheme = subscribe(colorScheme, (value) => value);
  const i18n = getI18nContext();
  $$unsubscribe_i18n = subscribe(i18n, (value) => $i18n = value);
  $$unsubscribe_isDarkColorScheme();
  $$unsubscribe_colorScheme();
  $$unsubscribe_i18n();
  return `<button class="min-w-[40px] min-h-[40px] flex items-center justify-center p-2 transform-gpu rounded-md border-0 transition-transform hover:scale-[1.1]">${!$isDarkColorScheme ? `${validate_component(Sun_fill, "SunIcon").$$render($$result, { width: "20", height: "20" }, {}, {})}` : `${validate_component(Moon_clear_fill, "MoonIcon").$$render($$result, { width: "20", height: "20" }, {}, {})}`} <span class="sr-only">${escape($i18n.colorScheme.title)}</span></button>`;
});
const css$1 = {
  code: "[hidden]{display:none !important}",
  map: `{"version":3,"file":"Transition.svelte","sources":["Transition.svelte"],"sourcesContent":["<script>\\n    import { onMount, tick } from 'svelte';\\n\\n    export let toggle = undefined;\\n    export let transitions = '';\\n    export let inTransition = '';\\n    export let outTransition = inTransition;\\n    export let inState = '';\\n    export let onState = '';\\n    export let outState = inState;\\n    export let offVisible = false;\\n\\n    let div;\\n    let slot;\\n    let parent;\\n    let mounted;\\n\\n    const STATE = {\\n        IDLE: 0,\\n        ENTERING: 1,\\n        LEAVING: 2,\\n    };\\n\\n    let state = STATE.IDLE;\\n\\n    onMount(async () => {\\n        mounted = true;\\n\\n        await tick();\\n\\n        slot = div.nextElementSibling;\\n\\n        if (toggle === undefined) {\\n            slot.hidden = true;\\n            if (document.readyState === 'complete') {\\n                setTimeout(initTogglelessTransition, 50);\\n            } else {\\n                window.addEventListener('load', () => {\\n                    setTimeout(initTogglelessTransition, 50);\\n                }, { once: true });\\n            }\\n        } else {\\n            initTransition();\\n        }\\n    });\\n\\n    const initTogglelessTransition = async () => {\\n        searchParentTransition();\\n\\n        toggle = parent ? parent.toggle : false;\\n\\n        initTransition();\\n\\n        if (! parent) {\\n            setTimeout(() => { toggle = true }, 200);\\n        }\\n    };\\n\\n    const searchParentTransition = () => {\\n        let element = slot.parentElement;\\n        while (\\n            parent === undefined\\n            && element\\n            && document.body !== element\\n        ) {\\n            if (element.toggle !== undefined) {\\n                parent = element;\\n                parentObserver();\\n            } else {\\n                element = element.parentElement;\\n            }\\n        }\\n    };\\n\\n    const parentObserver = () => {\\n        new MutationObserver((mutations) => {\\n            for (let mutation of mutations) {\\n                toggle = mutation.target.toggle;\\n            }\\n        }).observe(parent, {\\n            attributes: true,\\n            attributeFilter: [ 'class' ]\\n        });\\n    };\\n\\n    const setClasses = (...classes) => {\\n        const toRemove = clean(transitions, inTransition, outTransition, inState, onState, outState);\\n        slot.classList.value = clean(slot.classList.value).split(' ').filter(c => ! toRemove.includes(c)).join(' ') + ' ' + classes.join(' ');\\n    }\\n\\n    const clean = (...args) => args.join(' ').replace(/\\\\s+/g, ' ').trim();\\n\\n    const initTransition = () => {\\n        slot.toggle = toggle;\\n\\n        if (toggle) {\\n            setClasses(transitions, outTransition, onState);\\n            transitionEndListener();\\n        } else {\\n            slot.hidden = ! parent && ! offVisible;\\n            setClasses(transitions, inState);\\n            setTimeout(() => {\\n                setClasses(transitions, inTransition, inState);\\n                transitionEndListener();\\n            }, 250);\\n        }\\n        if (! toggle) {\\n            slot.hidden = ! parent && ! offVisible;\\n        }\\n        transitionEndListener();\\n    };\\n\\n    const transitionEndListener = () => {\\n        slot.addEventListener('transitionend', (event) => {\\n            if (\\n                (event.target.toggle !== undefined)\\n                && (inTransition === '' || event.target === slot)\\n                && ((toggle && state === STATE.ENTERING) || (! toggle && state === STATE.LEAVING))\\n            ) {\\n                state = STATE.IDLE;\\n\\n                if (! toggle) {\\n                    setClasses(transitions, inTransition, inState);\\n                    slot.hidden = ! parent && ! offVisible;\\n                }\\n            }\\n        });\\n    };\\n\\n    let initialized = false;\\n    let firstToggleState = toggle;\\n    $: firstToggleState !== toggle && (initialized = true);\\n    $: initialized && event(toggle);\\n\\n    const event = (toggle) => {\\n        slot.toggle = toggle;\\n        toggle ? enterEvent() : leaveEvent();\\n    };\\n\\n    const enterEvent = () => {\\n        if (slot.hidden) {\\n            slot.hidden = false;\\n            setTimeout(enterEvent, 50);\\n        } else {\\n            state = STATE.ENTERING;\\n            setClasses(transitions, inTransition, onState);\\n        }\\n    };\\n\\n    const leaveEvent = () => {\\n        state = STATE.LEAVING;\\n        setClasses(transitions, outTransition, outState);\\n    };\\n<\/script>\\n\\n<style>\\n    :global([hidden]) {\\n        display: none !important;\\n    }\\n</style>\\n\\n<div\\n    bind:this={div}\\n    hidden\\n/>\\n\\n{#if mounted}\\n    <slot />\\n{/if}\\n"],"names":[],"mappings":"AA4JY,QAAU,CACd,OAAO,CAAE,IAAI,CAAC,UAClB"}`
};
const Transition = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { toggle = void 0 } = $$props;
  let { transitions = "" } = $$props;
  let { inTransition = "" } = $$props;
  let { outTransition = inTransition } = $$props;
  let { inState = "" } = $$props;
  let { onState = "" } = $$props;
  let { outState = inState } = $$props;
  let { offVisible = false } = $$props;
  let div;
  let slot;
  const setClasses = (...classes) => {
    const toRemove = clean(transitions, inTransition, outTransition, inState, onState, outState);
    slot.classList.value = clean(slot.classList.value).split(" ").filter((c) => !toRemove.includes(c)).join(" ") + " " + classes.join(" ");
  };
  const clean = (...args) => args.join(" ").replace(/\s+/g, " ").trim();
  let initialized = false;
  let firstToggleState = toggle;
  const event = (toggle2) => {
    slot.toggle = toggle2;
    toggle2 ? enterEvent() : leaveEvent();
  };
  const enterEvent = () => {
    if (slot.hidden) ;
    else {
      setClasses(transitions, inTransition, onState);
    }
  };
  const leaveEvent = () => {
    setClasses(transitions, outTransition, outState);
  };
  if ($$props.toggle === void 0 && $$bindings.toggle && toggle !== void 0) $$bindings.toggle(toggle);
  if ($$props.transitions === void 0 && $$bindings.transitions && transitions !== void 0) $$bindings.transitions(transitions);
  if ($$props.inTransition === void 0 && $$bindings.inTransition && inTransition !== void 0) $$bindings.inTransition(inTransition);
  if ($$props.outTransition === void 0 && $$bindings.outTransition && outTransition !== void 0) $$bindings.outTransition(outTransition);
  if ($$props.inState === void 0 && $$bindings.inState && inState !== void 0) $$bindings.inState(inState);
  if ($$props.onState === void 0 && $$bindings.onState && onState !== void 0) $$bindings.onState(onState);
  if ($$props.outState === void 0 && $$bindings.outState && outState !== void 0) $$bindings.outState(outState);
  if ($$props.offVisible === void 0 && $$bindings.offVisible && offVisible !== void 0) $$bindings.offVisible(offVisible);
  $$result.css.add(css$1);
  firstToggleState !== toggle && (initialized = true);
  initialized && event(toggle);
  return `<div hidden${add_attribute("this", div, 0)}></div> ${``}`;
});
function ariaBool(value) {
  return value ? "true" : "false";
}
const Overlay = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { open = false } = $$props;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0) $$bindings.open(open);
  return `<div${add_attribute("class", clsx("pointer-events-auto fixed top-0 left-0 z-40 backdrop-blur-sm backdrop-filter transition-opacity duration-75", "bg-body/20 dark:bg-body/60", "h-screen w-screen", open ? "visible opacity-100" : "invisible opacity-0"), 0)}></div>`;
});
const Close_fill = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 24 24" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="m12 10.587l4.95-4.95l1.414 1.414l-4.95 4.95l4.95 4.95l-1.415 1.414l-4.95-4.95l-4.949 4.95l-1.414-1.415l4.95-4.95l-4.95-4.95L7.05 5.638z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const isLargeScreen = mediaQuery();
mediaQuery();
function hideDocumentScrollbar(hidden) {
  window.requestAnimationFrame(() => {
    document.documentElement.classList["remove"]("overflow-hidden");
    document.documentElement.classList["add"]("overflow-x-hidden");
  });
}
let idCount = 0;
const Popover = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isLargeScreen, $$unsubscribe_isLargeScreen;
  $$unsubscribe_isLargeScreen = subscribe(isLargeScreen, (value) => $isLargeScreen = value);
  let { open = false } = $$props;
  let { overlay = false } = $$props;
  createEventDispatcher();
  let popoverId = `popover-${idCount += 1}`;
  let popoverButtonId = `popover-button-${idCount}`;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0) $$bindings.open(open);
  if ($$props.overlay === void 0 && $$bindings.overlay && overlay !== void 0) $$bindings.overlay(overlay);
  {
    if ($isLargeScreen) {
      hideDocumentScrollbar();
    }
  }
  $$unsubscribe_isLargeScreen();
  return `<div class="not-prose relative inline-block text-left"><button${add_attribute("id", popoverButtonId, 0)} type="button"${add_attribute("class", clsx("inline-flex w-full justify-center rounded-md p-2 text-lg font-medium", "transform-gpu transition-transform hover:scale-[1.025]", open ? "text-inverse" : "text-soft hover:text-inverse"), 0)}${add_attribute("aria-controls", popoverId, 0)}${add_attribute("aria-expanded", ariaBool(open), 0)} aria-haspopup="true">${slots.button ? slots.button({}) : ``}</button> ${overlay ? `${validate_component(Overlay, "Overlay").$$render($$result, { open }, {}, {})}` : ``} ${validate_component(Transition, "Transition").$$render(
    $$result,
    {
      toggle: open,
      transitions: "transition transform",
      inTransition: "ease-out duration-150",
      inState: "opacity-0 scale-95",
      onState: "opacity-100 scale-100",
      outTransition: "ease-out duration-100"
    },
    {},
    {
      default: () => {
        return `<div${add_attribute("id", popoverId, 0)}${add_attribute("class", clsx("absolute -top-4 -right-0 z-50 min-w-[340px] origin-top-right p-5 pt-4", !open && "invisible"), 0)} tabindex="-1" role="dialog"><div class="bg-elevate border-border flex min-h-[60px] flex-col overflow-hidden rounded-md border-[1.5px]"><div class="z-20 flex items-center"><div class="flex-1"></div> <button${add_attribute("class", clsx("text-soft hover:text-inverse mt-[0.125rem] mr-[0.125rem] p-4", !open && "pointer-events-none"), 0)}>${validate_component(Close_fill, "CloseIcon").$$render($$result, { width: "28", height: "28" }, {}, {})} <span class="sr-only" data-svelte-h="svelte-1pewzs3">Close</span></button></div> <div class="-mt-[2.5rem] px-4 pt-8 pb-6">${slots.default ? slots.default({}) : ``}</div></div></div>`;
      }
    }
  )}</div>`;
});
const Arrow_drop_down_fill = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 24 24" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="m12 14l-4-4h8z"/>`}<!-- HTML_TAG_END --></svg>`;
});
function useActiveHeaderLinks(navContext) {
  const index = writable(-1);
  createDisposalBin();
  const destroyDisposal = createDisposalBin();
  destroyDisposal.add(isLargeScreen.subscribe(($is) => {
  }));
  destroyDisposal.add(navContext.subscribe((config) => {
    config.canUpdateHash;
  }));
  return index;
}
const KitDocs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { meta = null } = $$props;
  onDestroy(() => {
    __kitDocs.set({ meta: null });
  });
  if ($$props.meta === void 0 && $$bindings.meta && meta !== void 0) $$bindings.meta(meta);
  {
    __kitDocs.set({ meta });
  }
  return `${slots.default ? slots.default({}) : ``}`;
});
const Menu_unfold_fill = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 24 24" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M21 18v2H3v-2zM17 3.5l5 5l-5 5zM12 11v2H3v-2zm0-7v2H3V4z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Arrow_right_s_line = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 24 24" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="m13.172 12l-4.95-4.95l1.414-1.413L16 12l-6.364 6.364l-1.414-1.415z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Menu_5_line = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 24 24" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M18 18v2H6v-2zm3-7v2H3v-2zm-3-7v2H6V4z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const NavLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { slug } = $$props;
  let { match = null } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.slug === void 0 && $$bindings.slug && slug !== void 0) $$bindings.slug(slug);
  if ($$props.match === void 0 && $$bindings.match && match !== void 0) $$bindings.match(match);
  return `<li class="mt-4 first:mt-0 992:mt-0"><a class="text-soft text-base hover:font-medium font-base hover:underline hover:text-brand"${add_attribute("href", slug, 0)}${add_attribute("target", isNull(match) ? "_blank" : null, 0)}>${escape(title)}</a></li>`;
});
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let navLinks;
  let $context, $$unsubscribe_context;
  let $i18n, $$unsubscribe_i18n;
  let $colorScheme, $$unsubscribe_colorScheme;
  $$unsubscribe_colorScheme = subscribe(colorScheme, (value) => $colorScheme = value);
  let { search = false } = $$props;
  createEventDispatcher();
  const context = getNavbarContext();
  $$unsubscribe_context = subscribe(context, (value) => $context = value);
  const i18n = getI18nContext();
  $$unsubscribe_i18n = subscribe(i18n, (value) => $i18n = value);
  if ($$props.search === void 0 && $$bindings.search && search !== void 0) $$bindings.search(search);
  navLinks = $context.links;
  $$unsubscribe_context();
  $$unsubscribe_i18n();
  $$unsubscribe_colorScheme();
  return `<div class="flex w-full flex-col items-center justify-center mx-auto max-w-[var(--kd-navbar-max-width)] p-[var(--kd-navbar-padding)] h-[var(--kd--navbar-height)]"><div${add_attribute("class", clsx("flex w-full items-center"), 0)}>${slots.left ? slots.left({}) : ``} <div class="flex-1"></div> <div class="992:hidden -mr-2 flex items-center">${search ? `${slots.search ? slots.search({}) : ``}` : ``} ${validate_component(Popover, "Popover").$$render($$result, { overlay: true }, {}, {
    button: () => {
      return `${validate_component(Menu_5_line, "MenuIcon").$$render($$result, { width: "30", height: "30" }, {}, {})} <span class="sr-only">${escape($i18n.nav.mainMenu)}</span> `;
    },
    default: () => {
      return `${slots["popover-top"] ? slots["popover-top"]({}) : ``} <section class="flex flex-col items-start"><h1 class="mb-6 text-xl font-medium">${escape($i18n.nav.links)}</h1> <nav><ul>${each(navLinks, (navLink) => {
        return `${validate_component(NavLink, "NavLinkItem").$$render($$result, Object.assign({}, navLink), {}, {})}`;
      })}</ul></nav></section> ${slots["popover-middle"] ? slots["popover-middle"]({}) : ``} <hr class="my-6 h-2 w-full border-t border-dashed border-border"> <section class="flex flex-col items-start"><h1 class="mb-6 text-xl font-medium">${escape($i18n.nav.options)}</h1> <div class="flex flex-col space-y-6">${slots["popover-options"] ? slots["popover-options"]({}) : ``} <div class="flex items-center">Theme

              <label class="relative ml-4 flex items-center border border-border px-4 py-1 rounded-md focus-within:ring-2" style="--tw-ring-color: var(--kd-color-focus);"><span class="sr-only">${escape($i18n.colorScheme.theme)}</span> ${escape(uppercaseFirstLetter($colorScheme))} ${validate_component(Arrow_drop_down_fill, "ArrowDropDownIcon").$$render($$result, { width: "20", height: "20", class: "ml-1" }, {}, {})} <select class="absolute inset-0 appearance-none opacity-0"><option value="light">${escape($i18n.colorScheme.light)}</option><option value="dark">${escape($i18n.colorScheme.dark)}</option><option value="system">${escape($i18n.colorScheme.system)}</option></select></label></div></div></section> ${slots["popover-bottom"] ? slots["popover-bottom"]({}) : ``}`;
    }
  })}</div> <div class="992:flex 992:items-center hidden"><nav><ul class="flex items-center space-x-8">${each(navLinks, (navLink) => {
    return `${validate_component(NavLink, "NavLinkItem").$$render($$result, Object.assign({}, navLink), {}, {})}`;
  })}</ul></nav> ${slots.right ? slots.right({}) : ``} <div class="hidden 992:flex items-center ml-6">${slots["right-alt"] ? slots["right-alt"]({}) : ``} ${validate_component(ColorSchemeToggle, "ColorSchemeToggle").$$render($$result, {}, {}, {})}</div></div></div> ${slots.bottom ? slots.bottom({}) : ``}</div>`;
});
const Sidebar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_activeLink;
  let $isLargeScreen, $$unsubscribe_isLargeScreen;
  let $config, $$unsubscribe_config;
  let $page, $$unsubscribe_page;
  $$unsubscribe_isLargeScreen = subscribe(isLargeScreen, (value) => $isLargeScreen = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  createEventDispatcher();
  let sidebar;
  let { open = false } = $$props;
  let { search = false } = $$props;
  let { class: _class = "" } = $$props;
  let { style = "" } = $$props;
  const { config, activeLink } = getSidebarContext();
  $$unsubscribe_config = subscribe(config, (value) => $config = value);
  $$unsubscribe_activeLink = subscribe(activeLink, (value) => value);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0) $$bindings.open(open);
  if ($$props.search === void 0 && $$bindings.search && search !== void 0) $$bindings.search(search);
  if ($$props.class === void 0 && $$bindings.class && _class !== void 0) $$bindings.class(_class);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0) $$bindings.style(style);
  $$unsubscribe_activeLink();
  $$unsubscribe_isLargeScreen();
  $$unsubscribe_config();
  $$unsubscribe_page();
  return `<aside id="main-sidebar"${add_attribute("class", clsx("sidebar", isFunction(_class) ? _class({ open }) : _class), 0)}${add_attribute("role", !$isLargeScreen ? "dialog" : null, 0)}${add_attribute("aria-modal", ariaBool(!$isLargeScreen), 0)}${add_attribute("style", style, 0)}${add_attribute("this", sidebar, 0)}><div class="992:hidden sticky top-0 left-0 flex items-center"><div class="flex-1"></div> <button${add_attribute("class", clsx("text-soft hover:text-inverse p-4 -mx-6", !open && "pointer-events-none"), 0)}>${validate_component(Close_fill, "CloseIcon").$$render($$result, { width: "24", height: "24" }, {}, {})} <span class="sr-only" data-svelte-h="svelte-13q18xv">Close sidebar</span></button></div> <nav class="992:px-1 scrollbar">${search ? `<div class="pointer-events-none sticky top-0 z-0 -ml-0.5 min-h-[80px]"><div class="992:h-6 bg-body"></div> <div class="bg-body pointer-events-auto relative"><div class="992:block hidden">${slots.search ? slots.search({}) : ``}</div></div> <div class="from-body h-8 bg-gradient-to-b"></div></div>` : ``} ${slots.top ? slots.top({}) : ``} <ul${add_attribute("class", clsx(!search && "mt-8", "pb-28 992:pb-0"), 0)}>${each(Object.keys($config.links), (category) => {
    let links = $config.links[category];
    return ` <li class="992:mt-10 mt-12 first:mt-0">${category !== "." ? `<h5 class="text-strong 992:mb-3 mb-8 text-lg font-semibold">${escape(category)} </h5>` : `<div class="mt-10"></div>`} <ul class="border-border space-y-3 border-l">${each(links, (link) => {
      return `<li class="first:mt-6"><a${add_attribute(
        "class",
        clsx("992:py-1 -ml-px flex items-center border-l py-2 pl-4", isActiveSidebarLink(link, $page.url.pathname) ? "text-brand font-semibold" : "hover:border-inverse focus-visible:border-inverse text-soft hover:text-inverse focus-visible:text-inverse border-transparent font-normal"),
        0
      )}${add_attribute("href", link.slug, 0)}${add_attribute(
        "style",
        isActiveSidebarLink(link, $page.url.pathname) ? "border-color: var(--kd-sidebar-border-active);" : "",
        0
      )}>${link.icon?.before ? `${validate_component(link.icon.before || missing_component, "svelte:component").$$render($$result, { class: "mr-1", width: "24", height: "24" }, {}, {})}` : ``} ${escape(link.title)} ${link.icon?.after ? `${validate_component(link.icon.after || missing_component, "svelte:component").$$render($$result, { class: "ml-1", width: "24", height: "24" }, {}, {})}` : ``}</a> </li>`;
    })}</ul> </li>`;
  })}</ul> ${slots.bottom ? slots.bottom({}) : ``}</nav></aside> <div class="992:hidden z-40">${validate_component(Overlay, "Overlay").$$render($$result, { open }, {}, {})}</div>`;
});
const Arrow_drop_right_line = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 24 24" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M12.172 12L9.343 9.173l1.415-1.414L15 12l-4.242 4.242l-1.415-1.414z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const OnThisPage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $kitDocs, $$unsubscribe_kitDocs;
  let $i18n, $$unsubscribe_i18n;
  let $index, $$unsubscribe_index;
  $$unsubscribe_kitDocs = subscribe(kitDocs, (value) => $kitDocs = value);
  let { class: __class = "" } = $$props;
  let { style = "" } = $$props;
  const nav = getNavigationContext();
  const i18n = getI18nContext();
  $$unsubscribe_i18n = subscribe(i18n, (value) => $i18n = value);
  const index = useActiveHeaderLinks(nav);
  $$unsubscribe_index = subscribe(index, (value) => $index = value);
  let headings = [];
  function calcIndex(header) {
    let sum = 0;
    for (let i = 0; i < headings.length; i++) {
      if (headings[i] === header) return sum;
      sum += 1 + headings[i].children.length;
    }
    return sum;
  }
  if ($$props.class === void 0 && $$bindings.class && __class !== void 0) $$bindings.class(__class);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0) $$bindings.style(style);
  {
    {
      headings = [];
      const currentHeadings = ($kitDocs.meta?.headers ?? []).filter(({ level }) => level > 1);
      for (const heading of currentHeadings) {
        const header = { ...heading, children: [] };
        headings.push(header);
        if (heading.children) {
          for (const child of heading.children) {
            header.children.push(child);
          }
        }
      }
    }
  }
  $$unsubscribe_kitDocs();
  $$unsubscribe_i18n();
  $$unsubscribe_index();
  return `<div${add_attribute("class", clsx("on-this-page scrollbar", __class), 0)}${add_attribute("style", style, 0)}>${headings.length > 1 || headings[0]?.children.length ? `<h5 class="text-inverse w-full text-left text-lg font-semibold">${escape($i18n.toc.title)}</h5> <ul class="mt-4 space-y-4 px-2">${each(headings, (heading) => {
    let i = calcIndex(heading), activeParent = i === $index || heading.children.some((_, j) => i + j + 1 === $index);
    return `  <li${add_attribute(
      "class",
      clsx(activeParent ? "text-brand" : "text-soft hover:text-inverse"),
      0
    )}><a${add_attribute("href", `#${heading.slug}`, 0)}>${escape(heading.title)}</a></li> ${heading.children.length > 0 ? `<ul class="space-y-3">${each(heading.children, (childHeader, j) => {
      return `<li${add_attribute(
        "class",
        clsx("group group flex", i + j + 1 === $index ? "text-brand" : "text-soft hover:text-inverse"),
        0
      )}>${validate_component(Arrow_drop_right_line, "RightArrowIcon").$$render(
        $$result,
        {
          width: "20",
          height: "20",
          class: "group-hover:text-inverse mt-px mr-px text-soft"
        },
        {},
        {}
      )} <a${add_attribute("href", `#${childHeader.slug}`, 0)}>${escape(childHeader.title)}</a> </li>`;
    })} </ul>` : ``}`;
  })}</ul>` : ``}</div>`;
});
const scrollTop = readable(0, (set) => {
  return;
});
const scrollDirection = readable("none", (set) => {
  return;
});
const KitDocsLayout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let collapseNavbar;
  let showSidebar;
  let showBottomNav;
  let $activeLink, $$unsubscribe_activeLink;
  let $sidebarLinks, $$unsubscribe_sidebarLinks;
  let $scrollDirection, $$unsubscribe_scrollDirection;
  let $scrollTop, $$unsubscribe_scrollTop;
  let $isLargeScreen, $$unsubscribe_isLargeScreen;
  let $i18nContext, $$unsubscribe_i18nContext;
  let $sidebarConfig, $$unsubscribe_sidebarConfig;
  let $navbarContext, $$unsubscribe_navbarContext;
  let $navigatonContext, $$unsubscribe_navigatonContext;
  let $kitDocs, $$unsubscribe_kitDocs;
  let $activeCategory, $$unsubscribe_activeCategory;
  let $previousLink, $$unsubscribe_previousLink;
  let $nextLink, $$unsubscribe_nextLink;
  $$unsubscribe_scrollDirection = subscribe(scrollDirection, (value) => $scrollDirection = value);
  $$unsubscribe_scrollTop = subscribe(scrollTop, (value) => $scrollTop = value);
  $$unsubscribe_isLargeScreen = subscribe(isLargeScreen, (value) => $isLargeScreen = value);
  $$unsubscribe_kitDocs = subscribe(kitDocs, (value) => $kitDocs = value);
  let { navigation = null } = $$props;
  let { navbar } = $$props;
  let { sidebar = null } = $$props;
  let { i18n = null } = $$props;
  let { isSidebarOpen = false } = $$props;
  let { isNavPopoverOpen = false } = $$props;
  let { search = false } = $$props;
  const navigatonContext = writable();
  $$unsubscribe_navigatonContext = subscribe(navigatonContext, (value) => $navigatonContext = value);
  setNavigationContext(navigatonContext);
  const navbarContext = writable();
  $$unsubscribe_navbarContext = subscribe(navbarContext, (value) => $navbarContext = value);
  setNavbarContext(navbarContext);
  const sidebarConfig = writable();
  $$unsubscribe_sidebarConfig = subscribe(sidebarConfig, (value) => $sidebarConfig = value);
  setSidebarContext(createSidebarContext(sidebarConfig));
  const i18nContext = writable();
  $$unsubscribe_i18nContext = subscribe(i18nContext, (value) => $i18nContext = value);
  setI18nContext(i18nContext);
  const { activeCategory, allLinks: sidebarLinks, activeLink, nextLink, previousLink } = getSidebarContext();
  $$unsubscribe_activeCategory = subscribe(activeCategory, (value) => $activeCategory = value);
  $$unsubscribe_sidebarLinks = subscribe(sidebarLinks, (value) => $sidebarLinks = value);
  $$unsubscribe_activeLink = subscribe(activeLink, (value) => $activeLink = value);
  $$unsubscribe_nextLink = subscribe(nextLink, (value) => $nextLink = value);
  $$unsubscribe_previousLink = subscribe(previousLink, (value) => $previousLink = value);
  if ($$props.navigation === void 0 && $$bindings.navigation && navigation !== void 0) $$bindings.navigation(navigation);
  if ($$props.navbar === void 0 && $$bindings.navbar && navbar !== void 0) $$bindings.navbar(navbar);
  if ($$props.sidebar === void 0 && $$bindings.sidebar && sidebar !== void 0) $$bindings.sidebar(sidebar);
  if ($$props.i18n === void 0 && $$bindings.i18n && i18n !== void 0) $$bindings.i18n(i18n);
  if ($$props.isSidebarOpen === void 0 && $$bindings.isSidebarOpen && isSidebarOpen !== void 0) $$bindings.isSidebarOpen(isSidebarOpen);
  if ($$props.isNavPopoverOpen === void 0 && $$bindings.isNavPopoverOpen && isNavPopoverOpen !== void 0) $$bindings.isNavPopoverOpen(isNavPopoverOpen);
  if ($$props.search === void 0 && $$bindings.search && search !== void 0) $$bindings.search(search);
  set_store_value(
    navigatonContext,
    $navigatonContext = {
      ...DEFAULT_NAVIGATION_CONFIG,
      ...navigation
    },
    $navigatonContext
  );
  set_store_value(navbarContext, $navbarContext = navbar ? navbar : { links: [] }, $navbarContext);
  set_store_value(sidebarConfig, $sidebarConfig = sidebar, $sidebarConfig);
  set_store_value(i18nContext, $i18nContext = { ...DEFAULT_I18N_TRANSLATIONS, ...i18n }, $i18nContext);
  collapseNavbar = $isLargeScreen ? false : $scrollTop > 60 && $scrollDirection === "down";
  showSidebar = $sidebarLinks.length > 0;
  showBottomNav = showSidebar || $activeLink;
  $$unsubscribe_activeLink();
  $$unsubscribe_sidebarLinks();
  $$unsubscribe_scrollDirection();
  $$unsubscribe_scrollTop();
  $$unsubscribe_isLargeScreen();
  $$unsubscribe_i18nContext();
  $$unsubscribe_sidebarConfig();
  $$unsubscribe_navbarContext();
  $$unsubscribe_navigatonContext();
  $$unsubscribe_kitDocs();
  $$unsubscribe_activeCategory();
  $$unsubscribe_previousLink();
  $$unsubscribe_nextLink();
  return `<div class="kit-docs bg-body text-inverse min-h-full min-w-full h-full transition-transform duration-150 ease-out"${add_attribute("style", clsx("font-family: var(--kd-font-family-sans, inherit);", !showBottomNav && "--kd-breadcrumbs-height: 0px;", `--kd--navbar-height: calc(var(--kd-navbar-height) + var(--kd-breadcrumbs-height));`), 0)}>${navbar ? `<div${add_attribute(
    "class",
    clsx("fixed top-0 z-30 w-full flex-none transform-gpu transition-transform duration-150 ease-out", isNavPopoverOpen ? "" : "blur-bg", collapseNavbar ? "-translate-y-[calc(calc(var(--kd--navbar-height)-var(--kd-breadcrumbs-height))+1px)]" : "translate-y-0"),
    0
  )} style="border-bottom: var(--kd-navbar-border-bottom);">${validate_component(Navbar, "Navbar").$$render($$result, { search }, {}, {
    "popover-bottom": () => {
      return `${slots["navbar-popover-bottom"] ? slots["navbar-popover-bottom"]({}) : ``} `;
    },
    "popover-options": () => {
      return `${slots["navbar-popover-options"] ? slots["navbar-popover-options"]({}) : ``} `;
    },
    "popover-middle": () => {
      return `${slots["navbar-popover-middle"] ? slots["navbar-popover-middle"]({}) : ``} `;
    },
    "popover-top": () => {
      return `${slots["navbar-popover-top"] ? slots["navbar-popover-top"]({}) : ``} `;
    },
    bottom: () => {
      return `${showBottomNav ? `<div class="border-border 992:hidden flex w-full items-center mt-4 pt-4 border-t">${showSidebar ? `<button id="main-sidebar-button" type="button" class="text-soft hover:text-inverse inline-flex justify-center rounded-md p-2 text-sm font-medium" aria-controls="main-sidebar"${add_attribute("aria-expanded", ariaBool(isSidebarOpen), 0)} aria-haspopup="true"><span class="sr-only">${escape($i18nContext.nav.openSidebar)}</span> ${validate_component(Menu_unfold_fill, "MenuUnfoldIcon").$$render($$result, { width: "28", height: "28" }, {}, {})}</button>` : ``} ${$activeLink || $kitDocs.meta?.title ? `<ol${add_attribute("class", clsx("text-md text-soft flex items-center whitespace-nowrap leading-6", showSidebar ? "mt-px ml-2.5" : "mt-2"), 0)}>${$activeCategory && $activeCategory !== "." ? `<li class="flex items-center">${escape($activeCategory)} ${validate_component(Arrow_right_s_line, "RightArrowIcon").$$render($$result, { class: "mx-1", width: "16", height: "16" }, {}, {})}</li>` : ``} <li class="truncate font-semibold text-slate-900 dark:text-slate-200">${escape($activeLink?.title || $kitDocs.meta?.title)}</li></ol>` : ``}</div>` : ``} ${slots["navbar-bottom"] ? slots["navbar-bottom"]({}) : ``} `;
    },
    "right-alt": () => {
      return `${slots["navbar-right-alt"] ? slots["navbar-right-alt"]({}) : ``} `;
    },
    right: () => {
      return `${slots["navbar-right"] ? slots["navbar-right"]({}) : ``} `;
    },
    left: () => {
      return `${slots["navbar-left"] ? slots["navbar-left"]({}) : ``} `;
    },
    search: () => {
      return `${slots.search ? slots.search({}) : ``}`;
    }
  })}</div>` : ``} <div${add_attribute("class", clsx("mx-auto w-full flex flex-row min-h-full max-w-[var(--kd-content-max-width)]", navbar && "pt-[var(--kd--navbar-height)] z-20"), 0)}>${showSidebar ? `${validate_component(Sidebar, "Sidebar").$$render(
    $$result,
    {
      search,
      class: ({ open }) => clsx("self-start fixed top-0 left-0 transform bg-body z-50 border-border border-r scrollbar", "-translate-x-full transform transition-transform duration-200 ease-out will-change-transform", "max-h-screen min-h-screen min-w-[var(--kd-sidebar-min-width)] max-w-[var(--kd-sidebar-max-width)]", "992:translate-x-0 922:block 992:sticky 992:z-0 overflow-y-auto p-[var(--kd-sidebar-padding)]", open && "translate-x-0", navbar ? "992:top-[var(--kd--navbar-height)] 992:min-h-[calc(100vh-var(--kd--navbar-height))] 992:max-h-[calc(100vh-var(--kd--navbar-height))]" : "992:top-0 min-h-screen max-h-screen"),
      open: isSidebarOpen
    },
    {},
    {
      search: () => {
        return `${slots.search ? slots.search({}) : ``} `;
      },
      bottom: () => {
        return `${slots["sidebar-bottom"] ? slots["sidebar-bottom"]({}) : ``} `;
      },
      top: () => {
        return `${slots["sidebar-top"] ? slots["sidebar-top"]({}) : ``}`;
      }
    }
  )}` : ``} <main${add_attribute(
    "class",
    clsx(
      "w-full overflow-x-hidden",
      navbar ? `992:min-h-[calc(100vh-var(--kd--navbar-height))]` : "min-h-screen",
      navbar && "min-h-[calc(100vh-var(--kd--navbar-height))]",
      $kitDocs.meta && (showSidebar ? "px-8 992:px-16" : "px-6"),
      $kitDocs.meta && (navbar || showBottomNav ? "pt-8" : "")
    ),
    0
  )}${add_attribute(
    "style",
    clsx(`max-width: ${$kitDocs.meta ? "var(--kd-main-max-width, var(--kd-article-max-width))" : "var(--kd-main-max-width)"};`),
    0
  )}>${slots["main-top"] ? slots["main-top"]({}) : ``} ${$kitDocs.meta ? `<article class="markdown prose dark:prose-invert z-10 max-w-[var(--kd-article-max-width)]">${$activeCategory && $activeCategory !== "." ? `<p class="text-brand mb-3.5 text-[15px] font-semibold leading-6">${escape($activeCategory)}</p>` : ``} ${slots.default ? slots.default({}) : ``}</article>` : `${slots.default ? slots.default({}) : ``}`} ${$previousLink || $nextLink ? `<hr class="border-border mt-20"> <div class="992:text-xl flex items-center pt-12 pb-20 text-lg font-semibold text-gray-300">${$previousLink ? `<div class="mb-4 flex flex-col items-start"><span class="text-inverse ml-3 mb-4 inline-block">${escape($i18nContext.nav.previous)}</span> ${validate_component(Button, "Button").$$render(
    $$result,
    {
      arrow: "left",
      href: $previousLink.slug,
      class: "hover:text-inverse",
      "data-sveltekit-prefetch": true
    },
    {},
    {
      default: () => {
        return `${escape($previousLink.title)}`;
      }
    }
  )}</div>` : ``} ${$nextLink ? `<div class="ml-auto mb-4 flex flex-col items-end"><span class="text-inverse mr-3 mb-4 inline-block">${escape($i18nContext.nav.next)}</span> ${validate_component(Button, "Button").$$render(
    $$result,
    {
      arrow: "right",
      href: $nextLink.slug,
      class: "hover:text-inverse",
      "data-sveltekit-prefetch": true
    },
    {},
    {
      default: () => {
        return `${escape($nextLink.title)}`;
      }
    }
  )}</div>` : ``}</div>` : ``} ${slots["main-bottom"] ? slots["main-bottom"]({}) : ``}</main> <div class="992:flex-1"></div> ${validate_component(OnThisPage, "OnThisPage").$$render(
    $$result,
    {
      class: clsx("pt-8 pb-8 hidden overflow-auto min-w-[160px] sticky right-4 pr-4 1440:right-6 1440:pr-2 1280:block pl-0.5", navbar ? "top-[var(--kd--navbar-height)] max-h-[calc(100vh-var(--kd--navbar-height))]" : "top-0 max-h-screen")
    },
    {},
    {}
  )}</div></div>`;
});
const css = {
  code: ":root{--kd-color-brand-rgb:233, 127, 6}:root.dark{--kd-color-brand-rgb:213, 149, 76}.logo.svelte-1vc8102 a{display:flex;align-items:center;justify-content:center}.logo.svelte-1vc8102 svg{height:36px;overflow:hidden}.search.svelte-1vc8102{max-width:600px;width:100%;border-radius:0.5rem;overflow:hidden;border:1px solid rgb(var(--kd-color-soft));& input {\n      width: 100%;\n      padding: 1ch 1.5rem;\n      color: rgb(var(--kd-color-soft) / var(--tw-text-opacity));\n      font: inherit;\n      outline: none;\n    }}.results.svelte-1vc8102{position:fixed;max-height:max(300px, 60vh);max-width:40vw;padding:1.5rem;backdrop-filter:blur(5px);background-color:rgb(var(--kd-color-body) / 0.85);color:rgb(var(--kd-color-inverse));overflow-y:auto;scrollbar-width:thin;border-radius:1.25rem;border:rgb(var(--kd-color-inverse) / 0.5) solid 2px;box-shadow:5px 5px 15px 5px rgba(0, 0, 0, 0.4);left:var(--results-x);top:var(--results-y);z-index:30;@media (width < 992px) {\n      max-width: 95vw;\n      max-height: 75vh;\n      left: 2.5vw;\n    };& ul {\n      display: grid;\n      gap: 1rem;\n      padding: 0px;\n      margin: 0px;\n      list-style: none;\n\n      & a {\n        color: rgb(var(--kd-color-inverse));\n        border-bottom: none;\n        font-weight: bold;\n      }\n\n      & a:hover {\n        border-bottom: 1px solid rgb(var(--kd-color-brand));\n      }\n\n      & li:not(:last-child) {\n        padding-block: 0rem 0.5rem;\n        border-bottom: 1px solid rgb(var(--kd-color-brand));\n      }\n    }}",
  map: '{"version":3,"file":"+layout.svelte","sources":["+layout.svelte"],"sourcesContent":["<script>\\n  import \\"@svelteness/kit-docs/client/polyfills/index.js\\";\\n  import \\"@svelteness/kit-docs/client/styles/normalize.css\\";\\n  import \\"@svelteness/kit-docs/client/styles/fonts.css\\";\\n  import \\"@svelteness/kit-docs/client/styles/theme.css\\";\\n  import \\"@svelteness/kit-docs/client/styles/vars.css\\";\\n  import \\"$lib/app.css\\";\\n\\n  import { page } from \\"$app/stores\\";\\n\\n  import SvelteLogo from \\"$img/logo-horiz-3.svg?raw\\";\\n\\n  import {\\n    Button,\\n    KitDocs,\\n    KitDocsLayout,\\n    createSidebarContext,\\n  } from \\"@svelteness/kit-docs\\";\\n\\n  import { onMount } from \\"svelte\\";\\n  import { createPostsIndex, searchPostsIndex } from \\"$lib/search\\";\\n  import { slide } from \\"svelte/transition\\";\\n  import { clickoutside } from \\"@svelte-put/clickoutside\\";\\n\\n  /** @type {import(\'./$types\').LayoutData} */\\n  export let data;\\n\\n  let resultsY = 0;\\n  let resultsX = 0;\\n  /** @type {HTMLInputElement | undefined} */\\n  let inputSearch;\\n\\n  $: ({ meta, sidebar } = data);\\n  $: category = $activeCategory ? `${$activeCategory}: ` : \\"\\";\\n  $: title = meta ? `${category}${meta.title} | Oto Documentation` : null;\\n  $: description = meta?.description;\\n\\n  /** @type {import(\'@svelteness/kit-docs\').NavbarConfig} */\\n  const navbar = {\\n    links: [\\n      { title: \\"Oto Website\\", slug: \\"https://oto.software\\", match: /\\\\/docs/ },\\n      { title: \\"Documentation\\", slug: \\"/docs\\", match: /\\\\/docs/ },\\n    ],\\n  };\\n\\n  const { activeCategory } = createSidebarContext(sidebar);\\n\\n  let search = \\"loading\\";\\n  let searchTerm = \\"\\";\\n  /** @type {{ slug?: string | undefined; title: string; content: string[]; }[]} */\\n  let results = [];\\n\\n  onMount(async () => {\\n    const posts = await fetch(\\"/search.json\\").then((res) => res.json());\\n    createPostsIndex(posts);\\n    search = \\"ready\\";\\n    if (inputSearch)\\n      ({ left: resultsX, top: resultsY } = inputSearch.getBoundingClientRect());\\n  });\\n\\n  let onResize = () => {\\n    if (inputSearch)\\n      ({ left: resultsX, top: resultsY } = inputSearch.getBoundingClientRect());\\n  };\\n\\n  $: if (search === \\"ready\\") {\\n    // runs each time `searchTerm` updates\\n    results = searchPostsIndex(searchTerm);\\n  }\\n<\/script>\\n\\n<svelte:window on:resize={onResize} />\\n\\n<svelte:head>\\n  {#key $page.url.pathname}\\n    {#if title}\\n      <title>{title}</title>\\n    {/if}\\n    {#if description}\\n      <meta name=\\"description\\" content={description} />\\n    {/if}\\n  {/key}\\n</svelte:head>\\n\\n<KitDocs {meta}>\\n  <KitDocsLayout {navbar} {sidebar} search>\\n    <!-- <input type=\\"text\\" placeholder=\\"Search documentation\\" slot=\\"search\\" /> -->\\n\\n    <div class=\\"search\\" slot=\\"search\\">\\n      <input\\n        bind:this={inputSearch}\\n        bind:value={searchTerm}\\n        placeholder=\\"Search\\"\\n        autocomplete=\\"off\\"\\n        spellcheck=\\"false\\"\\n        type=\\"search\\"\\n      />\\n    </div>\\n\\n    {#if search === \\"ready\\" && results.length > 0}\\n      <div\\n        class=\\"results\\"\\n        use:clickoutside\\n        on:clickoutside={() => (results = [])}\\n        transition:slide\\n        style=\\"--results-x: {resultsX - 5}px; --results-y: {resultsY + 60}px\\"\\n      >\\n        {#if results}\\n          <ul>\\n            {#each results as result}\\n              <li>\\n                <a href=\\"/{result.slug}\\">\\n                  {@html result.title}\\n                </a>\\n                <p>{@html result.content}</p>\\n              </li>\\n            {/each}\\n          </ul>\\n        {/if}\\n      </div>\\n    {/if}\\n\\n    <div class=\\"logo\\" slot=\\"navbar-left\\">\\n      <Button\\n        href={$page.url.hostname.includes(\\"documentation.oto\\")\\n          ? \\"https://oto.software\\"\\n          : \\"/\\"}\\n      >\\n        <svg\\n          xmlns=\\"http://www.w3.org/2000/svg\\"\\n          xml:space=\\"preserve\\"\\n          id=\\"Calque_1\\"\\n          x=\\"0\\"\\n          y=\\"0\\"\\n          style=\\"enable-background:new 0 0 650 139\\"\\n          version=\\"1.1\\"\\n          viewBox=\\"0 0 650 139\\"\\n        >\\n          <style>\\n            .st0 {\\n              fill: #ef4444;\\n            }\\n          </style>\\n          <path\\n            d=\\"M37.9 41.1c3.1 0 5.8.7 8.3 2.1 2.5 1.4 4.3 3.2 5.7 5.6 1.4 2.4 2.1 5.1 2.1 8.1s-.6 5.7-2 8.1c-1.4 2.4-3.3 4.3-5.8 5.6-2.5 1.4-5.2 2.1-8.3 2.1s-5.8-.7-8.3-2.1-4.3-3.2-5.7-5.6c-1.4-2.4-2.1-5.1-2.1-8.1s.7-5.7 2.1-8.1c1.4-2.4 3.3-4.3 5.8-5.6 2.4-1.4 5.1-2.1 8.2-2.1m0-4c-3.8 0-7.2.9-10.3 2.6-3.1 1.7-5.5 4.1-7.2 7.1-1.8 3-2.6 6.4-2.6 10.1 0 3.7.9 7.1 2.6 10.1 1.8 3 4.2 5.4 7.2 7.1 3.1 1.7 6.5 2.6 10.3 2.6s7.2-.9 10.3-2.6 5.5-4.1 7.2-7.1c1.8-3 2.6-6.4 2.6-10.1 0-3.7-.9-7.1-2.6-10.1-1.8-3-4.2-5.4-7.2-7.1-3.1-1.8-6.5-2.6-10.3-2.6zm71.1 4c3.1 0 5.8.7 8.3 2.1 2.5 1.4 4.3 3.2 5.7 5.6 1.4 2.4 2.1 5.1 2.1 8.1s-.7 5.7-2.1 8.1c-1.4 2.4-3.3 4.3-5.8 5.6-2.5 1.4-5.2 2.1-8.3 2.1-3.1 0-5.8-.7-8.3-2.1s-4.3-3.2-5.7-5.6c-1.4-2.4-2.1-5.1-2.1-8.1s.7-5.7 2.1-8.1c1.4-2.4 3.3-4.3 5.8-5.6 2.4-1.4 5.2-2.1 8.3-2.1m0-4c-3.8 0-7.2.9-10.3 2.6-3.1 1.7-5.5 4.1-7.2 7.1-1.8 3-2.6 6.4-2.6 10.1 0 3.7.9 7.1 2.6 10.1 1.8 3 4.2 5.4 7.2 7.1 3.1 1.7 6.5 2.6 10.3 2.6s7.2-.9 10.3-2.6c3.1-1.7 5.5-4.1 7.2-7.1 1.8-3 2.6-6.4 2.6-10.1 0-3.7-.9-7.1-2.6-10.1-1.8-3-4.2-5.4-7.2-7.1-3.1-1.8-6.5-2.6-10.3-2.6z\\"\\n            class=\\"st0\\"\\n          />\\n          <path\\n            d=\\"M29.9 53.3c-.7 0-1.3.2-1.9.5s-1 .7-1.3 1.3c-.3.5-.5 1.2-.5 1.8s.2 1.3.5 1.8.8 1 1.3 1.3c.6.3 1.2.5 1.9.5s1.3-.2 1.9-.5c.6-.3 1-.7 1.3-1.3.3-.5.5-1.2.5-1.8s-.2-1.3-.5-1.8-.8-1-1.3-1.3c-.6-.3-1.2-.5-1.9-.5zm71.1 0c-.7 0-1.3.2-1.9.5s-1 .7-1.3 1.3c-.3.5-.5 1.2-.5 1.8s.2 1.3.5 1.8.8 1 1.3 1.3c.6.3 1.2.5 1.9.5s1.3-.2 1.9-.5 1-.7 1.3-1.3c.3-.5.5-1.2.5-1.8s-.2-1.3-.5-1.8-.8-1-1.3-1.3c-.6-.3-1.2-.5-1.9-.5z\\"\\n            class=\\"st0\\"\\n          />\\n          <path\\n            d=\\"M73.4 26.9v59m-28.2-59H100\\"\\n            style=\\"fill:none;stroke:#ef4444;stroke-width:4;stroke-miterlimit:10\\"\\n          />\\n          <path\\n            d=\\"M42.2 89.6v4.8c9.1 5.6 19.8 8.9 31.3 8.9s22.2-3.3 31.3-8.9v-4.8c-8.9 6.1-19.7 9.6-31.3 9.6s-22.4-3.5-31.3-9.6zM156.7 79c-1.4 0-2.5-.4-3.3-1.2-.7-.8-1.1-1.9-1.1-3.2v-28H146v-3.4h4.1c1 0 1.6-.2 2-.6.4-.4.5-1.1.5-2.1v-7.3h3.6v10h8.1v3.4h-8.1v29h7.6V79h-7.1zM184.7 79.8c-2.4 0-4.5-.4-6.5-1.3-1.9-.8-3.6-2.1-5-3.7s-2.4-3.6-3.1-5.9c-.7-2.3-1.1-5-1.1-7.9s.4-5.6 1.1-7.9c.7-2.3 1.8-4.3 3.1-5.9 1.4-1.6 3-2.8 4.9-3.7 1.9-.9 4.1-1.3 6.4-1.3 2.3 0 4.4.4 6.2 1.3 1.9.9 3.5 2.1 4.8 3.6 1.3 1.5 2.3 3.4 3 5.6.7 2.2 1.1 4.6 1.1 7.2v1.9h-26.5v1.8c0 1.9.3 3.6.8 5.1.5 1.6 1.3 2.9 2.3 4 1 1.1 2.2 2 3.7 2.6 1.4.6 3.1.9 4.9.9 5.2 0 8.8-2.4 10.9-7.2l2.9 1.9c-1.1 2.6-2.9 4.8-5.3 6.3-2.2 1.9-5.2 2.6-8.6 2.6zm0-34c-1.7 0-3.3.3-4.7.9-1.4.6-2.6 1.5-3.6 2.6s-1.8 2.5-2.3 4c-.5 1.6-.8 3.3-.8 5.1v.3h22.2v-.6c0-1.9-.3-3.6-.8-5.1-.5-1.6-1.2-2.9-2.2-4-1-1.1-2.1-1.9-3.4-2.5-1.4-.4-2.8-.7-4.4-.7zM202.7 79 216 60.9l-12.8-17.8h4.7l10.2 14.6h.2l10.4-14.6h4.5l-12.7 17.5L233.6 79h-4.7l-10.6-15.1h-.1l-11 15.1h-4.5zM246.3 79c-1.4 0-2.5-.4-3.3-1.2-.7-.8-1.1-1.9-1.1-3.2v-28h-6.2v-3.4h4.1c1 0 1.6-.2 2-.6.4-.4.5-1.1.5-2.1v-7.3h3.6v10h8.1v3.4h-8.1v29h7.6V79h-7.2zM289.4 79.8c-2.4 0-4.5-.4-6.4-1.3-1.9-.8-3.5-2.1-4.9-3.7-1.4-1.6-2.4-3.6-3.2-5.9-.7-2.3-1.1-5-1.1-7.9s.4-5.6 1.1-7.9c.7-2.3 1.8-4.3 3.2-5.9 1.4-1.6 3-2.8 4.9-3.7 1.9-.9 4.1-1.3 6.4-1.3s4.5.4 6.4 1.3c1.9.9 3.5 2.1 4.9 3.7 1.4 1.6 2.4 3.6 3.2 5.9.7 2.3 1.1 4.9 1.1 7.9s-.4 5.6-1.1 7.9c-.7 2.3-1.8 4.3-3.2 5.9-1.4 1.6-3 2.8-4.9 3.7-1.9.9-4 1.3-6.4 1.3zm0-3.5c3.5 0 6.3-1.1 8.3-3.3 2-2.2 3-5.4 3-9.7v-4.5c0-4.2-1-7.4-3-9.6-2-2.2-4.8-3.3-8.3-3.3s-6.3 1.1-8.3 3.3c-2 2.2-3 5.4-3 9.7v4.5c0 4.2 1 7.4 3 9.6 2 2.2 4.8 3.3 8.3 3.3zM313.4 79V43.2h4v6.4h.3c.7-1.7 1.9-3.2 3.6-4.5 1.7-1.3 4.1-2 7.1-2h2.4V47h-3.1c-3 0-5.4.7-7.4 2-1.9 1.3-2.9 3.1-2.9 5.5V79h-4zM349 79.8c-4.9 0-8.8-1.6-11.4-4.9-2.7-3.3-4-7.9-4-13.9s1.3-10.6 4-13.9c2.7-3.3 6.5-4.9 11.4-4.9 3.3 0 6 .7 8 2.2 2.1 1.4 3.6 3.4 4.7 5.7l-3.4 1.7c-.8-2-2-3.5-3.5-4.5s-3.5-1.5-5.8-1.5c-3.6 0-6.4 1.2-8.3 3.5-1.9 2.3-2.9 5.4-2.9 9.2v5c0 3.8 1 6.8 2.9 9.2 1.9 2.3 4.7 3.5 8.3 3.5 2.5 0 4.5-.5 6.2-1.6 1.7-1.1 3-2.6 4.1-4.6l2.9 2c-1.2 2.4-2.8 4.3-5 5.7s-4.9 2.1-8.2 2.1zM369.4 27.2h4v21.6h.2c.8-1.9 2-3.4 3.7-4.7 1.7-1.2 4-1.9 6.9-1.9 3.8 0 6.8 1.2 8.9 3.5 2.1 2.4 3.2 5.7 3.2 10.1v23h-4V56.7c0-3.6-.8-6.3-2.3-8.1-1.6-1.8-3.8-2.7-6.8-2.7-1.3 0-2.5.2-3.6.5-1.2.3-2.2.8-3.1 1.5-.9.7-1.6 1.5-2.2 2.5-.5 1-.8 2.2-.8 3.5V79h-4V27.2zM419.9 79.8c-2.4 0-4.5-.4-6.5-1.3s-3.6-2.1-5-3.7-2.4-3.6-3.2-5.9c-.7-2.3-1.1-5-1.1-7.9s.4-5.6 1.1-7.9 1.8-4.3 3.2-5.9c1.4-1.6 3-2.8 4.9-3.7 1.9-.9 4.1-1.3 6.4-1.3 2.3 0 4.4.4 6.2 1.3 1.9.9 3.5 2.1 4.8 3.6 1.3 1.5 2.3 3.4 3 5.6.7 2.2 1.1 4.6 1.1 7.2v1.9h-26.5v1.8c0 1.9.3 3.6.8 5.1s1.3 2.9 2.3 4c1 1.1 2.2 2 3.7 2.6 1.4.6 3.1.9 4.9.9 5.2 0 8.8-2.4 10.8-7.2l2.9 1.9c-1.1 2.6-2.9 4.8-5.3 6.3-2.2 1.9-5.1 2.6-8.5 2.6zm-.1-34c-1.7 0-3.3.3-4.7.9-1.4.6-2.6 1.5-3.6 2.6s-1.8 2.5-2.3 4c-.5 1.6-.8 3.3-.8 5.1v.3h22.2v-.6c0-1.9-.3-3.6-.8-5.1-.5-1.6-1.2-2.9-2.2-4-1-1.1-2.1-1.9-3.4-2.5-1.4-.4-2.8-.7-4.4-.7zM453.5 79.8c-3.1 0-5.8-.6-8-1.8s-4.1-2.9-5.8-5.1l2.9-2.3c1.5 2 3.1 3.4 4.9 4.3 1.8.9 3.8 1.4 6.2 1.4 2.8 0 4.9-.6 6.4-1.8 1.5-1.2 2.2-2.8 2.2-5 0-1.9-.6-3.4-1.7-4.5s-3-1.8-5.6-2.2l-2.9-.5c-1.6-.2-3.1-.6-4.5-1.1-1.4-.5-2.5-1.1-3.5-1.9-1-.8-1.7-1.8-2.2-2.9-.5-1.1-.8-2.5-.8-4.2 0-1.7.3-3.1.9-4.4.6-1.3 1.5-2.3 2.6-3.2 1.1-.8 2.4-1.5 3.9-1.9 1.5-.4 3.1-.6 4.8-.6 3 0 5.4.5 7.3 1.5 1.9 1 3.5 2.4 4.9 4l-2.7 2.4c-.9-1.1-2.2-2.2-3.7-3.1-1.6-1-3.6-1.4-6.1-1.4-2.6 0-4.6.6-6 1.7-1.4 1.1-2.1 2.7-2.1 4.8 0 2.1.6 3.6 1.9 4.6 1.3.9 3.2 1.6 5.8 2l2.9.4c3.6.6 6.3 1.6 8.1 3.3 1.8 1.6 2.6 3.9 2.6 6.8 0 3.4-1.1 6-3.4 7.8-2.3 2-5.4 2.9-9.3 2.9zM480.8 79c-1.4 0-2.5-.4-3.3-1.2-.7-.8-1.1-1.9-1.1-3.2v-28h-6.2v-3.4h4.1c1 0 1.6-.2 2-.6.3-.4.5-1.1.5-2.1v-7.3h3.6v10h8.1v3.4h-8.1v29h7.6V79h-7.2zM496.4 79V43.2h4v6.4h.3c.7-1.7 1.9-3.2 3.6-4.5 1.7-1.3 4.1-2 7.1-2h2.4V47h-3.2c-3 0-5.4.7-7.3 2-1.9 1.3-2.9 3.1-2.9 5.5V79h-4zM544.1 79c-1.5 0-2.7-.4-3.4-1.2-.7-.8-1.1-1.9-1.2-3.2v-1.3h-.3c-.8 2-2.1 3.6-3.9 4.8s-4.1 1.8-6.9 1.8c-3.8 0-6.7-.9-8.8-2.8-2.1-1.8-3.1-4.5-3.1-7.8 0-3.2 1.1-5.7 3.4-7.6 2.3-1.9 6-2.8 11.2-2.8h8.3v-4.2c0-5.9-3.1-8.9-9.2-8.9-2.4 0-4.4.5-6 1.5-1.6 1-2.9 2.4-3.8 4.3l-2.5-2.1c1-2.1 2.5-3.8 4.5-5.1 2-1.3 4.7-2 7.9-2 4.2 0 7.4 1.1 9.7 3.2 2.2 2.1 3.4 5.1 3.4 8.8v21.3h4.8V79h-4.1zm-15.2-2.6c1.4 0 2.8-.2 4.1-.6 1.3-.4 2.4-.9 3.3-1.6 1-.7 1.7-1.5 2.2-2.5.5-1 .8-2.1.8-3.3v-6.7H531c-3.6 0-6.2.6-7.8 1.7-1.6 1.1-2.4 2.7-2.4 4.7V70c0 2.1.7 3.7 2.2 4.8 1.5 1.1 3.5 1.6 5.9 1.6zM560.9 79c-1.4 0-2.5-.4-3.3-1.2-.7-.8-1.1-1.9-1.1-3.2v-28h-6.2v-3.4h4.1c1 0 1.6-.2 2-.6.3-.4.5-1.1.5-2.1v-7.3h3.6v10h8.1v3.4h-8.1v29h7.6V79h-7.2zM588.9 79.8c-2.4 0-4.5-.4-6.4-1.3-1.9-.8-3.5-2.1-4.9-3.7-1.4-1.6-2.4-3.6-3.2-5.9-.7-2.3-1.1-5-1.1-7.9s.4-5.6 1.1-7.9c.7-2.3 1.8-4.3 3.2-5.9 1.4-1.6 3-2.8 4.9-3.7 1.9-.9 4.1-1.3 6.4-1.3s4.5.4 6.4 1.3c1.9.9 3.5 2.1 4.9 3.7 1.4 1.6 2.4 3.6 3.2 5.9.7 2.3 1.1 4.9 1.1 7.9s-.4 5.6-1.1 7.9c-.7 2.3-1.8 4.3-3.2 5.9-1.4 1.6-3 2.8-4.9 3.7-1.9.9-4 1.3-6.4 1.3zm0-3.5c3.5 0 6.3-1.1 8.3-3.3s3-5.4 3-9.7v-4.5c0-4.2-1-7.4-3-9.6-2-2.2-4.8-3.3-8.3-3.3s-6.3 1.1-8.3 3.3c-2 2.2-3 5.4-3 9.7v4.5c0 4.2 1 7.4 3 9.6 2 2.2 4.8 3.3 8.3 3.3zM612.9 79V43.2h4v6.4h.3c.7-1.7 1.9-3.2 3.6-4.5 1.7-1.3 4.1-2 7.1-2h2.4V47h-3.2c-3 0-5.4.7-7.3 2-1.9 1.3-2.9 3.1-2.9 5.5V79h-4z\\"\\n            class=\\"st0\\"\\n          />\\n        </svg>\\n      </Button>\\n    </div>\\n\\n    <slot />\\n  </KitDocsLayout>\\n</KitDocs>\\n\\n<style>\\n  :global(:root) {\\n    --kd-color-brand-rgb: 233, 127, 6;\\n  }\\n\\n  :global(:root.dark) {\\n    --kd-color-brand-rgb: 213, 149, 76;\\n  }\\n\\n  .logo :global(a) {\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n  }\\n\\n  .logo :global(svg) {\\n    height: 36px;\\n    overflow: hidden;\\n  }\\n\\n  .search {\\n    /* width: 90vw; */\\n    max-width: 600px;\\n    width: 100%;\\n    border-radius: 0.5rem;\\n    overflow: hidden;\\n    border: 1px solid rgb(var(--kd-color-soft));\\n\\n    & input {\\n      width: 100%;\\n      padding: 1ch 1.5rem;\\n      color: rgb(var(--kd-color-soft) / var(--tw-text-opacity));\\n      font: inherit;\\n      outline: none;\\n    }\\n  }\\n\\n  .results {\\n    position: fixed;\\n    max-height: max(300px, 60vh);\\n    max-width: 40vw;\\n    padding: 1.5rem;\\n    backdrop-filter: blur(5px);\\n    background-color: rgb(var(--kd-color-body) / 0.85);\\n    color: rgb(var(--kd-color-inverse));\\n    overflow-y: auto;\\n    scrollbar-width: thin;\\n    border-radius: 1.25rem;\\n    border: rgb(var(--kd-color-inverse) / 0.5) solid 2px;\\n    box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.4);\\n    left: var(--results-x);\\n    top: var(--results-y);\\n    z-index: 30;\\n    @media (width < 992px) {\\n      max-width: 95vw;\\n      max-height: 75vh;\\n      left: 2.5vw;\\n    }\\n\\n    & ul {\\n      display: grid;\\n      gap: 1rem;\\n      padding: 0px;\\n      margin: 0px;\\n      list-style: none;\\n\\n      & a {\\n        color: rgb(var(--kd-color-inverse));\\n        border-bottom: none;\\n        font-weight: bold;\\n      }\\n\\n      & a:hover {\\n        border-bottom: 1px solid rgb(var(--kd-color-brand));\\n      }\\n\\n      & li:not(:last-child) {\\n        padding-block: 0rem 0.5rem;\\n        border-bottom: 1px solid rgb(var(--kd-color-brand));\\n      }\\n    }\\n  }\\n</style>\\n"],"names":[],"mappings":"AAwKU,KAAO,CACb,oBAAoB,CAAE,WACxB,CAEQ,UAAY,CAClB,oBAAoB,CAAE,YACxB,CAEA,oBAAK,CAAS,CAAG,CACf,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MACnB,CAEA,oBAAK,CAAS,GAAK,CACjB,MAAM,CAAE,IAAI,CACZ,QAAQ,CAAE,MACZ,CAEA,sBAAQ,CAEN,SAAS,CAAE,KAAK,CAChB,KAAK,CAAE,IAAI,CACX,aAAa,CAAE,MAAM,CACrB,QAAQ,CAAE,MAAM,CAChB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,IAAI,eAAe,CAAC,CAAC,CAE3C,CAAC,CAAC,KAAK,CAAC;AACZ,MAAM,OAAO,IAAI;AACjB,MAAM,SAAS,GAAG,CAAC,MAAM;AACzB,MAAM,OAAO,IAAI,IAAI,eAAe,CAAC,CAAC,CAAC,CAAC,IAAI,iBAAiB,CAAC,CAAC;AAC/D,MAAM,MAAM,OAAO;AACnB,MAAM,SAAS,IAAI;AACnB,KACE,CAEA,uBAAS,CACP,QAAQ,CAAE,KAAK,CACf,UAAU,CAAE,IAAI,KAAK,CAAC,CAAC,IAAI,CAAC,CAC5B,SAAS,CAAE,IAAI,CACf,OAAO,CAAE,MAAM,CACf,eAAe,CAAE,KAAK,GAAG,CAAC,CAC1B,gBAAgB,CAAE,IAAI,IAAI,eAAe,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAClD,KAAK,CAAE,IAAI,IAAI,kBAAkB,CAAC,CAAC,CACnC,UAAU,CAAE,IAAI,CAChB,eAAe,CAAE,IAAI,CACrB,aAAa,CAAE,OAAO,CACtB,MAAM,CAAE,IAAI,IAAI,kBAAkB,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,KAAK,CAAC,GAAG,CACpD,UAAU,CAAE,GAAG,CAAC,GAAG,CAAC,IAAI,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAC/C,IAAI,CAAE,IAAI,WAAW,CAAC,CACtB,GAAG,CAAE,IAAI,WAAW,CAAC,CACrB,OAAO,CAAE,EAAE,CACX,OAAO,CAAC,KAAK,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC;AAC3B,MAAM,WAAW,IAAI;AACrB,MAAM,YAAY,IAAI;AACtB,MAAM,MAAM,KAAK;AACjB,KAAK,CAED,CAAC,CAAC,EAAE,CAAC;AACT,MAAM,SAAS,IAAI;AACnB,MAAM,KAAK,IAAI;AACf,MAAM,SAAS,GAAG;AAClB,MAAM,QAAQ,GAAG;AACjB,MAAM,YAAY,IAAI;;AAEtB,MAAM,CAAC,CAAC,CAAC,CAAC;AACV,QAAQ,OAAO,IAAI,IAAI,kBAAkB,CAAC,CAAC;AAC3C,QAAQ,eAAe,IAAI;AAC3B,QAAQ,aAAa,IAAI;AACzB;;AAEA,MAAM,CAAC,CAAC,CAAC,MAAM,CAAC;AAChB,QAAQ,eAAe,GAAG,CAAC,KAAK,CAAC,IAAI,IAAI,gBAAgB,CAAC,CAAC;AAC3D;;AAEA,MAAM,CAAC,CAAC,EAAE,KAAK,WAAW,CAAC,CAAC;AAC5B,QAAQ,eAAe,IAAI,CAAC,MAAM;AAClC,QAAQ,eAAe,GAAG,CAAC,KAAK,CAAC,IAAI,IAAI,gBAAgB,CAAC,CAAC;AAC3D;AACA,KACE"}'
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let meta;
  let sidebar;
  let category;
  let title;
  let description;
  let $activeCategory, $$unsubscribe_activeCategory;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  let inputSearch;
  const navbar = {
    links: [
      {
        title: "Oto Website",
        slug: "https://oto.software",
        match: /\/docs/
      },
      {
        title: "Documentation",
        slug: "/docs",
        match: /\/docs/
      }
    ]
  };
  const { activeCategory } = createSidebarContext(sidebar);
  $$unsubscribe_activeCategory = subscribe(activeCategory, (value) => $activeCategory = value);
  let searchTerm = "";
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$result.css.add(css);
  ({ meta, sidebar } = data);
  category = $activeCategory ? `${$activeCategory}: ` : "";
  title = meta ? `${category}${meta.title} | Oto Documentation` : null;
  description = meta?.description;
  $$unsubscribe_activeCategory();
  $$unsubscribe_page();
  return ` ${$$result.head += `<!-- HEAD_svelte-3cm5o9_START -->${title ? `${$$result.title = `<title>${escape(title)}</title>`, ""}` : ``} ${description ? `<meta name="description"${add_attribute("content", description, 0)}>` : ``}<!-- HEAD_svelte-3cm5o9_END -->`, ""} ${validate_component(KitDocs, "KitDocs").$$render($$result, { meta }, {}, {
    default: () => {
      return `${validate_component(KitDocsLayout, "KitDocsLayout").$$render($$result, { navbar, sidebar, search: true }, {}, {
        "navbar-left": () => {
          return `<div class="logo svelte-1vc8102" slot="navbar-left">${validate_component(Button, "Button").$$render(
            $$result,
            {
              href: $page.url.hostname.includes("documentation.oto") ? "https://oto.software" : "/"
            },
            {},
            {
              default: () => {
                return `<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" id="Calque_1" x="0" y="0" style="enable-background:new 0 0 650 139" version="1.1" viewBox="0 0 650 139"><style>.st0 {
              fill: #ef4444;
            }
          </style><path d="M37.9 41.1c3.1 0 5.8.7 8.3 2.1 2.5 1.4 4.3 3.2 5.7 5.6 1.4 2.4 2.1 5.1 2.1 8.1s-.6 5.7-2 8.1c-1.4 2.4-3.3 4.3-5.8 5.6-2.5 1.4-5.2 2.1-8.3 2.1s-5.8-.7-8.3-2.1-4.3-3.2-5.7-5.6c-1.4-2.4-2.1-5.1-2.1-8.1s.7-5.7 2.1-8.1c1.4-2.4 3.3-4.3 5.8-5.6 2.4-1.4 5.1-2.1 8.2-2.1m0-4c-3.8 0-7.2.9-10.3 2.6-3.1 1.7-5.5 4.1-7.2 7.1-1.8 3-2.6 6.4-2.6 10.1 0 3.7.9 7.1 2.6 10.1 1.8 3 4.2 5.4 7.2 7.1 3.1 1.7 6.5 2.6 10.3 2.6s7.2-.9 10.3-2.6 5.5-4.1 7.2-7.1c1.8-3 2.6-6.4 2.6-10.1 0-3.7-.9-7.1-2.6-10.1-1.8-3-4.2-5.4-7.2-7.1-3.1-1.8-6.5-2.6-10.3-2.6zm71.1 4c3.1 0 5.8.7 8.3 2.1 2.5 1.4 4.3 3.2 5.7 5.6 1.4 2.4 2.1 5.1 2.1 8.1s-.7 5.7-2.1 8.1c-1.4 2.4-3.3 4.3-5.8 5.6-2.5 1.4-5.2 2.1-8.3 2.1-3.1 0-5.8-.7-8.3-2.1s-4.3-3.2-5.7-5.6c-1.4-2.4-2.1-5.1-2.1-8.1s.7-5.7 2.1-8.1c1.4-2.4 3.3-4.3 5.8-5.6 2.4-1.4 5.2-2.1 8.3-2.1m0-4c-3.8 0-7.2.9-10.3 2.6-3.1 1.7-5.5 4.1-7.2 7.1-1.8 3-2.6 6.4-2.6 10.1 0 3.7.9 7.1 2.6 10.1 1.8 3 4.2 5.4 7.2 7.1 3.1 1.7 6.5 2.6 10.3 2.6s7.2-.9 10.3-2.6c3.1-1.7 5.5-4.1 7.2-7.1 1.8-3 2.6-6.4 2.6-10.1 0-3.7-.9-7.1-2.6-10.1-1.8-3-4.2-5.4-7.2-7.1-3.1-1.8-6.5-2.6-10.3-2.6z" class="st0"></path><path d="M29.9 53.3c-.7 0-1.3.2-1.9.5s-1 .7-1.3 1.3c-.3.5-.5 1.2-.5 1.8s.2 1.3.5 1.8.8 1 1.3 1.3c.6.3 1.2.5 1.9.5s1.3-.2 1.9-.5c.6-.3 1-.7 1.3-1.3.3-.5.5-1.2.5-1.8s-.2-1.3-.5-1.8-.8-1-1.3-1.3c-.6-.3-1.2-.5-1.9-.5zm71.1 0c-.7 0-1.3.2-1.9.5s-1 .7-1.3 1.3c-.3.5-.5 1.2-.5 1.8s.2 1.3.5 1.8.8 1 1.3 1.3c.6.3 1.2.5 1.9.5s1.3-.2 1.9-.5 1-.7 1.3-1.3c.3-.5.5-1.2.5-1.8s-.2-1.3-.5-1.8-.8-1-1.3-1.3c-.6-.3-1.2-.5-1.9-.5z" class="st0"></path><path d="M73.4 26.9v59m-28.2-59H100" style="fill:none;stroke:#ef4444;stroke-width:4;stroke-miterlimit:10"></path><path d="M42.2 89.6v4.8c9.1 5.6 19.8 8.9 31.3 8.9s22.2-3.3 31.3-8.9v-4.8c-8.9 6.1-19.7 9.6-31.3 9.6s-22.4-3.5-31.3-9.6zM156.7 79c-1.4 0-2.5-.4-3.3-1.2-.7-.8-1.1-1.9-1.1-3.2v-28H146v-3.4h4.1c1 0 1.6-.2 2-.6.4-.4.5-1.1.5-2.1v-7.3h3.6v10h8.1v3.4h-8.1v29h7.6V79h-7.1zM184.7 79.8c-2.4 0-4.5-.4-6.5-1.3-1.9-.8-3.6-2.1-5-3.7s-2.4-3.6-3.1-5.9c-.7-2.3-1.1-5-1.1-7.9s.4-5.6 1.1-7.9c.7-2.3 1.8-4.3 3.1-5.9 1.4-1.6 3-2.8 4.9-3.7 1.9-.9 4.1-1.3 6.4-1.3 2.3 0 4.4.4 6.2 1.3 1.9.9 3.5 2.1 4.8 3.6 1.3 1.5 2.3 3.4 3 5.6.7 2.2 1.1 4.6 1.1 7.2v1.9h-26.5v1.8c0 1.9.3 3.6.8 5.1.5 1.6 1.3 2.9 2.3 4 1 1.1 2.2 2 3.7 2.6 1.4.6 3.1.9 4.9.9 5.2 0 8.8-2.4 10.9-7.2l2.9 1.9c-1.1 2.6-2.9 4.8-5.3 6.3-2.2 1.9-5.2 2.6-8.6 2.6zm0-34c-1.7 0-3.3.3-4.7.9-1.4.6-2.6 1.5-3.6 2.6s-1.8 2.5-2.3 4c-.5 1.6-.8 3.3-.8 5.1v.3h22.2v-.6c0-1.9-.3-3.6-.8-5.1-.5-1.6-1.2-2.9-2.2-4-1-1.1-2.1-1.9-3.4-2.5-1.4-.4-2.8-.7-4.4-.7zM202.7 79 216 60.9l-12.8-17.8h4.7l10.2 14.6h.2l10.4-14.6h4.5l-12.7 17.5L233.6 79h-4.7l-10.6-15.1h-.1l-11 15.1h-4.5zM246.3 79c-1.4 0-2.5-.4-3.3-1.2-.7-.8-1.1-1.9-1.1-3.2v-28h-6.2v-3.4h4.1c1 0 1.6-.2 2-.6.4-.4.5-1.1.5-2.1v-7.3h3.6v10h8.1v3.4h-8.1v29h7.6V79h-7.2zM289.4 79.8c-2.4 0-4.5-.4-6.4-1.3-1.9-.8-3.5-2.1-4.9-3.7-1.4-1.6-2.4-3.6-3.2-5.9-.7-2.3-1.1-5-1.1-7.9s.4-5.6 1.1-7.9c.7-2.3 1.8-4.3 3.2-5.9 1.4-1.6 3-2.8 4.9-3.7 1.9-.9 4.1-1.3 6.4-1.3s4.5.4 6.4 1.3c1.9.9 3.5 2.1 4.9 3.7 1.4 1.6 2.4 3.6 3.2 5.9.7 2.3 1.1 4.9 1.1 7.9s-.4 5.6-1.1 7.9c-.7 2.3-1.8 4.3-3.2 5.9-1.4 1.6-3 2.8-4.9 3.7-1.9.9-4 1.3-6.4 1.3zm0-3.5c3.5 0 6.3-1.1 8.3-3.3 2-2.2 3-5.4 3-9.7v-4.5c0-4.2-1-7.4-3-9.6-2-2.2-4.8-3.3-8.3-3.3s-6.3 1.1-8.3 3.3c-2 2.2-3 5.4-3 9.7v4.5c0 4.2 1 7.4 3 9.6 2 2.2 4.8 3.3 8.3 3.3zM313.4 79V43.2h4v6.4h.3c.7-1.7 1.9-3.2 3.6-4.5 1.7-1.3 4.1-2 7.1-2h2.4V47h-3.1c-3 0-5.4.7-7.4 2-1.9 1.3-2.9 3.1-2.9 5.5V79h-4zM349 79.8c-4.9 0-8.8-1.6-11.4-4.9-2.7-3.3-4-7.9-4-13.9s1.3-10.6 4-13.9c2.7-3.3 6.5-4.9 11.4-4.9 3.3 0 6 .7 8 2.2 2.1 1.4 3.6 3.4 4.7 5.7l-3.4 1.7c-.8-2-2-3.5-3.5-4.5s-3.5-1.5-5.8-1.5c-3.6 0-6.4 1.2-8.3 3.5-1.9 2.3-2.9 5.4-2.9 9.2v5c0 3.8 1 6.8 2.9 9.2 1.9 2.3 4.7 3.5 8.3 3.5 2.5 0 4.5-.5 6.2-1.6 1.7-1.1 3-2.6 4.1-4.6l2.9 2c-1.2 2.4-2.8 4.3-5 5.7s-4.9 2.1-8.2 2.1zM369.4 27.2h4v21.6h.2c.8-1.9 2-3.4 3.7-4.7 1.7-1.2 4-1.9 6.9-1.9 3.8 0 6.8 1.2 8.9 3.5 2.1 2.4 3.2 5.7 3.2 10.1v23h-4V56.7c0-3.6-.8-6.3-2.3-8.1-1.6-1.8-3.8-2.7-6.8-2.7-1.3 0-2.5.2-3.6.5-1.2.3-2.2.8-3.1 1.5-.9.7-1.6 1.5-2.2 2.5-.5 1-.8 2.2-.8 3.5V79h-4V27.2zM419.9 79.8c-2.4 0-4.5-.4-6.5-1.3s-3.6-2.1-5-3.7-2.4-3.6-3.2-5.9c-.7-2.3-1.1-5-1.1-7.9s.4-5.6 1.1-7.9 1.8-4.3 3.2-5.9c1.4-1.6 3-2.8 4.9-3.7 1.9-.9 4.1-1.3 6.4-1.3 2.3 0 4.4.4 6.2 1.3 1.9.9 3.5 2.1 4.8 3.6 1.3 1.5 2.3 3.4 3 5.6.7 2.2 1.1 4.6 1.1 7.2v1.9h-26.5v1.8c0 1.9.3 3.6.8 5.1s1.3 2.9 2.3 4c1 1.1 2.2 2 3.7 2.6 1.4.6 3.1.9 4.9.9 5.2 0 8.8-2.4 10.8-7.2l2.9 1.9c-1.1 2.6-2.9 4.8-5.3 6.3-2.2 1.9-5.1 2.6-8.5 2.6zm-.1-34c-1.7 0-3.3.3-4.7.9-1.4.6-2.6 1.5-3.6 2.6s-1.8 2.5-2.3 4c-.5 1.6-.8 3.3-.8 5.1v.3h22.2v-.6c0-1.9-.3-3.6-.8-5.1-.5-1.6-1.2-2.9-2.2-4-1-1.1-2.1-1.9-3.4-2.5-1.4-.4-2.8-.7-4.4-.7zM453.5 79.8c-3.1 0-5.8-.6-8-1.8s-4.1-2.9-5.8-5.1l2.9-2.3c1.5 2 3.1 3.4 4.9 4.3 1.8.9 3.8 1.4 6.2 1.4 2.8 0 4.9-.6 6.4-1.8 1.5-1.2 2.2-2.8 2.2-5 0-1.9-.6-3.4-1.7-4.5s-3-1.8-5.6-2.2l-2.9-.5c-1.6-.2-3.1-.6-4.5-1.1-1.4-.5-2.5-1.1-3.5-1.9-1-.8-1.7-1.8-2.2-2.9-.5-1.1-.8-2.5-.8-4.2 0-1.7.3-3.1.9-4.4.6-1.3 1.5-2.3 2.6-3.2 1.1-.8 2.4-1.5 3.9-1.9 1.5-.4 3.1-.6 4.8-.6 3 0 5.4.5 7.3 1.5 1.9 1 3.5 2.4 4.9 4l-2.7 2.4c-.9-1.1-2.2-2.2-3.7-3.1-1.6-1-3.6-1.4-6.1-1.4-2.6 0-4.6.6-6 1.7-1.4 1.1-2.1 2.7-2.1 4.8 0 2.1.6 3.6 1.9 4.6 1.3.9 3.2 1.6 5.8 2l2.9.4c3.6.6 6.3 1.6 8.1 3.3 1.8 1.6 2.6 3.9 2.6 6.8 0 3.4-1.1 6-3.4 7.8-2.3 2-5.4 2.9-9.3 2.9zM480.8 79c-1.4 0-2.5-.4-3.3-1.2-.7-.8-1.1-1.9-1.1-3.2v-28h-6.2v-3.4h4.1c1 0 1.6-.2 2-.6.3-.4.5-1.1.5-2.1v-7.3h3.6v10h8.1v3.4h-8.1v29h7.6V79h-7.2zM496.4 79V43.2h4v6.4h.3c.7-1.7 1.9-3.2 3.6-4.5 1.7-1.3 4.1-2 7.1-2h2.4V47h-3.2c-3 0-5.4.7-7.3 2-1.9 1.3-2.9 3.1-2.9 5.5V79h-4zM544.1 79c-1.5 0-2.7-.4-3.4-1.2-.7-.8-1.1-1.9-1.2-3.2v-1.3h-.3c-.8 2-2.1 3.6-3.9 4.8s-4.1 1.8-6.9 1.8c-3.8 0-6.7-.9-8.8-2.8-2.1-1.8-3.1-4.5-3.1-7.8 0-3.2 1.1-5.7 3.4-7.6 2.3-1.9 6-2.8 11.2-2.8h8.3v-4.2c0-5.9-3.1-8.9-9.2-8.9-2.4 0-4.4.5-6 1.5-1.6 1-2.9 2.4-3.8 4.3l-2.5-2.1c1-2.1 2.5-3.8 4.5-5.1 2-1.3 4.7-2 7.9-2 4.2 0 7.4 1.1 9.7 3.2 2.2 2.1 3.4 5.1 3.4 8.8v21.3h4.8V79h-4.1zm-15.2-2.6c1.4 0 2.8-.2 4.1-.6 1.3-.4 2.4-.9 3.3-1.6 1-.7 1.7-1.5 2.2-2.5.5-1 .8-2.1.8-3.3v-6.7H531c-3.6 0-6.2.6-7.8 1.7-1.6 1.1-2.4 2.7-2.4 4.7V70c0 2.1.7 3.7 2.2 4.8 1.5 1.1 3.5 1.6 5.9 1.6zM560.9 79c-1.4 0-2.5-.4-3.3-1.2-.7-.8-1.1-1.9-1.1-3.2v-28h-6.2v-3.4h4.1c1 0 1.6-.2 2-.6.3-.4.5-1.1.5-2.1v-7.3h3.6v10h8.1v3.4h-8.1v29h7.6V79h-7.2zM588.9 79.8c-2.4 0-4.5-.4-6.4-1.3-1.9-.8-3.5-2.1-4.9-3.7-1.4-1.6-2.4-3.6-3.2-5.9-.7-2.3-1.1-5-1.1-7.9s.4-5.6 1.1-7.9c.7-2.3 1.8-4.3 3.2-5.9 1.4-1.6 3-2.8 4.9-3.7 1.9-.9 4.1-1.3 6.4-1.3s4.5.4 6.4 1.3c1.9.9 3.5 2.1 4.9 3.7 1.4 1.6 2.4 3.6 3.2 5.9.7 2.3 1.1 4.9 1.1 7.9s-.4 5.6-1.1 7.9c-.7 2.3-1.8 4.3-3.2 5.9-1.4 1.6-3 2.8-4.9 3.7-1.9.9-4 1.3-6.4 1.3zm0-3.5c3.5 0 6.3-1.1 8.3-3.3s3-5.4 3-9.7v-4.5c0-4.2-1-7.4-3-9.6-2-2.2-4.8-3.3-8.3-3.3s-6.3 1.1-8.3 3.3c-2 2.2-3 5.4-3 9.7v4.5c0 4.2 1 7.4 3 9.6 2 2.2 4.8 3.3 8.3 3.3zM612.9 79V43.2h4v6.4h.3c.7-1.7 1.9-3.2 3.6-4.5 1.7-1.3 4.1-2 7.1-2h2.4V47h-3.2c-3 0-5.4.7-7.3 2-1.9 1.3-2.9 3.1-2.9 5.5V79h-4z" class="st0"></path></svg>`;
              }
            }
          )}</div>`;
        },
        search: () => {
          return `<div class="search svelte-1vc8102" slot="search"><input placeholder="Search" autocomplete="off" spellcheck="false" type="search"${add_attribute("this", inputSearch, 0)}${add_attribute("value", searchTerm, 0)}></div>`;
        },
        default: () => {
          return ` ${``} ${slots.default ? slots.default({}) : ``}`;
        }
      })}`;
    }
  })}`;
});
export {
  Layout as default
};
