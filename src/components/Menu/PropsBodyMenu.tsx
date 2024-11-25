type BodyMenuProps = {
  item: string;
  link?: string;
  title: string;
};

function PropsBodyMenu({ item, title, link }: BodyMenuProps) {
  return (
    <li title={title} className="items-menu">
      <a href={link}>{item}</a>
    </li>
  );
}

export default PropsBodyMenu;
