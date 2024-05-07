import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksBenefit extends Schema.Component {
  collectionName: 'components_blocks_benefits';
  info: {
    displayName: 'benefit';
    icon: 'layout';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    benefits: Attribute.Component<'component.text-box', true>;
    demo: Attribute.Component<'component.button'>;
  };
}

export interface BlocksExperience extends Schema.Component {
  collectionName: 'components_blocks_experiences';
  info: {
    displayName: 'experience';
    icon: 'earth';
  };
  attributes: {
    title: Attribute.RichText;
    percent: Attribute.Component<'component.growth', true>;
  };
}

export interface BlocksFavApp extends Schema.Component {
  collectionName: 'components_blocks_fav_apps';
  info: {
    displayName: 'Fav App';
    icon: 'grid';
  };
  attributes: {
    title: Attribute.String;
    subTitle: Attribute.Text;
    appImage: Attribute.Media;
  };
}

export interface BlocksForm extends Schema.Component {
  collectionName: 'components_blocks_forms';
  info: {
    displayName: 'form';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    title: Attribute.RichText;
    fields: Attribute.Component<'component.demo-field', true>;
    countryCode: Attribute.Enumeration<
      [
        '&#x002B;971',
        '&#x002B;973',
        '&#x002B;974',
        '&#x002B;966',
        '&#x002B;968'
      ]
    >;
    otherFields: Attribute.Component<'component.demo-field', true>;
    submit: Attribute.Component<'component.button'>;
  };
}

export interface BlocksPriceTag extends Schema.Component {
  collectionName: 'components_blocks_price_tags';
  info: {
    displayName: 'priceTag';
    icon: 'priceTag';
  };
  attributes: {
    title: Attribute.String;
    subTitle: Attribute.Text;
    description: Attribute.Text;
    priceSection: Attribute.Component<'component.pricing', true>;
  };
}

export interface ComponentAboutUs extends Schema.Component {
  collectionName: 'components_component_aboutuses';
  info: {
    displayName: 'AboutUs';
    icon: 'cog';
  };
  attributes: {
    userName: Attribute.String;
    role: Attribute.String;
    userImage: Attribute.Media;
    feedback: Attribute.Text;
    companyLogo: Attribute.Media;
  };
}

export interface ComponentBlog extends Schema.Component {
  collectionName: 'components_component_blogs';
  info: {
    displayName: 'blog';
    icon: 'crop';
  };
  attributes: {
    date: Attribute.String;
    image: Attribute.Media;
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface ComponentButton extends Schema.Component {
  collectionName: 'components_component_buttons';
  info: {
    displayName: 'button';
    icon: 'bold';
  };
  attributes: {
    name: Attribute.String;
    link: Attribute.String;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface ComponentCard extends Schema.Component {
  collectionName: 'components_component_cards';
  info: {
    displayName: 'Card';
    icon: 'bulletList';
  };
  attributes: {
    heading: Attribute.Component<'component.landing'>;
    image: Attribute.Media;
  };
}

export interface ComponentCollaboration extends Schema.Component {
  collectionName: 'components_component_collaborations';
  info: {
    displayName: 'collaboration';
    icon: 'expand';
    description: '';
  };
  attributes: {
    title: Attribute.RichText;
    description: Attribute.Text;
    image: Attribute.Media;
  };
}

export interface ComponentDemoField extends Schema.Component {
  collectionName: 'components_component_demo_fields';
  info: {
    displayName: 'DemoField';
    icon: 'server';
  };
  attributes: {
    placeHolder: Attribute.String;
    label: Attribute.String;
    inputType: Attribute.String;
  };
}

export interface ComponentFaq extends Schema.Component {
  collectionName: 'components_component_faqs';
  info: {
    displayName: 'FAQ';
    icon: 'discuss';
  };
  attributes: {
    question: Attribute.Text;
    answer: Attribute.Text;
    isAnsHidden: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface ComponentGrid extends Schema.Component {
  collectionName: 'components_component_grids';
  info: {
    displayName: 'Grid';
    icon: 'apps';
  };
  attributes: {
    image: Attribute.Media;
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface ComponentGrowth extends Schema.Component {
  collectionName: 'components_component_growths';
  info: {
    displayName: 'growth';
    icon: 'arrowUp';
    description: '';
  };
  attributes: {
    countTitle: Attribute.String;
    count: Attribute.Integer;
  };
}

export interface ComponentLanding extends Schema.Component {
  collectionName: 'components_component_landings';
  info: {
    displayName: 'Landing';
    icon: 'chartCircle';
  };
  attributes: {
    title: Attribute.String;
    subTitle: Attribute.Text;
    description: Attribute.Text;
  };
}

export interface ComponentNavBar extends Schema.Component {
  collectionName: 'components_component_nav_bars';
  info: {
    displayName: 'navBar';
    icon: 'database';
  };
  attributes: {
    name: Attribute.String;
    link: Attribute.String;
  };
}

export interface ComponentPricing extends Schema.Component {
  collectionName: 'components_component_pricings';
  info: {
    displayName: 'pricing';
    icon: 'priceTag';
    description: '';
  };
  attributes: {
    planTitle: Attribute.String;
    planDesc: Attribute.Text;
    planType: Attribute.String;
    isPopular: Attribute.Boolean & Attribute.DefaultTo<false>;
    features: Attribute.Component<'component.text-box', true>;
    book: Attribute.Component<'component.button'>;
  };
}

export interface ComponentTextBox extends Schema.Component {
  collectionName: 'components_component_text_boxes';
  info: {
    displayName: 'textBox';
    icon: 'file';
    description: '';
  };
  attributes: {
    feature: Attribute.Text;
  };
}

export interface SectionAi extends Schema.Component {
  collectionName: 'components_section_ais';
  info: {
    displayName: 'AI';
    icon: 'message';
  };
  attributes: {
    aiManagement: Attribute.Component<'component.landing'>;
    subTitle: Attribute.String;
    getStartedButtonLink: Attribute.Component<'component.button'>;
    aiFeaturesGrid: Attribute.Component<'component.grid', true>;
  };
}

export interface SectionCard extends Schema.Component {
  collectionName: 'components_section_cards';
  info: {
    displayName: 'Card';
    icon: 'chartCircle';
  };
  attributes: {
    employeeCard: Attribute.Component<'component.card', true>;
  };
}

export interface SectionCompanies extends Schema.Component {
  collectionName: 'components_section_companies';
  info: {
    displayName: 'Companies';
    icon: 'link';
    description: '';
  };
  attributes: {
    trustedCompanies: Attribute.Component<'component.collaboration'>;
  };
}

export interface SectionCount extends Schema.Component {
  collectionName: 'components_section_counts';
  info: {
    displayName: 'count';
    icon: 'archive';
  };
  attributes: {
    description: Attribute.Text;
    countInfo: Attribute.Component<'component.growth', true>;
  };
}

export interface SectionFoster extends Schema.Component {
  collectionName: 'components_section_fosters';
  info: {
    displayName: 'Foster';
    icon: 'globe';
  };
  attributes: {
    fosterOrgCultureSection: Attribute.Component<'component.landing'>;
    reqDemoButtonLink: Attribute.Component<'component.button'>;
    imageCarousel: Attribute.Media;
  };
}

export interface SectionGrid extends Schema.Component {
  collectionName: 'components_section_grids';
  info: {
    displayName: 'Employee Grid';
    icon: 'dashboard';
    description: '';
  };
  attributes: {
    orgAndEmployees: Attribute.Component<'component.landing'>;
    reqDemoButton: Attribute.Component<'component.button'>;
    featuresGrid: Attribute.Component<'component.grid', true>;
  };
}

export interface SectionHeader extends Schema.Component {
  collectionName: 'components_section_headers';
  info: {
    displayName: 'Header';
    icon: 'layer';
  };
  attributes: {
    logo: Attribute.Media;
    logoLink: Attribute.String;
    navItem: Attribute.Component<'component.nav-bar', true>;
    demoButton: Attribute.Component<'component.button'>;
  };
}

export interface SectionHero extends Schema.Component {
  collectionName: 'components_section_heroes';
  info: {
    displayName: 'Hero';
    icon: 'expand';
  };
  attributes: {
    HeroPage: Attribute.Component<'component.landing'>;
    link: Attribute.Component<'component.button'>;
    images: Attribute.Media;
  };
}

export interface SectionPackage extends Schema.Component {
  collectionName: 'components_section_packages';
  info: {
    displayName: 'package';
    icon: 'cog';
  };
  attributes: {
    heading: Attribute.RichText;
    spanHeading: Attribute.Text;
    pages: Attribute.Component<'component.grid', true>;
  };
}

export interface SectionPayroll extends Schema.Component {
  collectionName: 'components_section_payrolls';
  info: {
    displayName: 'Payroll';
    icon: 'file';
  };
  attributes: {
    payrollTitle: Attribute.RichText;
    description: Attribute.Text;
    reqDemoButtonLink: Attribute.Component<'component.button'>;
    payrollGrid: Attribute.Component<'component.grid', true>;
  };
}

export interface SectionTransform extends Schema.Component {
  collectionName: 'components_section_transforms';
  info: {
    displayName: 'transform';
    icon: 'cloud';
  };
  attributes: {
    main: Attribute.Component<'component.landing'>;
    image: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.benefit': BlocksBenefit;
      'blocks.experience': BlocksExperience;
      'blocks.fav-app': BlocksFavApp;
      'blocks.form': BlocksForm;
      'blocks.price-tag': BlocksPriceTag;
      'component.about-us': ComponentAboutUs;
      'component.blog': ComponentBlog;
      'component.button': ComponentButton;
      'component.card': ComponentCard;
      'component.collaboration': ComponentCollaboration;
      'component.demo-field': ComponentDemoField;
      'component.faq': ComponentFaq;
      'component.grid': ComponentGrid;
      'component.growth': ComponentGrowth;
      'component.landing': ComponentLanding;
      'component.nav-bar': ComponentNavBar;
      'component.pricing': ComponentPricing;
      'component.text-box': ComponentTextBox;
      'section.ai': SectionAi;
      'section.card': SectionCard;
      'section.companies': SectionCompanies;
      'section.count': SectionCount;
      'section.foster': SectionFoster;
      'section.grid': SectionGrid;
      'section.header': SectionHeader;
      'section.hero': SectionHero;
      'section.package': SectionPackage;
      'section.payroll': SectionPayroll;
      'section.transform': SectionTransform;
    }
  }
}
