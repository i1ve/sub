import {
  Button,
  Icon,
  Navbar,
  Tabs,
  TabPane,
  Menu,
  MenuItem,
  Popup,
  OverLay,
  Cell,
  CellGroup,
  Tabbar,
  TabbarItem,
  FixedNav,
  Drag,
  ActionSheet,
  Avatar,
  Notify,
  Empty,
  Swipe,
  Dialog,
  Ellipsis,
  Form,
  FormItem,
  TextArea,
  Radio,
  RadioGroup,
  Switch,
  Popover,
  Picker,
  Checkbox,
  CheckboxGroup,
  Table,
  Toast,
  Divider,
} from '@nutui/nutui';

export default (app) => {
  app
    .use(Button)
    .use(Icon)
    .use(Navbar)
    .use(Tabs)
    .use(TabPane)
    .use(Menu)
    .use(MenuItem)
    .use(Popup)
    .use(OverLay)
    .use(Cell)
    .use(CellGroup)
    .use(Tabbar)
    .use(TabbarItem)
    .use(FixedNav)
    .use(Drag)
    .use(ActionSheet)
    .use(Avatar)
    .use(Notify)
    .use(Empty)
    .use(Swipe)
    .use(Dialog)
    .use(Ellipsis)
    .use(Form)
    .use(FormItem)
    .use(TextArea)
    .use(Radio)
    .use(RadioGroup)
    .use(Switch)
    .use(Popover)
    .use(Picker)
    .use(Checkbox)
    .use(CheckboxGroup)
    .use(Table)
    .use(Toast)
    .use(Divider);
};
