export const formFields = [
  {
    id: 1,
    type: 'text',
    name: 'username',
    label: 'User Full Name',
    minLength: 6,
    maxLength: 56,
    placeholder: 'Enter your full name',
  },
  {
    id: 26,
    type: 'number',
    name: 'gst',
    label: 'GST Number',
    required: true,
    minLength: 15,
    maxLength: 15,
    placeholder: 'Enter your GST Number',
  },
  {
    id: 2,
    type: 'email',
    name: 'email',
    label: 'User Email Address',
    required: true,
    placeholder: 'Enter your email address',
  },
  {
    id: 14,
    type: 'number',
    name: 'phone',
    label: 'User Phone Number',
    required: true,
    minLength: 10,
    maxLength: 10,
    placeholder: 'Enter your 10digit phone number',
  },
  {
    id: 15,
    type: 'text',
    name: 'upi_id',
    label: 'User UPI ID',
    required: true,
    placeholder: 'Enter your UPI ID',
  },
  {
    id: 3,
    type: 'number',
    name: 'order_number_of_quantity',
    label: 'Order Number of Quantity',
    required: true,
    placeholder: 'Enter your order number of quantity',
  },
  {
    id: 4,
    type: 'textarea',
    name: 'extra_details',
    label: 'Extra Details',
    required: true,
    placeholder: 'Enter your extra details',
  },
  // {
  //   id: 5,
  //   type: 'file',
  //   name: 'profile',
  //   label: 'Upload Image',
  // },
  {
    id: 6,
    type: 'number',
    name: 'number_of_pricing_list',
    label: 'Number of Pricing List',
    required: true,
    placeholder: 'Enter your number of pricing list',
  },
  {
    id: 7,
    type: 'number',
    name: 'number_of_received_order',
    label: 'Number of Received Order',
    required: true,
    placeholder: 'Enter your number of received order',
  },
  {
    id: 8,
    type: 'number',
    name: 'number_of_order',
    label: 'Number of Order',
    required: true,
    placeholder: 'Enter your number of order',
  },
  {
    id: 9,
    type: 'number',
    name: 'number_of_holding_payment',
    label: 'Number of Holding Payment',
    required: true,
    placeholder: 'Enter your number of holding payment',
  },
  {
    id: 10,
    type: 'number',
    name: 'number_of_received_check',
    label: 'Number of Received Check',
    required: true,
    placeholder: 'Enter your number of received check',
  },
  {
    id: 11,
    type: 'number',
    name: 'number_of_holding_order',
    label: 'Number of Holding Order',
    required: true,
    placeholder: 'Enter your number of holding order',
  },
  {
    id: 12,
    type: 'number',
    name: 'number_of_confirm_payment',
    label: 'Number of Confirm Payment',
    required: true,
    placeholder: 'Enter your number of confirm payment',
  },
  {
    id: 13,
    type: 'number',
    name: 'number_of_confirm_order',
    label: 'Number of Confirm Order',
    required: true,
    placeholder: 'Enter your number of confirm order',
  },
  {
    id: 16,
    type: 'text',
    name: 'address',
    label: 'Address',
    required: true,
    placeholder: 'Enter your address',
  },
  {
    id: 17,
    type: 'text',
    name: 'city_name',
    label: 'City Name',
    required: true,
    placeholder: 'Enter your city name', 
  },
  {
    id: 18,
    type: 'text',
    name: 'state',
    label: 'State',
    required: true,
    placeholder: 'Enter your state',
  },
  {
    id: 19,
    type: 'text',
    name: 'country',
    label: 'Country',
    required: true,
    placeholder: 'Enter your country',
  },
  {
    id: 20,
    type: 'number',
    name: 'zip_code',
    label: 'Zip code',
    required: true,
    placeholder: 'Enter your zip code',
  },
  {
    id: 21,
    type: 'text',
    name: 'payment_method',
    label: 'Payment Method',
    required: true,
    placeholder: 'Enter your payment method',
  },
  {
    id: 22,
    type: 'text',
    name: 'payment_status',
    label: 'Payment Status',
    required: true,
    placeholder: 'Enter your payment status',
  },
  {
    id: 23,
    type: 'date',
    name: 'payment_date',
    label: 'Payment Date',
    required: true,
    placeholder: 'Enter your payment date',
  },
  {
    id: 24,
    type: 'text',
    name: 'pin_code',
    label: 'Pin code',
    required: true,
    placeholder: 'Enter your pin code',
  },
  {
    id: 25,
    type: 'date',
    name: 'date',
    label: 'Date',
    required: true,
    placeholder: 'Enter your date',
  },
  {
    id: 27,
    type: 'number',
    name: 'invoice_number',
    label: 'Invoice Number',
    required: true,
    placeholder: 'Enter your invoice number',
  },
  {
    id: 28,
    type: 'number',
    name: 'invoice_amount',
    label: 'Invoice Amount',
    required: true,
    placeholder: 'Enter your invoice amount',
  },
  {
    id: 29,
    type: 'date',
    name: 'invoice_due_date',
    label: 'Invoice Due Date',
    required: true,
    placeholder: 'Enter your invoice due date',
  },
  {
    id: 30,
    type: 'number',
    name: 'invoice_due_amount',
    label: 'Invoice Due Amount',
    required: true,
    placeholder: 'Enter your invoice due amount',
  },
  {
    id: 31,
    type: 'number',
    name: 'invoice_paid_amount',
    label: 'Invoice Paid Amount',
    required: true,
    placeholder: 'Enter your invoice paid amount',
  },
  {
    id: 32,
    type: 'date',
    name: 'invoice_paid_date',
    label: 'Invoice Paid Date',
    required: true,
    placeholder: 'Enter your invoice paid date',
  },
  {
    id: 33,
    type: 'text',
    name: 'invoice_status',
    label: 'Invoice Status',
    required: true,
    placeholder: 'Enter your invoice status',
  },
  {
    id: 34,
    type: 'text',
    name: 'invoice_payment_method',
    label: 'Invoice Payment Method',
    required: true,
    placeholder: 'Enter your invoice payment method',
  },
  {
    id: 35,
    type: 'text',
    name: 'invoice_payment_status',
    label: 'Invoice Payment Status',
    required: true,
    placeholder: 'Enter your invoice payment status',
  },
  {
    id: 36,
    type: 'date',
    name: 'invoice_payment_date',
    label: 'Invoice Payment Date',
    required: true,
    placeholder: 'Enter your invoice payment date',
  },
  {
    id: 37,
    type: 'number',
    name: 'invoice_payment_amount',
    label: 'Invoice Payment Amount',
    required: true,
    placeholder: 'Enter your invoice payment amount',
  },
  {
    id: 38,
    type: 'number',
    name: 'invoice_payment_pin_code',
    label: 'Invoice Payment Pin Code',
    required: true,
    placeholder: 'Enter your invoice payment pin code',
  },
  {
    id: 39,
    type: 'text',
    name: 'invoice_payment_address',
    label: 'Invoice Payment Address',
    required: true,
    placeholder: 'Enter your invoice payment address',
  },
  {
    id: 40,
    type: 'text',
    name: 'invoice_payment_city',
    label: 'Invoice Payment City',
    required: true,
    placeholder: 'Enter your invoice payment city',
  },
  {
    id: 41,
    type: 'text',
    name: 'invoice_payment_state',
    label: 'Invoice Payment State',
    required: true,
    placeholder: 'Enter your invoice payment state',
  },
  {
    id: 42,
    type: 'text',
    name: 'invoice_payment_country',
    label: 'Invoice Payment Country',
    required: true,
    placeholder: 'Enter your invoice payment country',
  },
  {
    id: 43,
    type: 'number',
    name: 'invoice_payment_zip_code',
    label: 'Invoice Payment Zip Code',
    required: true,
    placeholder: 'Enter your invoice payment zip code',
  },
  {
    id: 44,
    type: 'text',
    name: 'invoice_payment_payment_method',
    label: 'Invoice Payment Payment Method',
    required: true,
    placeholder: 'Enter your invoice payment payment method',
  },
  {
    id: 45,
    type: 'text',
    name: 'invoice_payment_payment_status',
    label: 'Invoice Payment Payment Status',
    required: true,
    placeholder: 'Enter your invoice payment payment status',
  },
  {
    id: 46,
    type: 'date',
    name: 'invoice_payment_payment_date',
    label: 'Invoice Payment Payment Date',
    required: true,
    placeholder: 'Enter your invoice payment payment date',
  },
  {
    id: 47,
    type: 'number',
    name: 'invoice_payment_payment_amount',
    label: 'Invoice Payment Payment Amount',
    required: true,
    placeholder: 'Enter your invoice payment payment amount',
  },
  {
    id: 48,
    type: 'number',
    name: 'invoice_payment_payment_pin_code',
    label: 'Invoice Payment Payment Pin Code',
    required: true,
    placeholder: 'Enter your invoice payment payment pin code',
  },
  {
    id: 49,
    type: 'text',
    name: 'invoice_payment_payment_address',
    label: 'Invoice Payment Payment Address',
    required: true,
    placeholder: 'Enter your invoice payment payment address',
  },
  {
    id: 50,
    type: 'text',
    name: 'bank_account_name',
    label: 'Bank Account Name',
    required: true,
    placeholder: 'Enter your bank account name',
  },
  {
    id: 51,
    type: 'number',
    name: 'upi_transaction_id',
    label: 'UPI Transaction ID',
    required: true,
    placeholder: 'Enter your UPI transaction ID',
  },
  {
    id: 52,
    type: 'text',
    name: 'google_transaction_id',
    label: 'Google Transaction ID',
    required: true,
    placeholder: 'Enter your Google transaction ID',
  },
  {
    id: 53,
    type: 'text',
    name: 'paytm_transaction_id',
    label: 'PaYtm Transaction ID',
    required: true,
    placeholder: 'Enter your PaYtm transaction ID',
  },
  {
    id: 54,
    type: 'text',
    name: 'paypal_transaction_id',
    label: 'Paypal Transaction ID',
    required: true,
    placeholder: 'Enter your Paypal transaction ID',
  },
  {
    id: 55,
    type: 'text',
    name: 'bank_transaction_id',
    label: 'Bank Transaction ID',
    required: true,
    placeholder: 'Enter your Bank transaction ID',
  },
  {
    id: 56,
    type: 'text',
    name: 'phonepay_transaction_id',
    label: 'PhonePay Transaction ID',
    required: true,
    placeholder: 'Enter your PhonePay transaction ID',
  },
]
