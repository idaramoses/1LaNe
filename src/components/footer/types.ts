export interface FooterLinkProps {
  text: string;
}

export interface FooterColumnProps {
  title: string;
  links: FooterLinkProps[];
}

export interface SubscribeFormProps {
  onSubmit: (email: string) => void;
}
