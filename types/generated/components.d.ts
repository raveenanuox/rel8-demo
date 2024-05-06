import type { Schema, Attribute } from '@strapi/strapi';

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

export interface ComponentCollaboration extends Schema.Component {
  collectionName: 'components_component_collaborations';
  info: {
    displayName: 'collaboration';
    icon: 'expand';
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
  };
  attributes: {
    description: Attribute.Text;
    countTitle: Attribute.String;
    count: Attribute.Integer;
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

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'component.button': ComponentButton;
      'component.collaboration': ComponentCollaboration;
      'component.demo-field': ComponentDemoField;
      'component.faq': ComponentFaq;
      'component.grid': ComponentGrid;
      'component.growth': ComponentGrowth;
      'component.pricing': ComponentPricing;
      'component.text-box': ComponentTextBox;
    }
  }
}
