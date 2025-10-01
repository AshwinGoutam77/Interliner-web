// heroTranslations.ts
export const heroTranslations = {
    en: [
        {
            discount: "30%",
            title: "Elegant Arabic Kandura",
            subtitle: "Sale\nOff",
            description:
                "Experience timeless tradition with a modern touch. Crafted from premium fabric, this Kandura offers unmatched comfort and style for any occasion.",
            cta: "Apply Now",
        },
        {
            discount: "25%",
            title: "On Premium Kanduras",
            subtitle: "Exclusive Offer",
            description:
                "Step into timeless elegance with our finely crafted kanduras perfect for any occasion. Experience unmatched comfort and style in every stitch.",
            cta: "Apply Now",
        },
    ],
    ar: [
        {
            discount: "٪٣٠",
            title: "كنادير عربية أنيقة",
            subtitle: "خصم\nخاص",
            description:
                "اختبر التقاليد الخالدة بلمسة عصرية. صُنعت هذه الكندورة من قماش فاخر لتمنحك راحة وأناقة لا مثيل لها في كل مناسبة.",
            cta: "تسوق الآن",
        },
        {
            discount: "٪٢٥",
            title: "على الكنادير الفاخرة",
            subtitle: "عرض حصري",
            description:
                "استمتع بالأناقة الخالدة مع كندوراتنا المصنوعة بعناية لتناسب جميع المناسبات. راحة وأناقة في كل غرزة.",
            cta: "تسوق الآن",
        },
    ],
} as const;


// promoTranslations.ts
export const promoTranslations = {
    en: [
        {
            title: "Premium Cotton Men’s Shirt",
            description: "",
            price: "$699",
            oldPrice: "$999",
            img: "/images/banner/banner-image-3.png",
        },
        {
            title: "Peach Cotton Puff Sleeve Top",
            description: "Limited time offer",
            price: "$699",
            oldPrice: "$999",
            img: "/images/banner/banner-image-4.png",
        },
    ],
    ar: [
        {
            title: "قميص رجالي قطني فاخر",
            description: "",
            price: "٦٩٩ ر.س",
            oldPrice: "٩٩٩ ر.س",
            img: "/images/banner/banner-image-3.png",
        },
        {
            title: "بلوزة قطنية بأكمام منتفخة باللون الخوخي",
            description: "عرض لفترة محدودة",
            price: "٦٩٩ ر.س",
            oldPrice: "٩٩٩ ر.س",
            img: "/images/banner/banner-image-4.png",
        },
    ],
} as const;


export const heroFeaturesTranslations = {
    en: [
        { title: "Free Shipping", description: "For all orders $200" },
        { title: "1 & 1 Returns", description: "Cancellation after 1 day" },
        { title: "100% Secure Payments", description: "Guarantee secure payments" },
        { title: "24/7 Dedicated Support", description: "Anywhere & anytime" },
    ],
    ar: [
        { title: "شحن مجاني", description: "لكل الطلبات بقيمة 200$" },
        { title: "إرجاع 1 & 1", description: "إلغاء بعد يوم واحد" },
        { title: "مدفوعات آمنة 100%", description: "ضمان المدفوعات الآمنة" },
        { title: "دعم مخصص 24/7", description: "في أي مكان و أي وقت" },
    ],
};


export const CategoryTranslations = {
    en: [
        {
            category: "Shirt",
            title: "Premium Shirt",
            link: "/categories/shirts",
            btnText: "Shop Now",
            img: "/images/banner/banner-image-3.png",
            position: "right",
            bgColor: "#DBF4F3",
        },
        {
            category: "Classic Wear",
            title: "Kandura",
            link: "/categories/shirts",
            btnText: "Shop Now",
            img: "/images/banner/banner-image-9.png",
            position: "left",
            bgColor: "#FFECE1",
        },
        {
            category: "Trousers",
            title: "High-Waist Trousers",
            link: "/categories/shirts",
            btnText: "Shop Now",
            img: "/images/banner/banner-image-5.png",
            position: "left",
            bgColor: "#FFECE1",
        },
        {
            category: "Blazer to elevate your workwear",
            title: "Tailored blazer.",
            link: "/categories/shirts",
            btnText: "Shop Now",
            img: "/images/banner/banner-image-6.png",
            position: "right",
            bgColor: "#DBF4F3",
        },
        {
            category: "Blazer to elevate your workwear",
            title: "Women Clothes",
            link: "/categories/shirts",
            btnText: "Shop Now",
            img: "/images/banner/banner-image-4.png",
            position: "right",
            bgColor: "#DBF4F3",
        },
        {
            category: "Cozy Hoodies",
            title: "T-Shirts & Hoodies",
            link: "/categories/shirts",
            btnText: "Shop Now",
            img: "/images/banner/banner-image-7.png",
            position: "left",
            bgColor: "#FFECE1",
        },
    ],
    ar: [
        {
            category: "قميص",
            title: "قميص فاخر",
            link: "/categories/shirts",
            btnText: "تسوق الآن",
            img: "/images/banner/banner-image-3.png",
            position: "right",
            bgColor: "#DBF4F3",
        },
        {
            category: "ملابس كلاسيكية",
            title: "كندورة",
            link: "/categories/shirts",
            btnText: "تسوق الآن",
            img: "/images/banner/banner-image-9.png",
            position: "left",
            bgColor: "#FFECE1",
        },
        {
            category: "سراويل",
            title: "سراويل عالية الخصر",
            link: "/categories/shirts",
            btnText: "تسوق الآن",
            img: "/images/banner/banner-image-5.png",
            position: "left",
            bgColor: "#FFECE1",
        },
        {
            category: "بليزر لرفع مستوى ملابس العمل",
            title: "بليزر مصمم.",
            link: "/categories/shirts",
            btnText: "تسوق الآن",
            img: "/images/banner/banner-image-6.png",
            position: "right",
            bgColor: "#DBF4F3",
        },
        {
            category: "بليزر لرفع مستوى ملابس العمل",
            title: "ملابس نسائية",
            link: "/categories/shirts",
            btnText: "تسوق الآن",
            img: "/images/banner/banner-image-4.png",
            position: "right",
            bgColor: "#DBF4F3",
        },
        {
            category: "هوديز دافئة",
            title: "تيشيرتات وهوديز",
            link: "/categories/shirts",
            btnText: "تسوق الآن",
            img: "/images/banner/banner-image-7.png",
            position: "left",
            bgColor: "#FFECE1",
        },
    ],
};

export const CategoryHeaderTranslations = {
    en: {
        subtitle: "Categories",
        title: "Browse by Category",
    },
    ar: {
        subtitle: "الفئات",
        title: "تصفح حسب الفئة",
    },
};


// /data/NewArrivalTranslations.js
export const NewArrivalTranslations = {
    en: {
        subtitle: "Products",
        title: "Browse Top Products",
        viewAll: "View All",
    },
    ar: {
        subtitle: "المنتجات",
        title: "تصفح المنتجات الأعلى",
        viewAll: "عرض الكل",
    },
};


// /data/TestimonialsTranslations.js
export const TestimonialsTranslations = {
    en: {
        subtitle: "Testimonials",
        title: "User Feedbacks",
    },
    ar: {
        subtitle: "آراء العملاء",
        title: "تقييمات المستخدمين",
    },
};

// /data/NewsletterTranslations.js
export const NewsletterTranslations = {
    en: {
        heading: "Don't Miss Out Latest Trends & Offers",
        description: "Register to receive news about the latest offers & discount codes",
        placeholder: "Enter your email",
        buttonText: "Subscribe",
    },
    ar: {
        heading: "لا تفوت أحدث العروض والاتجاهات",
        description: "سجل لتصلك الأخبار حول أحدث العروض ورموز الخصم",
        placeholder: "أدخل بريدك الإلكتروني",
        buttonText: "اشترك",
    },
};


// FooterTranslations.js
export const FooterTranslations = {
    en: {
        account: "Account",
        loginRegister: "Login / Register",
        cart: "Cart",
        shop: "Shop",
        quickLinks: "Quick Links",
        privacyPolicy: "Privacy Policy",
        termsOfUse: "Terms of Use",
        faqs: "FAQ’s",
        contact: "Contact",
        helpSupport: "Help & Support",
        headOffice: "Head Office: Ajman – UAE",
        phone: "+971-6-7436061 / +971-6-5556354",
        email: "liners@eim.ae",
        copyright: "All rights reserved by Interliners.",
        downloadApp: "Download App",
    },
    ar: {
        account: "الحساب",
        loginRegister: "تسجيل الدخول / التسجيل",
        cart: "عربة التسوق",
        shop: "المتجر",
        quickLinks: "روابط سريعة",
        privacyPolicy: "سياسة الخصوصية",
        termsOfUse: "شروط الاستخدام",
        faqs: "الأسئلة الشائعة",
        contact: "اتصل بنا",
        helpSupport: "المساعدة والدعم",
        headOffice: "المكتب الرئيسي: عجمان – الإمارات",
        phone: "+971-6-7436061 / +971-6-5556354",
        email: "liners@eim.ae",
        copyright: "جميع الحقوق محفوظة لشركة Interliners.",
        downloadApp: "تحميل التطبيق",
    },
};

export const FilterTranslations = {
    en: {
        filters: "Filters:",
        cleanAll: "Clean All",
        category: "Category"
    },
    ar: {
        filters: "الفلاتر:",
        cleanAll: "مسح الكل",
        category: "فئة"
    },
};

export const ContactTranslations = {
    en: {
        contactInfo: "Contact Information",
        firstName: "First Name",
        lastName: "Last Name",
        subject: "Subject",
        phone: "Phone",
        message: "Message",
        firstNamePlaceholder: "John",
        lastNamePlaceholder: "Doe",
        subjectPlaceholder: "Type your subject",
        phonePlaceholder: "Enter your phone",
        messagePlaceholder: "Type your message",
        required: "*",
        sendMessage: "Send Message",
        thankYou: "Thank You!",
        modalMessage:
            "Your message has been sent successfully. We will get back to you soon.",
        close: "Close",
        invalidPhone: "Enter a valid phone number",
        firstNameError: "First name is required",
        lastNameError: "Last name is required",
        messageError: "Message is required",
    },
    ar: {
        contactInfo: "معلومات الاتصال",
        firstName: "الاسم الأول",
        lastName: "اسم العائلة",
        subject: "الموضوع",
        phone: "رقم الهاتف",
        message: "الرسالة",
        firstNamePlaceholder: "جون",
        lastNamePlaceholder: "دو",
        subjectPlaceholder: "اكتب موضوعك",
        phonePlaceholder: "أدخل رقم هاتفك",
        messagePlaceholder: "اكتب رسالتك",
        required: "*",
        sendMessage: "إرسال الرسالة",
        thankYou: "شكراً لك!",
        modalMessage:
            "تم إرسال رسالتك بنجاح. سنعاود الاتصال بك قريباً.",
        close: "إغلاق",
        invalidPhone: "أدخل رقم هاتف صالح",
        firstNameError: "الاسم الأول مطلوب",
        lastNameError: "اسم العائلة مطلوب",
        messageError: "الرسالة مطلوبة",
    },
};

export const DashboardTranslations = {
    en: {
        welcomeSales: "Welcome Sales Team",
        welcomeUser: "Welcome User",
        startNewOrder: {
            title: "Start New Order",
            description: "Place new order",
        },
        previousOrders: {
            title: "Previous Orders",
            description: "View your order history",
        },
        trackOrders: {
            title: "Track Orders",
            description: "Monitor shipment status",
        },
        reports: {
            title: "Reports",
            description: "View sales reports",
        },
        creditInfo: {
            title: "Credit Information",
            description: "Manage payment methods",
        },
        payment: {
            title: "Payment",
            description: "Process payments",
        },
        complain: {
            title: "Complain",
            description: "Submit feedback or issues",
        },
        modal: {
            title: "Select Customer",
            searchPlaceholder: "Search Customer",
            clearAll: "Clear All",
        },
    },
    ar: {
        welcomeSales: "مرحبًا بفريق المبيعات",
        welcomeUser: "مرحبًا بالمستخدم",
        startNewOrder: {
            title: "بدء طلب جديد",
            description: "قم بإنشاء طلب جديد",
        },
        previousOrders: {
            title: "الطلبات السابقة",
            description: "عرض سجل الطلبات",
        },
        trackOrders: {
            title: "تتبع الطلبات",
            description: "مراقبة حالة الشحنة",
        },
        reports: {
            title: "التقارير",
            description: "عرض تقارير المبيعات",
        },
        creditInfo: {
            title: "معلومات الائتمان",
            description: "إدارة طرق الدفع",
        },
        payment: {
            title: "الدفع",
            description: "معالجة المدفوعات",
        },
        complain: {
            title: "شكوى",
            description: "إرسال الملاحظات أو المشاكل",
        },
        modal: {
            title: "اختر العميل",
            searchPlaceholder: "ابحث عن العميل",
            clearAll: "مسح الكل",
        },
    },
};


// translations/MenuTranslations.ts
export const MenuTranslations = {
    en: {
        dashboard: "Dashboard",
        previousOrders: "Previous Orders",
        trackOrders: "Track Orders",
        creditInformation: "Credit Information",
        payment: "Payment",
        complain: "Complain",
        profile: "Profile",
        reports: "Reports",
        logout: "Logout",
    },
    ar: {
        dashboard: "لوحة التحكم",
        previousOrders: "الطلبات السابقة",
        trackOrders: "تتبع الطلبات",
        creditInformation: "معلومات الائتمان",
        payment: "الدفع",
        complain: "شكوى",
        profile: "الملف الشخصي",
        reports: "التقارير",
        logout: "تسجيل الخروج",
    },
};

// translations/dashboardPage.ts
export const DashboardPageTranslations = {
    en: {
        previousOrders: "Previous Orders",
        moreOptions: "More Options",
        payDue: "Pay Due Payment",
        repeatOrder: "Repeat Order",
        downloadReceipt: "Download Receipt",
        complain: "Complain",
        downloadInvoice: "Download Invoice",
        support: "Support",
        confirmRepeat: "Are you sure to repeat this order?",
        raiseComplain: "Raise Complain",
        uploadFile: "Upload File",
        selectOrder: "Select Order Number",
        yourComplain: "Your Complain",
        submit: "Submit",
        selectCustomer: "Select Customer",
        searchCustomer: "Search Customer",
        clearAll: "Clear All",
        customerName: "Customer Name",
        orderDate: "Order Date",
        orderNumber: "Order Number",
        totalAmount: "Total Amount",
        paidAmount: "Paid Amount",
        balanceDue: "Balance Due",
    },
    ar: {
        previousOrders: "الطلبات السابقة",
        moreOptions: "المزيد من الخيارات",
        payDue: "دفع المبلغ المستحق",
        repeatOrder: "إعادة الطلب",
        downloadReceipt: "تحميل الإيصال",
        complain: "تقديم شكوى",
        downloadInvoice: "تحميل الفاتورة",
        support: "الدعم",
        confirmRepeat: "هل أنت متأكد من إعادة هذا الطلب؟",
        raiseComplain: "تقديم شكوى",
        uploadFile: "تحميل ملف",
        selectOrder: "اختر رقم الطلب",
        yourComplain: "وصف الشكوى",
        submit: "إرسال",
        selectCustomer: "اختر العميل",
        searchCustomer: "بحث عن العميل",
        clearAll: "مسح الكل",
        customerName: "اسم العميل",
        orderDate: "تاريخ الطلب",
        orderNumber: "رقم الطلب",
        totalAmount: "إجمالي المبلغ",
        paidAmount: "المبلغ المدفوع",
        balanceDue: "الرصيد المستحق",
    },
};


// translations/TrackOrdersTranslations.ts
export const TrackOrdersTranslations = {
    en: {
        title: "Track Orders",
        selectCustomer: "Select Customer",
        searchCustomer: "Search Customer",
        clearAll: "Clear All",
        customerName: "Customer Name",
        orderDate: "Order Date",
        orderNumber: "Order Number",
        trackOrder: "Track Order",
    },
    ar: {
        title: "تتبع الطلبات",
        selectCustomer: "اختر العميل",
        searchCustomer: "ابحث عن العميل",
        clearAll: "مسح الكل",
        customerName: "اسم العميل",
        orderDate: "تاريخ الطلب",
        orderNumber: "رقم الطلب",
        trackOrder: "تتبع الطلب",
    },
};

// translations/TrackOrderTranslations.ts
export const TrackOrderTranslations = {
    en: {
        pageTitle: "Track Orders",
        pageSubtitle: "Real-time updates on your package",
        orderId: "Order ID:",
        placedOn: "Placed on",
        estimatedDelivery: "Estimated Delivery",
        by: "by",
        orderJourney: "Order Journey",
        markReceived: "Mark as Received",
        downloadInvoice: "Download Invoice",
        orderedItems: "Ordered Items",
        subtotal: "Subtotal",
        saved: "You Saved",
        gst: "GST",
        totalPaid: "Total Paid",
        paymentDetails: "Payment Details",
        paymentMethod: "Payment Method",
        cardEnding: "Card ending in",
        transactionId: "Transaction ID",
    },
    ar: {
        pageTitle: "تتبع الطلبات",
        pageSubtitle: "تحديثات مباشرة عن الطرد الخاص بك",
        orderId: "رقم الطلب:",
        placedOn: "تم الطلب في",
        estimatedDelivery: "موعد التسليم المتوقع",
        by: "بحلول",
        orderJourney: "رحلة الطلب",
        markReceived: "تم الاستلام",
        downloadInvoice: "تحميل الفاتورة",
        orderedItems: "العناصر المطلوبة",
        subtotal: "الإجمالي الفرعي",
        saved: "وفرت",
        gst: "ضريبة القيمة المضافة",
        totalPaid: "المبلغ المدفوع",
        paymentDetails: "تفاصيل الدفع",
        paymentMethod: "طريقة الدفع",
        cardEnding: "انتهاء البطاقة بـ",
        transactionId: "معرف العملية",
    }
};

// translations/CreditTranslations.ts
export const CreditTranslations = {
    en: {
        pageTitle: "Credit Information",
        totalCreditLimit: "Total Credit Limit",
        creditAmountUsed: "Credit Amount Used",
        balanceCreditAvailable: "Balance Credit Available",
        totalCreditPeriod: "Total Credit Period",
        balanceCreditPeriod: "Balance Credit Period",
        paymentDueDate: "Payment Due Date",
        makePayment: "Make Payment",
    },
    ar: {
        pageTitle: "معلومات الائتمان",
        totalCreditLimit: "الحد الائتماني الكلي",
        creditAmountUsed: "المبلغ المستخدم",
        balanceCreditAvailable: "الرصيد المتاح",
        totalCreditPeriod: "فترة الائتمان الكلية",
        balanceCreditPeriod: "فترة الائتمان المتبقية",
        paymentDueDate: "تاريخ الاستحقاق",
        makePayment: "إجراء الدفع",
    },
};

// translations/paymentTranslations.ts
export const PaymentTranslations = {
    en: {
        tabs: {
            paymentRecords: "Payment Records",
            payByOrder: "Pay by Order",
            makePayment: "Make Payment",
            creditInfo: "Credit Information",
        },
        modal: {
            selectCustomer: "Select Customer",
            searchCustomer: "Search Customer",
            clearAll: "Clear All",
            makePayment: "Make Payment",
            paymentDue: "Payment Due",
            paymentVia: "Payment Via",
            fullPayment: "Full Payment",
            partPayment: "Part Payment",
            partAmount: "Part Payment Amount",
            remark: "Remark",
            submit: "Submit Payment",
            offer: "You will receive 10% credit on making a full payment!",
        },
        table: {
            customerName: "Customer Name",
            date: "Date",
            paymentMethod: "Payment Method",
            amount: "Amount",
            paidVia: "Paid Via",
            orderDate: "Order Date",
            orderNumber: "Order Number",
            totalAmount: "Total Amount",
            paidAmount: "Paid Amount",
            balanceDue: "Balance Due",
            payNow: "Pay Now",
        },
    },
    ar: {
        tabs: {
            paymentRecords: "سجلات الدفع",
            payByOrder: "الدفع حسب الطلب",
            makePayment: "إجراء الدفع",
            creditInfo: "معلومات الائتمان",
        },
        modal: {
            selectCustomer: "اختر العميل",
            searchCustomer: "ابحث عن العميل",
            clearAll: "مسح الكل",
            makePayment: "إجراء الدفع",
            paymentDue: "المبلغ المستحق",
            paymentVia: "طريقة الدفع",
            fullPayment: "الدفع الكامل",
            partPayment: "الدفع الجزئي",
            partAmount: "مبلغ الدفع الجزئي",
            remark: "ملاحظات",
            submit: "إرسال الدفع",
            offer: "ستحصل على 10٪ رصيد عند الدفع الكامل!",
        },
        table: {
            customerName: "اسم العميل",
            date: "التاريخ",
            paymentMethod: "طريقة الدفع",
            amount: "المبلغ",
            paidVia: "مدفوع عبر",
            orderDate: "تاريخ الطلب",
            orderNumber: "رقم الطلب",
            totalAmount: "المبلغ الإجمالي",
            paidAmount: "المبلغ المدفوع",
            balanceDue: "الرصيد المستحق",
            payNow: "ادفع الآن",
        },
    },
};


export const ComplainTranslations = {
    en: {
        pageTitle: "Complain",
        makeComplain: "Make Complain",
        raiseComplain: "Raise Complain",
        uploadFile: "Upload from gallery/this device/upload using camera",
        selectOrder: "Select Order Number",
        yourComplain: "Your Complain",
        submit: "Submit",
        giveFeedback: "Give Feedback",
        message: "Message",
        rating: "Rating",
        searchCustomer: "Search Customer",
        clearAll: "Clear All",
        mic: "Record Voice",
        stop: "Stop Recording",
        noMic: "No microphone found. Please connect a mic and allow access.",
    },
    ar: {
        pageTitle: "الشكوى",
        makeComplain: "تقديم شكوى",
        raiseComplain: "رفع شكوى",
        uploadFile: "تحميل من المعرض / هذا الجهاز / التحميل باستخدام الكاميرا",
        selectOrder: "اختر رقم الطلب",
        yourComplain: "شكواك",
        submit: "إرسال",
        giveFeedback: "أرسل ملاحظاتك",
        message: "الرسالة",
        rating: "التقييم",
        searchCustomer: "ابحث عن العميل",
        clearAll: "مسح الكل",
        mic: "تسجيل صوت",
        stop: "إيقاف التسجيل",
        noMic: "لم يتم العثور على ميكروفون. يرجى توصيل الميكروفون والسماح بالوصول.",
    },
}

// profile data
export const ProfileTranslations = {
    en: {
        pageTitle: "Profile",
        changePhoto: "Change",
        name: "Name",
        email: "Email",
        phone: "Phone Number",
        password: "Password",
        address: "Address",
        saveChanges: "Save Changes",
        namePlaceholder: "John Doe",
        emailPlaceholder: "john@gmail.com",
        phonePlaceholder: "xxxxxxxx",
        passwordPlaceholder: "*******",
        addressPlaceholder: "Enter your address",
    },
    ar: {
        pageTitle: "الملف الشخصي",
        changePhoto: "تغيير",
        name: "الاسم",
        email: "البريد الإلكتروني",
        phone: "رقم الهاتف",
        password: "كلمة المرور",
        address: "العنوان",
        saveChanges: "حفظ التغييرات",
        namePlaceholder: "جون دو",
        emailPlaceholder: "john@gmail.com",
        phonePlaceholder: "xxxxxxxx",
        passwordPlaceholder: "*******",
        addressPlaceholder: "أدخل عنوانك",
    },
};

export const SigninTranslations = {
    en: {
        signInTitle: "Sign In to Your Account",
        phoneLabel: "Phone Number",
        phonePlaceholder: "Enter your phone number",
        passwordLabel: "Password",
        passwordPlaceholder: "Enter your password",
        required: "*",
        signInCustomer: "Sign in as customer",
        signInSales: "Sign in as sales",
        forgetPassword: "Forget your password?",
        or: "Or",
        noAccount: "Don't have an account?",
        signUp: "Sign Up Now!",
        broughtBy: "Brought you by",
    },
    ar: {
        signInTitle: "تسجيل الدخول إلى حسابك",
        phoneLabel: "رقم الهاتف",
        phonePlaceholder: "أدخل رقم هاتفك",
        passwordLabel: "كلمة المرور",
        passwordPlaceholder: "أدخل كلمة المرور",
        required: "*",
        signInCustomer: "تسجيل الدخول كعميل",
        signInSales: "تسجيل الدخول كمندوب مبيعات",
        forgetPassword: "نسيت كلمة المرور؟",
        or: "أو",
        noAccount: "ليس لديك حساب؟",
        signUp: "سجل الآن!",
        broughtBy: "مقدم من",
    },
};

export const SignupTranslations = {
    en: {
        createAccount: "Create an Account",
        chooseAccount: "Choose account type below",
        individualTab: "Individual",
        companyTab: "Company",
        fullName: "Full Name",
        companyName: "Company Name",
        contactName: "Contact Person Name",
        phone: "Phone Number",
        email: "Email Address",
        password: "Password",
        trn: "TRN Number",
        address: "Address",
        required: "*",
        createButton: "Create Account",
        alreadyAccount: "Already have an account?",
        signIn: "Sign in Now",
    },
    ar: {
        createAccount: "إنشاء حساب",
        chooseAccount: "اختر نوع الحساب أدناه",
        individualTab: "فردي",
        companyTab: "شركة",
        fullName: "الاسم الكامل",
        companyName: "اسم الشركة",
        contactName: "اسم الشخص المسؤول",
        phone: "رقم الهاتف",
        email: "البريد الإلكتروني",
        password: "كلمة المرور",
        trn: "رقم ضريبة القيمة المضافة",
        address: "العنوان",
        required: "*",
        createButton: "إنشاء الحساب",
        alreadyAccount: "هل لديك حساب بالفعل؟",
        signIn: "تسجيل الدخول الآن",
    },
};

export const ForgotTranslations = {
    en: {
        title: "Forgot Password",
        subtitle: "Enter your details below",
        phone: "Phone Number",
        newPassword: "New Password",
        confirmPassword: "Confirm Password",
        required: "*",
        changeButton: "Change Password",
        back: "Back to Sign In",
    },
    ar: {
        title: "نسيت كلمة المرور",
        subtitle: "أدخل بياناتك أدناه",
        phone: "رقم الهاتف",
        newPassword: "كلمة المرور الجديدة",
        confirmPassword: "تأكيد كلمة المرور",
        required: "*",
        changeButton: "تغيير كلمة المرور",
        back: "العودة لتسجيل الدخول",
    },
};