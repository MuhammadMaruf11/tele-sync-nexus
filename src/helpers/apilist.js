export const APIList = {

    // dashboard data API 
    Dashboard_Data: 'account/account/dashboardData',

    //#region User API
    User_login: '/user/local/signin',//complete
    User_signup: '/user/signup',
    organization_create: '/user/organization/create',
    User_all: '/user/get/all',//complete
    User_create: '/user/create',//complete
    User_update: '/user/',
    User_find: '/user/',
    User_delete: '/user/delete/',
    //#endregion

    //#region Employee API
    Employee_all: '/hr/employee/get/all',//complete
    Employee_create: '/hr/employee/create',//complete
    Employee_update: '/hr/employee',
    Employee_delete: '/hr/employee',
    Employee_salary: '/hr/employee/salary',
    Employee_dropdown: '/hr/employee/dropdown',//complete
    //#endregion

    //#region Designation API
    Designation_all: '/hr/designation/get/all',
    Designation_create: '/hr/designation',
    Designation_update: '/hr/designation',
    Designation_delete: '/hr/designation',
    Designation_dropdown: '/hr/designation/dropdown',
    //#endregion

    //#region Usertype API
    Usertype_all: '/user/employee/get/all',//complete
    Usertype_create: '/user/employee/create',// not complete
    Usertype_update: '/user/employee',
    Usertype_delete: '/user/employee',
    Usertype_dropdown: '/user/dropdown/userType',
    //#endregion

    //#region Bank API
    Bank_all: '/user/bank/account/get/all',//complete
    Bank_create: '/user/bank/account',//complete
    Bank_update: '/user/bank/account',//complete
    Bank_delete: '/user/bank/account',
    Bank_dropdown: '/user/bank/account/dropdown',//complete
    //#endregion

    //#region Items API
    Items_all: '/user/products/get/all',//complete
    products_all: '/user/products/get/all',//complete
    Items_create: '/user/products',//complete
    Items_update: '/user/products',//complete
    Items_delete: '/user/products',//complete
    Items_dropdown: '/user/products/dropdown/product',//complete
    Item_salerate: '/user/products/salerate',//complete
    Items_purchaserate: '/user/products/purchaserate',//complete
    products_create: '/user/products',//complete
    products_category_create: '/user/productcategory',//complete
    products_category_single: '/user/productcategory/dropdown/productCategory',//complete

    //#endregion

    //#region Ledgers API
    Ledgers_all: '/account/ledger/get/all',//complete
    Ledgers_create: '/account/ledger',//complete
    Ledgers_update: '/account/ledger',//complete
    Ledgers_delete: '/account/ledger',
    Ledgers_dropdown: '/account/ledger/dropdown',
    Ledgers_dropdown_cr: '/account/ledger/dropdown/credit',
    Ledgers_dropdown_dr: '/account/ledger/dropdown/debit',
    //#endregion

    //#region AccountingGroup API
    AccountingGroup_all: '/account/group/get/all',
    AccountingGroup_create: '/account/group/create',
    AccountingGroup_update: '/account/group',
    AccountingGroup_delete: '/account/group',
    AccountingGroup_dropdown_expense: '/account/group/dropdown/expense',
    AccountingGroup_dropdown: '/account/group/dropdown',

    //#endregion
    //#region ChartofAccount API
    ChartofAccount_all: '/account/account/chartofaccounts',
    //#endregion

    //#region Journal API
    Journal_all: '/account/manual/journals/get/all',
    Journal_create: '/account/manual/journals',
    Journal_update: '/account/manual/journals',
    Journal_delete: '/account/manual/journals',
    //#endregion

    //#region Salary API
    Salary_all: '/hr/salary/get/all',
    Salary_create: '/hr/salary',
    Salary_update: '/hr/salary',
    Salary_delete: '/hr/salary',
    //#endregion

    //#region SalesInvoice API
    SalesInvoice_all_unpaid: '/sales/invoice/get/all/unpaid',
    SalesInvoice_all_paid: '/sales/invoice/get/all/paid',
    SalesInvoice_create: '/sales/invoice',
    SalesInvoice_update: '/sales/invoice',
    SalesInvoice_delete: '/sales/invoice',
    SalesPaynowInvoice_single: '/sales/invoice/paynowinvoice',
    SalesPaynowInvoiceMultiple_create: '/sales/invoice/paynowinvoicemultiple',
    SalesEstimationInvoice_update: '/sales/invoice/converttoInvoice',
    //#endregion

    //#region Estimation API
    SalesEstimation_all: '/sales/estimation/get/all',
    SalesEstimation_create: '/sales/estimation',
    SalesEstimation_update: '/sales/estimation',
    SalesEstimation_delete: '/sales/estimation',
    //#endregion

    //#region SalesReturn API
    SalesReturn_all: '/sales/sale/return/get/all',
    SalesReturn_create: '/sales/sale/return',
    SalesReturn_update: '/sales/sale/return',
    SalesReturn_delete: '/sales/sale/return',
    //#endregion

    //#region PaymentReceived API
    PaymentReceived_all: '/sales/receipt/get/all',
    PaymentReceived_create: '/sales/receipt',
    PaymentReceived_update: '/sales/receipt',
    PaymentReceived_delete: '/sales/receipt',
    PaymentReceived_invoicepaid: '/sales/receipt/createPaymentReceipt',
    //#endregion

    //#region Customers API
    Customers_all: '/sales/customers/get/all',
    Customers_create: '/sales/customers/create',
    Customers_update: '/sales/customers',
    Customers_delete: '/sales/customers',
    Customers_dropdown: '/sales/customers/dropdown',
    Customers_dropdown_invoice: '/sales/customers/dropdown/invoice',
    //#endregion

    //#region Vendor API
    Vendor_all: '/purchase/vendors/get/all',
    Vendor_create: '/purchase/vendors',
    Vendor_update: '/purchase/vendors',
    Vendor_delete: '/purchase/vendors',
    Vendor_dropdown: '/purchase/vendors/dropdown',
    //#endregion

    //#region PurchaseInvoice API
    PurchaseInvoice_all_unpaid: '/purchase/vendor/invoice/get/all/unpaid',
    PurchaseInvoice_all_paid: '/purchase/vendor/invoice/get/all/paid',
    PurchaseInvoice_create: '/purchase/vendor/invoice',
    PurchaseInvoice_update: '/purchase/vendor/invoice',
    PurchaseInvoice_delete: '/purchase/vendor/invoice',
    PurchasePaynowInvoice_single: '/purchase/vendor/invoice/paynowinvoice',
    PurchasePaynowInvoiceMultiple_create: '/purchase/vendor/invoice/paynowinvoicemultiple',
    PurchaseOrderInvoice_update: '/purchase/vendor/invoice/converttoInvoice',
    //#endregion

    //#region PurchaseOrder API
    PurchaseOrder_all: '/purchase/purchase/order/get/all',
    PurchaseOrder_create: '/purchase/purchase/order',
    PurchaseOrder_update: '/purchase/purchase/order',
    PurchaseOrder_delete: '/purchase/purchase/order',
    //#endregion

    //#region PaymentVoucher API
    PaymentVoucher_all: '/purchase/payment/voucher/get/all',
    PaymentVoucher_create: '/purchase/payment/voucher/create',
    PaymentVoucher_update: '/purchase/payment/voucher',
    PaymentVoucher_delete: '/purchase/payment/voucher',
    PaymentmadeVoucher_create: '/purchase/payment/voucher/createpaymentmade',

    //#endregion

    //#region PurchaseReturn API
    PurchaseReturn_all: '/purchase/purchase/return/get/all',
    PurchaseReturn_create: '/purchase/purchase/return',
    PurchaseReturn_update: '/purchase/purchase/return',
    PurchaseReturn_delete: '/purchase/purchase/return',
    //#endregion

    //#region Expenses API
    Expenses_all: '/purchase/expenses/get/all',
    Expenses_create: '/purchase/expenses',
    Expenses_update: '/purchase/expenses',
    Expenses_delete: '/purchase/expenses',
    //#endregion

    //#region Modules API
    Modules_all: '/user/module/get/all',
    Modules_create: '/user/module',
    Modules_update: '/user/module',
    Modules_delete: '/user/module',
    //#endregion

    //#region Permissions API
    Permissions_all: '/user/permission/get/all',
    Permissions_create: '/user/permission',
    Permissions_update: '/user/permission',
    Permissions_delete: '/user/permission',
    //#endregion

    //#region Logs API
    Logs_loginhistory_all: '/user/log/loginHistory/get/all',
    Logs_activity_history_all: '/user/log/get/all',

    //#endregion

    //#region Statement API
    Bank_statement: '/reports/bankstatement',
    Customer_statement: '/reports/customerstatement',
    Vendor_statement: '/reports/vendorstatement',
    Account_statement: '/reports/accountstatement',
    //#endregion

    //#region Reports API
    Report_balancesheet: '/reports/balancesheet',
    Report_profitandloss: '/reports/profitandloss',
    Report_trialbalance: '/reports/trialbalance',
    //Account_statement: '/reports/bankstatement',
    //#endregion

    //#region QuickBook API
    QB_quickbookapi_auth: 'quickbook/quickauth',
    QB_quickbookapi_callback: 'quickbook/callback',
    QB_quickbookapi_refresh: 'quickbook/refresh',
    QB_quickbookapi_isauthenticated: 'quickbook/isauthenticated',

    // quickbooksapipage 

    QB_quickbookapi_create: 'quickbook/quickbooksApi/create',
    QB_quickbookapi_all: 'quickbook/quickbooksApi/get/all',
    QB_quickbookapi_update: 'quickbook/quickbooksApi',
    QB_quickbookapi_delete: 'quickbook/quickbooksApi',

    // quickbook accountant API 
    QB_accounts: '/quickbook/findAccounts',
    QB_class: '/quickbook/findclass',

    // quickbook HR API 
    QB_department: '/quickbook/findDepartment',
    QB_employee: '/quickbook/findEmployee',

    // quickbook payable page 
    QB_bill: '/quickbook/findBill',
    QB_billpayment: '/quickbook/findBillPayment',
    QB_purchaseorder: '/quickbook/findPurchaseOrder',
    QB_purchase: '/quickbook/findPurchase',
    QB_vendorcredit: '/quickbook/findVendorCredit',
    QB_vendor: '/quickbook/findVendors',

    // quickbook receivable page 
    QB_creditmemo: '/quickbook/findCreditMemos',
    QB_customer: '/quickbook/findCustomers',
    QB_deposite: '/quickbook/findDeposits',
    QB_estimate: '/quickbook/findEstimate',
    QB_invoice: '/quickbook/findInvoice',
    QB_payments: '/quickbook/findPayments',

    // quickbook receivable page 
    QB_items: '/quickbook/getItem',

    // quickbook reports page 
    QB_balancesheet: '/quickbook/reports/balancesheet',
    QB_cashflow: '/quickbook/reports/cashflow',
    QB_profitandloss: '/quickbook/reports/profitandloss',
    QB_trialbalance: '/quickbook/reports/trialbalance',


    //#endregion



    //#region Employee API
    //#endregion


};
