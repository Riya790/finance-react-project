// assets
import {
    AppstoreAddOutlined,
    AntDesignOutlined,
    BarcodeOutlined,
    BgColorsOutlined,
    FontSizeOutlined,
    LoadingOutlined,
    StockOutlined,
    BankOutlined,
    GoldOutlined,
    MoneyCollectOutlined,
    MonitorOutlined,
    HomeOutlined
} from '@ant-design/icons';

// icons
const icons = {
    FontSizeOutlined,
    BgColorsOutlined,
    BarcodeOutlined,
    AntDesignOutlined,
    LoadingOutlined,
    AppstoreAddOutlined,
    StockOutlined,
    BankOutlined,
    GoldOutlined,
    MoneyCollectOutlined,
    MonitorOutlined,
    HomeOutlined
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const utilities = {
    id: 'utilities',
    title: 'Investment Options',
    type: 'group',
    children: [
        {
            id: 'util-typography',
            title: 'Fixed Deposit',
            type: 'item',
            url: '/fixedDeposit',
            icon: icons.BankOutlined,
            external: true,
            target: true
        },

        {
            id: 'util-shadow',
            title: 'Mutual Fund',
            type: 'item',
            url: 'https://abhinav2512-finance-mutual-fund-yswzuk.streamlit.app/',
            icon: icons.MoneyCollectOutlined,
            external: true,
            target: true
        },
        {
            id: 'ant-icons',
            title: 'Gold',
            type: 'item',
            url: 'https://abhinav2512-finance-gold-jgrfp6.streamlit.app/',
            icon: icons.GoldOutlined,
            breadcrumbs: false,
            external: true,
            target: true
        },
        {
            id: 'ant-icons',
            title: 'Stock Treading',
            type: 'item',
            url: 'https://abhinav2512-finance-stock-xkc5nz.streamlit.app/',
            icon: icons.StockOutlined,
            breadcrumbs: false,
            external: true,
            target: true
        },
        {
            id: 'ant-icons',
            title: 'Crypto Trading',
            type: 'item',
            url: 'https://abhinav2512-finance-crypto-ggoun5.streamlit.app/',
            icon: icons.MonitorOutlined,
            breadcrumbs: false,
            external: true,
            target: true
        }

    ]
};

export default utilities;
