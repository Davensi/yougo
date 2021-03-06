import Vue from 'vue';
import 'vant/lib/button/style';
import {
    Tabbar, TabbarItem, Button, Card, SubmitBar, Checkbox,
    CheckboxGroup, Radio, RadioGroup, Stepper, NavBar, GoodsAction,
    GoodsActionButton, GoodsActionIcon, Field, Search, Skeleton, Icon,
    Swipe, SwipeItem, Grid, GridItem, Cell, CellGroup, Overlay, Popover, Dialog
    , List, PullRefresh, Lazyload, Image as VanImage, ImagePreview, Divider,
    DropdownMenu, DropdownItem, Sku, CouponCell,CouponList,SwipeCell ,Empty
    ,Uploader,Form,AddressList,AddressEdit,Cascader,Area,Notify,
} from 'vant';
 

// 全局注册
Vue.use(Notify)
Vue.use(Area);
Vue.use(AddressList);
Vue.use(Cascader);
Vue.use(AddressEdit);
Vue.use(Form);
Vue.use(Field);
Vue.use(Uploader);
Vue.use(Empty);
Vue.use(SwipeCell );
Vue.use(CouponCell);
Vue.use(CouponList);
Vue.use(Sku);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Divider);
Vue.use(ImagePreview);
Vue.use(VanImage);
Vue.use(Lazyload);
Vue.use(PullRefresh);
Vue.use(Dialog);
Vue.use(List);
Vue.use(Overlay);
Vue.use(Popover);
Vue.use(Swipe);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(SwipeItem)
Vue.use(Icon);
Vue.use(Field);
Vue.use(Skeleton);
Vue.use(Search);
Vue.use(Button)
Vue.use(NavBar)
Vue.use(Card)
Vue.use(SubmitBar);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Stepper);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);