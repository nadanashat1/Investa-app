import React, { useState } from 'react';
import {
  Box,
  Typography,
  Link,
  TextField,
  InputAdornment,
  Tabs,
  Tab,
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  GlobalStyles
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// -------------------------------------------------------------
//الجزء الأول: بيانات الأسئلة والإجابات
// -------------------------------------------------------------
const investorFAQs = [
  {
    id: 'investor-1',
    question: 'What is equity crowdfunding?',
    answer: 'Equity crowdfunding allows everyday people to invest in startups and small businesses in exchange for equity (ownership shares) in the company. It democratizes access to early-stage investing, traditionally reserved for venture capitalists and angel investors.'
  },
  {
    id: 'investor-2',
    question: 'How do I invest?',
    answer: 'To invest, you first need to create an account and complete our investor verification process. Once verified, you can browse available opportunities, review company profiles, and make an investment decision. Funds are typically held in escrow until the funding goal is met.'
  },
  {
    id: 'investor-3',
    question: 'What are the risks of investing in startups?',
    answer: 'Investing in startups is inherently risky. Most startups fail, and you could lose your entire investment. Companies are often illiquid, meaning you may not be able to sell your shares quickly. It\'s crucial to invest only what you can afford to lose and to diversify your portfolio.'
  },
  {
    id: 'investor-4',
    question: 'Is there a minimum investment amount?',
    answer: 'Minimum investment amounts vary by company, but typically start as low as $100. This makes startup investing accessible to a broader range of investors.'
  },
  {
    id: 'investor-5',
    question: 'When do I get my money back?',
    answer: 'Unlike public stocks, there\'s no guaranteed exit timeline. You typically get returns if the company is acquired, goes public (IPO), or starts distributing profits. This can take many years, or never happen. It\'s a long-term investment.'
  },
  {
    id: 'investor-6',
    question: 'What is an accredited investor?',
    answer: 'An accredited investor is an individual or an entity that is allowed to invest in certain types of unregistered securities. The definition is set by regulations (e.g., SEC in the US) and usually involves specific income levels, net worth, or professional qualifications. However, many crowdfunding platforms allow non-accredited investors to participate under certain limits.'
  },
  {
    id: 'investor-7',
    question: 'How do I track my investments after funding?',
    answer: 'After a successful investment, you will typically receive digital share certificates or confirmation documents. Our platform provides a dashboard where you can view your investment portfolio, receive updates from the companies you\'ve invested in, and track any relevant news or financial reports they provide.'
  },
  {
    id: 'investor-8',
    question: 'Are there any fees for investors?',
    answer: 'Generally, most platforms do not charge direct fees to investors for making an investment. However, there might be fees associated with specific payment methods, or administrative fees upon a successful exit (e.g., a small percentage of profits if the company is acquired). Always check the platform\'s terms and the offering details for specific fee structures.'
  },
  {
    id: 'investor-9',
    question: 'What happens if a company I invested in fails?',
    answer: 'If a company you invested in fails, you will likely lose your entire investment. Startup investing carries a high risk of failure. In such cases, investors typically do not recover their capital, as liquidation proceeds (if any) are usually paid to creditors first.'
  },
  {
    id: 'investor-10',
    question: 'Can I sell my shares before a company exits?',
    answer: 'Investments in private companies are generally illiquid, meaning there isn\'t an active public market to easily sell your shares. While some platforms might offer limited secondary market opportunities or transfer mechanisms, it\'s typically difficult to sell your shares before the company is acquired or goes public (an "exit event").'
  },
];
const founderFAQs = [
  {
    id: 'founder-1',
    question: 'Who can raise money on your platform?',
    answer: 'Our platform is open to a wide range of startups and growing businesses. We look for innovative companies with strong teams and clear growth potential. Eligibility requirements vary by regulation and platform terms.'
  },
  {
    id: 'founder-2',
    question: 'What is the fundraising process?',
    answer: 'The process typically involves applying, going through a vetting period, preparing your campaign page, launching, and then managing investor relations post-campaign. Our team will guide you through each step.'
  },
  {
    id: 'founder-3',
    question: 'How do I prepare my company for fundraising?',
    answer: 'Preparation includes creating a compelling pitch deck, developing a detailed business plan, understanding your financials, and building a strong online presence. Legal and compliance checks are also essential.'
  },
  {
    id: 'founder-4',
    question: 'What are the fees for founders to raise money?',
    answer: 'Our fee structure typically includes a listing fee or a percentage of the total funds successfully raised. There might also be escrow fees or costs associated with specific legal and compliance services. Detailed fee breakdowns are provided during the application process.'
  },
  {
    id: 'founder-5',
    question: 'How long does a typical fundraising campaign last?',
    answer: 'Campaigns usually run for a period of 30 to 90 days, though this can vary based on your strategy and regulatory limits. We work with founders to set a realistic timeline to achieve their funding goals.'
  },
  {
    id: 'founder-6',
    question: 'What kind of support do you offer to founders during their campaign?',
    answer: 'We offer comprehensive support including guidance on crafting your pitch, optimizing your campaign page, marketing strategies to reach potential investors, and managing investor communications. Our team provides resources and expertise to help you succeed.'
  },
  {
    id: 'founder-7',
    question: 'What happens after my campaign is successfully funded?',
    answer: 'Post-funding, we assist with the closing process, including legal documentation and fund transfer. Founders are typically required to provide regular updates to their investors, and our platform can help facilitate these communications. We also offer resources for continued growth and investor relations.'
  },
  {
    id: 'founder-8',
    question: 'Can I raise money if my company is not based in the U.S.?',
    answer: 'Eligibility for non-U.S. companies depends on specific regulations and our platform\'s operational licenses. Please contact our support team with details about your company\'s jurisdiction to determine if you are eligible to raise funds through our platform.'
  },
];


// -------------------------------------------------------------
// الجزء الثاني: الـ Component بتاع القائمة المنسدلة الواحدة (FAQAccordion)
// -------------------------------------------------------------
function FAQAccordion({ question, answer }) {
  return (
    <>
      <GlobalStyles
        styles={{
          body: {
            margin: 0,
            padding: 0
          }
        }}
      />
      <Accordion
        sx={{
          mb: 2,
          boxShadow: 'none',
          border: 'none', 
          borderRadius: '8px',
          '&:before': {
            display: 'none',
          },
          bgcolor: '#ffffff',
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`panel-content-${question.replace(/\s/g, '-')}`}
          id={`panel-header-${question.replace(/\s/g, '-')}`}
          sx={{
            borderRadius: '8px',
            minHeight: '48px',
            '&.Mui-expanded': {
              minHeight: '48px',
            },
            '& .MuiAccordionSummary-content': {
              my: 1,
            },
            '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
              transform: 'rotate(180deg)',
            },
          }}
        >
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#333' }}>
            {question}
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ px: 2, py: 2, borderTop: 'none' }}> 
          <Typography variant="body2" sx={{ color: '#555' }}>
            {answer}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
}

// -------------------------------------------------------------
// الجزء الثالث: الـ Component الرئيسي لصفحة الـ FAQ (InvestorFAQPage)
// -------------------------------------------------------------
function InvestorFAQPage() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // دالة لفلترة الأسئلة بناءً على البحث
  const filterFAQs = (faqs) => {
    if (!searchTerm) {
      return faqs;
    }
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return faqs.filter(faq =>
      faq.question.toLowerCase().includes(lowerCaseSearchTerm) ||
      faq.answer.toLowerCase().includes(lowerCaseSearchTerm)
    );
  };

  const filteredInvestorFAQs = filterFAQs(investorFAQs);
  const filteredFounderFAQs = filterFAQs(founderFAQs);

  const primaryColor = '#001F3F';

  return (
    <Box sx={{ bgcolor: '#f7f9fc', minHeight: '100vh' }}>
      <Container maxWidth="md" sx={{ py: 6, textAlign: 'center' }}>
        {/* الجزء العلوي */}
        <Typography variant="h1" component="h1" sx={{ fontWeight: 'bold', mb: 2, color: primaryColor }}>
          Got a question? We'd love to help!
        </Typography>
        <Typography variant="body1" sx={{ mb: 1, color: primaryColor }}>
          Can't find what you're looking for?
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, color: primaryColor }}>
          Email us: <Link href="mailto:support@Investa.com" sx={{ color: primaryColor, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
            support@Investa.com
          </Link>
        </Typography>

        {/* شريط البحث */}
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search the FAQ..."
          value={searchTerm}
          onChange={handleSearchChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: primaryColor }} />
              </InputAdornment>
            ),
            sx: {
              borderRadius: '8px',
              bgcolor: '#fff',
              '& fieldset': { borderColor: primaryColor },
              '&:hover fieldset': { borderColor: primaryColor },
              '&.Mui-focused fieldset': { borderColor: primaryColor },
            }
          }}
          sx={{ mb: 6 }}
        />
      </Container>

      {/* الجزء بتاع الـ Tabs */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider', bgcolor: '#fff' }}>
        <Container maxWidth="md">
          <Tabs value={selectedTab} onChange={handleTabChange} aria-label="FAQ sections tabs"
            TabIndicatorProps={{
              sx: { bgcolor: primaryColor } 
            }}
          >
            <Tab label="INVESTOR FAQ" sx={{
              fontWeight: 'bold',
              color: selectedTab === 0 ? '#e03a3e' : primaryColor, 
              '&.Mui-selected': { color: primaryColor } 
            }} />
            <Tab label="FOUNDER FAQ" sx={{
              fontWeight: 'bold',
              color: selectedTab === 1 ? '#e03a3e' : primaryColor,
              '&.Mui-selected': { color: primaryColor }
            }} />
          </Tabs>
        </Container>
      </Box>

      {/* المحتوى اللي بيتغير بناءً على الـ Tab المختار */}
      <Container maxWidth="md" sx={{ py: 6 }}>
        {selectedTab === 0 && (
          <Box>
            <Typography variant="subtitle1" sx={{ color: primaryColor, mb: 1 }}>
              Investors FAQ
            </Typography>
            <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 4, color: primaryColor }}>
              Getting Started
            </Typography>
            {/* هنا بنعمل map على أسئلة Investor FAQ وبنعرض كل سؤال في FAQAccordion */}
            {filteredInvestorFAQs.map(faq => (
              <FAQAccordion
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
            {filteredInvestorFAQs.length === 0 && searchTerm && (
              <Typography variant="body1" sx={{ textAlign: 'center', mt: 4, color: '#777' }}>
                No matching Investor FAQs found.
              </Typography>
            )}
          </Box>
        )}

        {selectedTab === 1 && (
          <Box>
            <Typography variant="subtitle1" sx={{ color: primaryColor, mb: 1 }}>
              Founders FAQ
            </Typography>
            <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 4, color: primaryColor }}>
              Getting Started
            </Typography>
            {/* هنا هنعمل map على أسئلة Founder FAQ */}
            {filteredFounderFAQs.map(faq => (
              <FAQAccordion
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
            {filteredFounderFAQs.length === 0 && searchTerm && (
              <Typography variant="body1" sx={{ textAlign: 'center', mt: 4, color: '#777' }}>
                No matching Founder FAQs found.
              </Typography>
            )}
          </Box>
        )}
      </Container>
    </Box>
  );
}

export default InvestorFAQPage;