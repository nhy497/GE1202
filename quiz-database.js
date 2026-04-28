// GE1202 Personal Finance Quiz Database
// Based on past assignments and final exam format

var quizDatabase = {
    // ==================== CHAPTER 2: Money Management ====================
    ch2: {
        title: "Chapter 2: Money Management",
        description: "Cash Flow, Budgeting, Financial Ratios, Balance Sheet, Cash Flow Statement",
        questions: [
            // True/False with Explanation (Part B style)
            {
                id: "ch2_tf_1",
                type: "true_false",
                question: "The rate of return on liquid assets is relatively high compared to other types of investments.",
                answer: false,
                explanation: "False. Liquid assets typically offer lower returns compared to other investments because they prioritize safety and accessibility over growth. The trade-off for liquidity is lower yield.",
                category: "savings",
                marks: 3
            },
            {
                id: "ch2_tf_2",
                type: "true_false",
                question: "The annual percentage yield (APY) formula considers compounding when determining an interest rate.",
                answer: true,
                explanation: "True. APY takes into account the effect of compounding interest, unlike the stated annual interest rate. It reflects the actual return earned over a year.",
                category: "savings",
                marks: 3
            },
            {
                id: "ch2_tf_3",
                type: "true_false",
                question: "You should invest in long-term CDs when you expect interest rates to fall.",
                answer: true,
                explanation: "True. Locking in long-term CDs when rates are expected to fall allows you to secure higher rates before they decrease. This strategy maximizes returns during declining rate environments.",
                category: "savings",
                marks: 3
            },
            {
                id: "ch2_tf_4",
                type: "true_false",
                question: "The more frequently a bank compounds interest, the higher the stated interest rate will be.",
                answer: false,
                explanation: "False. Compounding frequency doesn't affect the stated interest rate. However, more frequent compounding results in higher APY and more interest earned over time.",
                category: "savings",
                marks: 3
            },
            // Multiple Choice (Part A style)
            {
                id: "ch2_mc_1",
                type: "multiple_choice",
                question: "What is the formula for Liquidity Ratio?",
                options: [
                    "Total Assets ÷ Total Liabilities",
                    "Liquid Assets ÷ Monthly Expenses",
                    "Monthly Income ÷ Monthly Expenses",
                    "Total Savings ÷ Annual Income"
                ],
                correct: 1,
                explanation: "Liquidity Ratio = Liquid Assets ÷ Monthly Expenses. This ratio measures how many months you can cover expenses with liquid assets.",
                category: "financial_ratios",
                marks: 2
            },
            {
                id: "ch2_mc_2",
                type: "multiple_choice",
                question: "What does the Debt-to-Income Ratio measure?",
                options: [
                    "Total debt compared to total assets",
                    "Monthly debt payments compared to gross monthly income",
                    "Annual income compared to total savings",
                    "Liquid assets compared to monthly expenses"
                ],
                correct: 1,
                explanation: "Debt-to-Income Ratio = Monthly Debt Payments ÷ Gross Monthly Income. It should ideally be below 20%, and never exceed 35%.",
                category: "financial_ratios",
                marks: 2
            },
            // Calculation Problems (Part C style)
            {
                id: "ch2_calc_1",
                type: "calculation",
                question: "Ho is saving HK$2,000 per month in a regular savings account with 4% p.a. compounded monthly. A bank teller suggests a 5-year monthly saving plan with 8% p.a. compounded quarterly but with a 2% early withdrawal fee. If he needs the money in 4 years, should he take the offer?",
                options: [
                    "Yes, take the offer - higher interest rate compensates for the fee",
                    "No, keep the regular savings - the early withdrawal fee makes it worse",
                    "Both options are equal",
                    "Cannot determine without more information"
                ],
                correct: 1,
                explanation: "Use Future Value formula: FV = PMT × [(1 + r)^n - 1] / r. Regular savings: FV = $103,777. Savings plan with 2% fee: FV ≈ $117,600. The plan is better but risky for early withdrawal.",
                category: "compound_interest",
                marks: 4,
                formula: "FV = PMT × [(1 + r)^n - 1] / r"
            },
            // Short Answer
            {
                id: "ch2_sa_1",
                type: "short_answer",
                question: "Given the following data, prepare a Personal Balance Sheet for Ho: Cash in checking HK$4,500; Savings HK$1,890; Auto value HK$88,000; Video equipment HK$23,500; PC HK$12,000; Household possessions HK$34,000; Stocks HK$8,600; Education loan HK$21,600; Credit card HK$2,350",
                sample_answer: "Assets: Liquid = $6,390; Real Property = $122,000; Personal Property = $35,500; Investments = $8,600; Total Assets = $172,490. Liabilities: Current = $2,350; Long-term = $21,600; Total = $23,950. Net Worth = $148,540.",
                category: "financial_statements",
                marks: 5
            }
        ]
    },

    // ==================== CHAPTER 3: Saving ====================
    ch3: {
        title: "Chapter 3: Saving",
        description: "Emergency Funds, Time Deposits, CDs, Compound Interest",
        questions: [
            {
                id: "ch3_mc_1",
                type: "multiple_choice",
                question: "What is the recommended emergency fund amount?",
                options: [
                    "1-2 months of expenses",
                    "3-6 months of monthly expenses",
                    "6-12 months of income",
                    "1 year of total living costs"
                ],
                correct: 1,
                explanation: "The general rule of thumb is to maintain an emergency fund of 3-6 months of monthly expenses. This provides a safety buffer for unexpected situations.",
                category: "emergency_fund",
                marks: 2
            },
            {
                id: "ch3_tf_1",
                type: "true_false",
                question: "The benefit of an individual disability income insurance is fixed.",
                answer: false,
                explanation: "False. Individual disability income insurance benefits are typically based on the insured's income and can vary. They are designed to replace a percentage of lost income, usually 60-70%.",
                category: "insurance",
                marks: 3
            },
            {
                id: "ch3_calc_1",
                type: "calculation",
                question: "Calculate the future value of HK$10,000 invested at 6% p.a. compounded quarterly for 3 years.",
                options: [
                    "HK$11,500",
                    "HK$11,940.52",
                    "HK$12,200",
                    "HK$11,800"
                ],
                correct: 1,
                explanation: "Using compound interest formula: FV = PV × (1 + i)^n. Where i = r/n = 0.06/4 = 0.015, n = 4×3 = 12. FV = $10,000 × (1.015)^12 = $11,940.52.",
                category: "compound_interest",
                marks: 3,
                formula: "FV = PV × (1 + i)^n (i = r/n, n = total periods)"
            }
        ]
    },

    // ==================== CHAPTER 4: Consumer Credits & Loans ====================
    ch4: {
        title: "Chapter 4: Consumer Credits & Loans",
        description: "APR, Credit Cards, Loan Types, Minimum Payments",
        questions: [
            {
                id: "ch4_mc_1",
                type: "multiple_choice",
                question: "What is the typical grace period for credit cards?",
                options: [
                    "10-15 days",
                    "20-25 days",
                    "30-45 days",
                    "60-90 days"
                ],
                correct: 1,
                explanation: "Credit cards typically offer a grace period of 20-25 days from the statement date. Paying within this period avoids interest charges.",
                category: "credit_cards",
                marks: 2
            },
            {
                id: "ch4_mc_2",
                type: "multiple_choice",
                question: "What is the typical minimum payment for credit cards in Hong Kong?",
                options: [
                    "HK$25 or 1%",
                    "HK$50 or 2-3%",
                    "HK$100 or 5%",
                    "Full balance only"
                ],
                correct: 1,
                explanation: "In Hong Kong, the typical minimum payment is HK$50 or 2-3% of the outstanding balance, whichever is higher.",
                category: "credit_cards",
                marks: 2
            },
            {
                id: "ch4_tf_1",
                type: "true_false",
                question: "Buying insurance allows the insured to reduce his/her risk exposure.",
                answer: true,
                explanation: "True. Insurance transfers the financial risk of potential losses to the insurance company. By paying premiums, the insured reduces exposure to large unexpected expenses.",
                category: "risk_management",
                marks: 3
            },
            {
                id: "ch4_calc_1",
                type: "calculation",
                question: "Based on the loan repayment table (image shown in assignment), what is the monthly flat rate for a loan amount over HK$700,000?",
                options: [
                    "0.15%",
                    "0.12%",
                    "0.09%",
                    "0.06%"
                ],
                correct: 2,
                explanation: "For HK$700,000 or above, the monthly flat rate is 0.09%. This can be derived from the table pattern where higher loan amounts have lower rates.",
                category: "loan_analysis",
                marks: 2
            },
            {
                id: "ch4_sa_1",
                type: "short_answer",
                question: "A medical insurance policy specifies a $3,500 per illness deductible, 90% co-insurance, internal limits of $500/day on room and $8,000 max surgical fee. John was hospitalized twice: 1st time - Room $500/day × 3 days, Surgical $1,000, Covered charges $800; 2nd time - Room $800/day × 4 days, Surgical $10,000, Covered charges $2,000. Calculate total compensation.",
                sample_answer: "Insurance Claim Formula: Compensation = (Covered Expenses - Deductible) × Co-insurance %. 1st: ($3,300 - $3,500) × 90% = $0. 2nd: ($12,000 - $3,500) × 90% = $7,650. Total = $7,650. Note: Room limit $500/day, Surgical limit $8,000 applies.",
                category: "insurance_claims",
                marks: 6
            }
        ]
    },

    // ==================== CHAPTER 5: Purchasing Homes ====================
    ch5: {
        title: "Chapter 5: Purchasing Homes",
        description: "Mortgages, LTV Ratio, Buy vs Rent, Amortization, HKMA Guidelines",
        questions: [
            {
                id: "ch5_mc_1",
                type: "multiple_choice",
                question: "What is the maximum LTV ratio for properties below HK$7M according to HKMA guidelines?",
                options: [
                    "50%",
                    "60%",
                    "70%",
                    "80%"
                ],
                correct: 1,
                explanation: "For properties valued below HK$7 million, the maximum Loan-to-Value (LTV) ratio is 60%. This means a minimum down payment of 40% is required.",
                category: "mortgage",
                marks: 2
            },
            {
                id: "ch5_mc_2",
                type: "multiple_choice",
                question: "What is the typical property agent commission rate in Hong Kong?",
                options: [
                    "0.5%",
                    "1%",
                    "2%",
                    "3%"
                ],
                correct: 1,
                explanation: "The standard property agent commission in Hong Kong is typically 1% of the property price, though this can vary slightly depending on the agency.",
                category: "property",
                marks: 2
            },
            {
                id: "ch5_calc_1",
                type: "calculation",
                question: "Ho earns HK$30,000/month with HK$900,000 savings. He wants to buy a HK$4.4M flat. What is the minimum down payment needed?",
                options: [
                    "HK$1,500,000",
                    "HK$1,760,000",
                    "HK$2,000,000",
                    "HK$2,200,000"
                ],
                correct: 1,
                explanation: "Using LTV ratio: Down payment = Property Price × (1 - LTV). For HK$4.4M flat with 60% LTV: Down payment = $4.4M × 40% = $1,760,000.",
                category: "mortgage",
                marks: 3
            },
            {
                id: "ch5_sa_1",
                type: "short_answer",
                question: "Compare Bank A (Prime 5%, Spread 2.5%, 1% penalty 1st year, 1% cashback) vs Bank B (Prime 5.5%, Spread 3.2%, 1% penalty 2 years, 1% cashback) for a 25-year mortgage if staying >5 years. Which is better?",
                sample_answer: "Bank A effective rate: 5% + 2.5% = 7.5% p.a. Bank B effective rate: 5.5% + 3.2% = 8.7% p.a. For >5 years stay: Both have same 1% cashback. Bank A has lower rate (7.5% vs 8.7%) and shorter penalty period (1 year vs 2 years). Bank A is the better choice, saving approximately 1.2% annually on interest.",
                category: "mortgage_comparison",
                marks: 5
            }
        ]
    },

    // ==================== CHAPTER 6: Insurance & Health ====================
    ch6: {
        title: "Chapter 6: Insurance & Health (FOCUS)",
        description: "Risk Management, Life Insurance Types, Medical Insurance, Beneficiaries",
        questions: [
            // Risk Management Techniques
            {
                id: "ch6_mc_1",
                type: "multiple_choice",
                question: "What risk management technique is being used when you understand WIFI may have harmful effects but continue to use it?",
                options: [
                    "Risk Avoidance",
                    "Risk Reduction",
                    "Risk Assumption",
                    "Risk Transfer"
                ],
                correct: 2,
                explanation: "This is Risk Assumption (or Risk Retention). The person acknowledges the risk but decides to bear it themselves without taking protective measures.",
                category: "risk_management",
                marks: 2
            },
            {
                id: "ch6_mc_2",
                type: "multiple_choice",
                question: "What technique is used when you put money under your bed due to fear of banking collapse?",
                options: [
                    "Risk Avoidance",
                    "Risk Reduction",
                    "Risk Assumption",
                    "Risk Transfer"
                ],
                correct: 0,
                explanation: "This is Risk Avoidance. The person is avoiding the risk of bank failure by not using banking services at all, even though this creates other risks (theft, inflation).",
                category: "risk_management",
                marks: 2
            },
            {
                id: "ch6_mc_3",
                type: "multiple_choice",
                question: "Putting a screen protector and cover on your phone demonstrates which risk management technique?",
                options: [
                    "Risk Avoidance",
                    "Risk Reduction",
                    "Risk Assumption",
                    "Risk Transfer"
                ],
                correct: 1,
                explanation: "This is Risk Reduction. The protective accessories reduce the likelihood and severity of damage from drops or scratches, but don't eliminate the risk entirely.",
                category: "risk_management",
                marks: 2
            },
            {
                id: "ch6_mc_4",
                type: "multiple_choice",
                question: "Selecting a highly-ranked airline for safety demonstrates which risk management technique?",
                options: [
                    "Risk Avoidance",
                    "Risk Reduction",
                    "Risk Assumption",
                    "Risk Transfer"
                ],
                correct: 1,
                explanation: "This is Risk Reduction. Choosing a safer airline reduces the probability of an accident, but doesn't eliminate the risk of air travel completely.",
                category: "risk_management",
                marks: 2
            },
            // Life Insurance Types
            {
                id: "ch6_mc_5",
                type: "multiple_choice",
                question: "CY died with a $200,000 life insurance policy. His wife Regina was the primary beneficiary and their children Chung-yan and Chai-yan were contingent beneficiaries. All three survived. How are proceeds distributed?",
                options: [
                    "$200,000 to Regina",
                    "$100,000 each to the children",
                    "$100,000 to Regina, $50,000 each to children",
                    "$66,666 each to all three"
                ],
                correct: 0,
                explanation: "Since Regina (primary beneficiary) survived, she receives the full $200,000. Contingent beneficiaries only receive proceeds if the primary beneficiary predeceases the insured.",
                category: "life_insurance",
                marks: 2
            },
            {
                id: "ch6_mc_6",
                type: "multiple_choice",
                question: "An insured usually chooses variable life insurance in order to:",
                options: [
                    "Provide more flexible coverage",
                    "Emphasize the savings portion while still having death protection",
                    "Lessen the savings feature",
                    "Substitute for fixed-dollar protection"
                ],
                correct: 1,
                explanation: "Variable life insurance combines death protection with an investment component. The cash value is invested in securities, potentially offering higher returns than traditional whole life policies.",
                category: "life_insurance",
                marks: 2
            },
            {
                id: "ch6_mc_7",
                type: "multiple_choice",
                question: "Ho purchased a policy with initial premium HK$30,000 and can choose future premium amounts. He has HK$1,000,000 face value with cash value accumulation. What type is this?",
                options: [
                    "Universal life",
                    "Whole life",
                    "Modified whole life",
                    "Term life"
                ],
                correct: 0,
                explanation: "Universal life insurance offers flexible premium payments (after initial payment), adjustable death benefits, and cash value accumulation based on market rates.",
                category: "life_insurance",
                marks: 2
            },
            // True/False
            {
                id: "ch6_tf_1",
                type: "true_false",
                question: "Whole life insurance provides better protection than Universal life insurance.",
                answer: false,
                explanation: "False. 'Better' depends on individual needs. Whole life offers fixed premiums and guaranteed cash value. Universal life offers flexibility but requires monitoring. Neither is universally 'better'.",
                category: "life_insurance",
                marks: 3
            },
            {
                id: "ch6_tf_2",
                type: "true_false",
                question: "You should always request the insurance company to put down the disability clause on the insurance plan.",
                answer: false,
                explanation: "False. While disability clauses can be valuable, they increase premium costs. The decision depends on individual circumstances, existing coverage, and financial situation.",
                category: "life_insurance",
                marks: 3
            },
            {
                id: "ch6_tf_3",
                type: "true_false",
                question: "A term life insurance will be the most suitable to a journalist working in Afghanistan for 5 years.",
                answer: true,
                explanation: "True. Term life is ideal for temporary, high-risk situations. It provides maximum coverage at lowest cost for a defined period, matching the journalist's 5-year assignment.",
                category: "life_insurance",
                marks: 3
            },
            {
                id: "ch6_tf_4",
                type: "true_false",
                question: "If a loss is certain to occur, there is no risk.",
                answer: true,
                explanation: "True. Risk involves uncertainty. If a loss is certain, it becomes a known expense or liability rather than a risk. Insurance exists to manage uncertain events, not certain ones.",
                category: "risk_management",
                marks: 3
            },
            {
                id: "ch6_tf_5",
                type: "true_false",
                question: "A comprehensive major medical insurance provides coverage on all types of medical expenses.",
                answer: false,
                explanation: "False. No insurance covers 'all' expenses. Comprehensive major medical has deductibles, co-insurance, internal limits, and exclusions. 'Comprehensive' doesn't mean unlimited.",
                category: "medical_insurance",
                marks: 3
            },
            {
                id: "ch6_tf_6",
                type: "true_false",
                question: "To secure the most comprehensive protection, an insured should subscribe a medical insurance earlier.",
                answer: true,
                explanation: "True. Early enrollment is advantageous because: 1) Premiums are lower when younger/healthier, 2) Pre-existing conditions may be excluded if discovered later, 3) Waiting periods are satisfied sooner.",
                category: "medical_insurance",
                marks: 3
            },
            {
                id: "ch6_tf_7",
                type: "true_false",
                question: "It is necessary to maintain an emergency fund of 3-6 months even if you have disability income insurance.",
                answer: true,
                explanation: "True. Disability insurance typically has elimination periods (30-90 days) before benefits begin. An emergency fund covers this gap and any uncovered expenses during disability.",
                category: "emergency_fund",
                marks: 3
            },
            // Additional MC questions matching assignment format
            {
                id: "ch6_mc_8",
                type: "multiple_choice",
                question: "Ho purchased a policy with an initial premium of HK$30,000 and may elect how much he desires to pay in premiums from now on. He has purchased a face value of HK$1,000,000 and can accumulate cash value. What type of life insurance has Ho purchased?",
                options: [
                    "Universal life",
                    "Whole life",
                    "Modified whole life",
                    "Term life"
                ],
                correct: 0,
                explanation: "Universal life insurance offers flexible premium payments after the initial payment, adjustable death benefits, and cash value accumulation. This matches the description of Ho's policy.",
                category: "life_insurance",
                marks: 2
            },
            {
                id: "ch6_mc_9",
                type: "multiple_choice",
                question: "An insured usually chooses variable life insurance in order to:",
                options: [
                    "Provide more flexible coverage",
                    "Emphasize the savings portion while still having death protection",
                    "Lessen the savings feature of life insurance",
                    "Substitute for fixed-dollar insurance protection"
                ],
                correct: 1,
                explanation: "Variable life insurance combines death protection with an investment component. The cash value is invested in securities, potentially offering higher returns than traditional whole life policies.",
                category: "life_insurance",
                marks: 2
            }
        ]
    },

    // ==================== CHAPTER 7: Investment ====================
    ch7: {
        title: "Chapter 7: Investment (FOCUS)",
        description: "Stocks, Bonds, Margin Trading, Risk Tolerance, Behavioral Biases, Markets",
        questions: [
            // True/False
            {
                id: "ch7_tf_1",
                type: "true_false",
                question: "Ordinary investors cannot access the primary security market as it is designed for fundraising at the corporate level.",
                answer: false,
                explanation: "False. Ordinary investors CAN access primary markets through IPOs (Initial Public Offerings), though large institutional investors often get preferential allocation.",
                category: "markets",
                marks: 3
            },
            {
                id: "ch7_tf_2",
                type: "true_false",
                question: "Money market mutual funds is a portfolio consisting of stocks with maturity less than one year.",
                answer: false,
                explanation: "False. Money market funds invest in short-term DEBT instruments (T-bills, commercial paper, CDs), not stocks. They focus on capital preservation and liquidity.",
                category: "investment",
                marks: 3
            },
            {
                id: "ch7_tf_3",
                type: "true_false",
                question: "The risk tolerance of youngsters is always larger than elderly.",
                answer: false,
                explanation: "False. While youngsters generally have higher risk capacity (longer time horizon), risk tolerance is psychological and varies individually. Some young people are very risk-averse.",
                category: "risk_tolerance",
                marks: 3
            },
            {
                id: "ch7_tf_4",
                type: "true_false",
                question: "Risk loving investors tend to assign a larger percentage of his assets as stock than bond.",
                answer: true,
                explanation: "True. Risk-loving investors prefer higher potential returns and accept higher volatility. Stocks are generally riskier but offer higher long-term returns than bonds.",
                category: "risk_tolerance",
                marks: 3
            },
            {
                id: "ch7_tf_5",
                type: "true_false",
                question: "It is possible to gain in a bear market.",
                answer: true,
                explanation: "True. Investors can profit in bear markets through: short selling, buying inverse ETFs, purchasing undervalued stocks at low prices, or using options strategies.",
                category: "markets",
                marks: 3
            },
            // Behavioral Bias
            {
                id: "ch7_mc_1",
                type: "multiple_choice",
                question: "You purchased 'CityU' stock at $100. After a collapse, it dropped to $50, but you believe it will return to $100. What behavioral bias is illustrated?",
                options: [
                    "Overconfidence bias",
                    "Anchoring bias",
                    "Loss aversion",
                    "Mental accounting"
                ],
                correct: 1,
                explanation: "This is Anchoring Bias. The investor is 'anchored' to the original purchase price ($100) as the 'true' value, ignoring current market conditions and fundamentals.",
                category: "behavioral_finance",
                marks: 2
            },
            // Margin Trading Calculation
            {
                id: "ch7_calc_1",
                type: "calculation",
                question: "You plan to buy 500 shares of 'CityU' at $20. Initial margin is 40% and maintenance margin is 30%. At what price will you receive a margin call?",
                options: [
                    "$15.50",
                    "$16.00",
                    "$17.14",
                    "$18.50"
                ],
                correct: 2,
                explanation: "Using margin call formula: Margin Call Price = Loan / [(1 - Maintenance Margin) × Shares]. Loan = $10,000 × (1 - 40%) = $6,000. Margin Call Price = $6,000 / [(1 - 0.30) × 500] = $6,000 / 350 = $17.14.",
                category: "margin_trading",
                marks: 4,
                formula: "Margin Call Price = Loan / [(1 - MM) × Shares]"
            },
            {
                id: "ch7_mc_2",
                type: "multiple_choice",
                question: "What is the typical initial margin requirement for margin trading?",
                options: [
                    "25%",
                    "40-50%",
                    "60%",
                    "75%"
                ],
                correct: 1,
                explanation: "Initial margin requirements are typically 40-50% of the purchase price. Maintenance margin (the minimum equity required to avoid margin call) is usually around 30%.",
                category: "margin_trading",
                marks: 2
            },
            {
                id: "ch7_mc_3",
                type: "multiple_choice",
                question: "What is the maintenance margin requirement?",
                options: [
                    "20%",
                    "30%",
                    "40%",
                    "50%"
                ],
                correct: 1,
                explanation: "The typical maintenance margin requirement is 30% in Hong Kong. If equity falls below this percentage, a margin call is triggered.",
                category: "margin_trading",
                marks: 2
            }
        ]
    },

    // ==================== COMPREHENSIVE / MIXED ====================
    comprehensive: {
        title: "Comprehensive Practice",
        description: "Mixed questions from all chapters for final exam preparation",
        questions: [
            // Full exam simulation - 15 MC questions
            {
                id: "comp_mc_1",
                type: "multiple_choice",
                question: "Which financial ratio measures the ability to meet short-term obligations with liquid assets?",
                options: [
                    "Debt-to-Income Ratio",
                    "Liquidity Ratio",
                    "Savings Ratio",
                    "Net Worth Ratio"
                ],
                correct: 1,
                explanation: "Liquidity Ratio = Liquid Assets ÷ Monthly Expenses. It shows how many months you can survive on liquid assets alone.",
                category: "financial_ratios",
                marks: 2
            },
            {
                id: "comp_mc_2",
                type: "multiple_choice",
                question: "Which of the following is NOT one of the five risk management techniques?",
                options: [
                    "Risk Avoidance",
                    "Risk Reduction",
                    "Risk Assumption",
                    "Risk Elimination"
                ],
                correct: 3,
                explanation: "The five risk management techniques are: Avoidance, Reduction, Assumption (Retention), Transfer (Insurance), and Shifting. 'Risk Elimination' is not a standard technique as risk can rarely be completely eliminated.",
                category: "risk_management",
                marks: 2
            },
            {
                id: "comp_mc_3",
                type: "multiple_choice",
                question: "What is the primary purpose of disability income insurance?",
                options: [
                    "Cover medical expenses from disability",
                    "Replace lost income during disability",
                    "Provide lump sum payment for disability",
                    "Cover rehabilitation costs only"
                ],
                correct: 1,
                explanation: "Disability income insurance replaces a portion (typically 60-70%) of lost income when the insured cannot work due to illness or injury. It focuses on income replacement, not medical expenses.",
                category: "insurance",
                marks: 2
            },
            {
                id: "comp_mc_4",
                type: "multiple_choice",
                question: "In a money market mutual fund, what is the typical maximum maturity of investments?",
                options: [
                    "30 days",
                    "90 days",
                    "1 year",
                    "5 years"
                ],
                correct: 2,
                explanation: "Money market funds invest in short-term debt instruments with maturities of less than one year. This maintains high liquidity and low risk.",
                category: "investment",
                marks: 2
            },
            // True/False comprehensive
            {
                id: "comp_tf_1",
                type: "true_false",
                question: "The APR (Annual Percentage Rate) reflects the true cost of borrowing including all fees.",
                answer: true,
                explanation: "True. APR includes the interest rate plus any additional fees or costs associated with the loan, providing a more accurate picture of total borrowing cost.",
                category: "loans",
                marks: 3
            },
            {
                id: "comp_tf_2",
                type: "true_false",
                question: "Investing in long-term CDs is advisable when interest rates are expected to rise.",
                answer: false,
                explanation: "False. When rates are expected to rise, it's better to invest in short-term CDs to take advantage of higher rates when they increase. Locking in long-term rates would mean missing out on better returns.",
                category: "savings",
                marks: 3
            }
        ]
    }
};

// Helper function to get questions by chapter
function getQuestionsByChapter(chapter) {
    if (quizDatabase[chapter] && quizDatabase[chapter].questions) {
        return quizDatabase[chapter].questions;
    }
    return [];
}

// Helper function to get questions by type
function getQuestionsByType(type) {
    var allQuestions = [];
    var chapters = Object.keys(quizDatabase);
    for (var i = 0; i < chapters.length; i++) {
        var chapter = quizDatabase[chapters[i]];
        if (chapter && chapter.questions) {
            for (var j = 0; j < chapter.questions.length; j++) {
                var q = chapter.questions[j];
                if (q.type === type) allQuestions.push(q);
            }
        }
    }
    return allQuestions;
}

// Export for use in quiz.html
if (typeof module !== 'undefined' && module.exports) {
    module.exports = quizDatabase;
}
