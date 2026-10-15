import { useEffect, useMemo, useState } from "react";
import {
  Activity,
  AlertCircle,
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Bell,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  CircleX,
  ClipboardList,
  CreditCard,
  Download,
  Eye,
  EyeOff,
  FileWarning,
  GitCompareArrows,
  IndianRupee,
  Info,
  LayoutDashboard,
  LogOut,
  Moon,
  Percent,
  Plus,
  Radio,
  RefreshCw,
  RotateCcw,
  Search,
  SearchCheck,
  Send,
  ShieldCheck,
  Settings,
  Sparkles,
  Sun,
  Timer,
  TrendingUp,
  UserPlus,
  UserRound,
  UserX,
  Users,
  X,
} from "lucide-react";
import "./index.css";

/* =========================================================
   MOCK DATA
========================================================= */

const usersData = [
  {
    id: 1,
    name: "Rahul Sharma",
    email: "rahul.sharma@gmail.com",
    mobile: "+91 9876543210",
    area: "Software Engineer",
    plan: "Premium",
    status: "Active",
    lastActive: "12 Oct 2026",
    ai: 48,
    joined: "12 Sep 2026",
    planEnd: "15 Oct 2026",
    profile: { headline: "Python Developer", location: "Hyderabad" },
    lastPaymentId: "PAY-1001",
    resumes: [{ name: "rahul-sharma-resume.pdf", score: 86, uploaded: "10 Oct 2026" }],
    applications: ["AI Engineer · TechNova", "Backend Developer · CloudScale"],
    savedJobs: ["Machine Learning Engineer · DataWorks"],
    preferences: ["Hyderabad", "Remote", "AI / ML"],
  },
  {
    id: 2,
    name: "Ananya Reddy",
    email: "ananya.reddy@gmail.com",
    mobile: "+91 9988776655",
    area: "AI / ML",
    plan: "Basic",
    status: "Active",
    lastActive: "11 Oct 2026",
    ai: 32,
    joined: "18 Sep 2026",
    planEnd: "21 Oct 2026",
    profile: { headline: "ML Engineer", location: "Bengaluru" },
    lastPaymentId: "PAY-1002",
    resumes: [{ name: "ananya-reddy-resume.pdf", score: 92, uploaded: "08 Oct 2026" }],
    applications: ["AI Research Intern · InnovateAI"],
    savedJobs: ["Data Scientist · FinTech Labs"],
    preferences: ["Bengaluru", "Remote", "AI / ML"],
  },
  {
    id: 3,
    name: "Vikram Kumar",
    email: "vikram.kumar@gmail.com",
    mobile: "+91 9123456789",
    area: "Data Scientist",
    plan: "Premium",
    status: "Active",
    lastActive: "09 Oct 2026",
    ai: 76,
    joined: "22 Aug 2026",
    planEnd: "18 Oct 2026",
    profile: { headline: "Data Scientist", location: "Chennai" },
    lastPaymentId: "PAY-1003",
    resumes: [{ name: "vikram-kumar-resume.pdf", score: 79, uploaded: "02 Oct 2026" }],
    applications: ["Data Scientist · AnalyticsPro"],
    savedJobs: ["Python Developer · TechNova"],
    preferences: ["Chennai", "Remote", "Data Scientist"],
  },
  {
    id: 4,
    name: "Priya Nair",
    email: "priya.nair@gmail.com",
    mobile: "+91 9012345678",
    area: "Business Analyst",
    plan: "None",
    status: "Inactive",
    lastActive: "01 Oct 2026",
    ai: 8,
    joined: "02 Jul 2026",
    profile: { headline: "Business Analyst", location: "Kochi" },
    lastPaymentId: null,
    resumes: [],
    applications: [],
    savedJobs: [],
    preferences: ["Kochi", "Business Analyst"],
  },
  {
    id: 5,
    name: "Arjun Mehta",
    email: "arjun.mehta@gmail.com",
    mobile: "+91 9876501234",
    area: "Full Stack",
    plan: "Premium",
    status: "Past due",
    lastActive: "29 Sep 2026",
    ai: 61,
    joined: "14 Jun 2026",
    profile: { headline: "Full Stack Developer", location: "Pune" },
    lastPaymentId: "PAY-1004",
    resumes: [{ name: "arjun-mehta-resume.pdf", score: 71, uploaded: "01 Sep 2026" }],
    applications: ["Full Stack Developer · Apex Systems"],
    savedJobs: ["AI Engineer · AIFAGen"],
    preferences: ["Pune", "Remote", "Full Stack"],
  },
  {
    id: 6,
    name: "Sneha Rao",
    email: "sneha.rao@gmail.com",
    mobile: "+91 9000012345",
    area: "Data Analyst",
    plan: "Basic",
    status: "Active",
    lastActive: "12 Oct 2026",
    ai: 27,
    joined: "28 Sep 2026",
    planEnd: "02 Nov 2026",
    profile: { headline: "Data Analyst", location: "Hyderabad" },
    lastPaymentId: "PAY-1005",
    resumes: [{ name: "sneha-rao-resume.pdf", score: 88, uploaded: "09 Oct 2026" }],
    applications: ["Data Analyst · DataWorks"],
    savedJobs: [],
    preferences: ["Hyderabad", "Data Analyst"],
  },
  {
    id: 7,
    name: "Karthik Reddy",
    email: "karthik.reddy@gmail.com",
    mobile: "+91 9888812345",
    area: "DevOps",
    plan: "Premium",
    status: "Active",
    lastActive: "06 Oct 2026",
    ai: 83,
    joined: "05 Aug 2026",
    planEnd: "08 Nov 2026",
    profile: { headline: "DevOps Engineer", location: "Bengaluru" },
    lastPaymentId: "PAY-1006",
    resumes: [{ name: "karthik-reddy-resume.pdf", score: 83, uploaded: "04 Oct 2026" }],
    applications: [],
    savedJobs: ["Backend Developer · CloudScale"],
    preferences: ["Bengaluru", "Remote", "DevOps"],
  },
  {
    id: 8,
    name: "Meghana Rao",
    email: "meghana.rao@gmail.com",
    mobile: "+91 9555512345",
    area: "QualityAutomation",
    plan: "None",
    status: "Cancelled",
    lastActive: "15 Sep 2026",
    ai: 12,
    joined: "19 May 2026",
    profile: { headline: "QA Automation Engineer", location: "Mumbai" },
    lastPaymentId: null,
    resumes: [],
    applications: [],
    savedJobs: [],
    preferences: ["Mumbai", "QualityAutomation"],
  },
];

const paymentsData = [
  {
    id: "PAY-1001",
    user: "Rahul Sharma",
    amount: 1999,
    status: "Paid",
    method: "UPI",
    date: "10 Oct 2026",
  },
  {
    id: "PAY-1002",
    user: "Ananya Reddy",
    amount: 999,
    status: "Paid",
    method: "Card",
    date: "09 Oct 2026",
  },
  {
    id: "PAY-1003",
    user: "Vikram Kumar",
    amount: 1999,
    status: "Paid",
    method: "Card",
    date: "08 Oct 2026",
  },
  {
    id: "PAY-1004",
    user: "Arjun Mehta",
    amount: 1999,
    status: "Failed",
    method: "Card",
    date: "07 Oct 2026",
  },
  {
    id: "PAY-1005",
    user: "Sneha Rao",
    amount: 999,
    status: "Paid",
    method: "UPI",
    date: "06 Oct 2026",
  },
  {
    id: "PAY-1006",
    user: "Karthik Reddy",
    amount: 1999,
    status: "Refunded",
    method: "Card",
    date: "05 Oct 2026",
  },
];

const jobsData = [
  {
    id: 1,
    title: "AI Engineer",
    company: "AIFAGen",
    location: "Hyderabad / Remote",
    source: "Internal",
    date: "12 Oct 2026",
    applyUrl: "https://aifagenlabs.com/careers/ai-engineer",
    visible: true,
  },
  {
    id: 2,
    title: "Python Developer",
    company: "TechNova",
    location: "Bengaluru",
    source: "LinkedIn",
    date: "11 Oct 2026",
    applyUrl: "",
    visible: true,
  },
  {
    id: 3,
    title: "Machine Learning Engineer",
    company: "DataLabs",
    location: "Pune",
    source: "Indeed",
    date: "10 Oct 2026",
    applyUrl: "javascript:alert(1)",
    visible: true,
  },
  {
    id: 4,
    title: "Data Scientist",
    company: "AnalyticsPro",
    location: "Mumbai",
    source: "Naukri",
    date: "01 Sep 2026",
    applyUrl: "",
    visible: false,
  },
  {
    id: 5,
    title: "Python Developer",
    company: "TechNova",
    location: "Bengaluru",
    source: "Indeed",
    date: "10 Oct 2026",
    applyUrl: "https://technova.example/jobs/python-developer",
    visible: true,
  },
];

const initialInternalJobs = [
  {
    id: 1,
    title: "AI Engineer",
    department: "Engineering",
    location: "Hyderabad / Remote",
    type: "Full-time",
    description: "Build AI-powered features for the AIFAGen platform.",
    skills: "Python, React, AI",
    applyLink: "",
    visible: true,
  },
  {
    id: 2,
    title: "Frontend Developer",
    department: "Product",
    location: "Hyderabad",
    type: "Full-time",
    description: "Build thoughtful user experiences for AIFAGen.",
    skills: "React, JavaScript, CSS",
    applyLink: "",
    visible: true,
  },
  {
    id: 3,
    title: "Data Analyst Intern",
    department: "Analytics",
    location: "Remote",
    type: "Internship",
    description: "Support analytics and reporting initiatives.",
    skills: "Python, SQL, Excel",
    applyLink: "",
    visible: false,
  },
];

const initialAdmins = [
  { email: "admin@aifagen.com", date: "01 Sep 2026" },
  { email: "manager@aifagen.com", date: "11 Oct 2026" },
];

const PLAN_OPTIONS = ["None", "Basic", "Premium"];
const USER_STATUS_OPTIONS = ["Active", "Inactive", "Past due", "Cancelled"];
const AREA_OPTIONS = [
  "DevOps",
  "Supply Chain",
  "AI / ML",
  "Data Scientist",
  "Data Center Technician",
  "Network Engineer",
  "Business Analyst",
  "Data Analyst",
  "Full Stack",
  "Software Engineer",
  "QualityAutomation",
  "IT Support",
  "SAP",
];

function loadStoredValue(key, fallback) {
  const stored = localStorage.getItem(key);
  if (stored === null) return fallback;
  try {
    const parsed = JSON.parse(stored);
    if (Array.isArray(fallback) && !Array.isArray(parsed)) {
      console.error(`Saved ${key} data has an invalid shape; using defaults.`);
      return fallback;
    }
    return parsed;
  } catch (error) {
    console.error(`Unable to read saved ${key} data.`, error);
    return fallback;
  }
}

function isSafeApplyLink(value) {
  if (typeof value !== "string") return false;
  if (!value.trim()) return true;
  try {
    const url = new URL(value);
    if (url.protocol === "https:") {
      return Boolean(url.hostname) && !url.username && !url.password;
    }
    return url.protocol === "mailto:" &&
      /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(url.pathname);
  } catch {
    return false;
  }
}

const planSegments = [
  { name: "Premium", percent: 42, color: "#8978ff" },
  { name: "Basic", percent: 31, color: "#6478df" },
  { name: "None", percent: 27, color: "#aeb5c4" },
];

const sourcesData = [
  {
    name: "Naukri",
    status: "Failed",
    lastRun: "12 Oct 2026, 09:15 AM",
    duration: "32s",
    saved: "0 (+0)",
    jobs24: 120,
    note: "Authentication failed",
  },
  {
    name: "Wellfound",
    status: "Blocked",
    lastRun: "12 Oct 2026, 08:40 AM",
    duration: "18s",
    saved: "12 (+2)",
    jobs24: 54,
    note: "Rate limit reached",
  },
  {
    name: "RemoteOK",
    status: "No jobs",
    lastRun: "12 Oct 2026, 08:10 AM",
    duration: "12s",
    saved: "0 (+0)",
    jobs24: 0,
    note: "No new jobs available",
  },
  {
    name: "LinkedIn",
    status: "Working",
    lastRun: "12 Oct 2026, 10:20 AM",
    duration: "2m 14s",
    saved: "482 (+72)",
    jobs24: 1240,
    note: "Running normally",
  },
  {
    name: "Indeed",
    status: "Working",
    lastRun: "12 Oct 2026, 10:05 AM",
    duration: "1m 42s",
    saved: "316 (+44)",
    jobs24: 872,
    note: "Running normally",
  },
];

const initialSourceRuns = [
  {
    id: "run-linkedin-1020",
    source: "LinkedIn",
    when: "12 Oct 2026, 10:20 AM",
    status: "Completed",
    duration: "2m 14s",
    jobs: "482 jobs collected",
    error: "",
    details: "Collection completed and saved 72 new listings.",
  },
  {
    id: "run-indeed-1005",
    source: "Indeed",
    when: "12 Oct 2026, 10:05 AM",
    status: "Completed",
    duration: "1m 42s",
    jobs: "316 jobs collected",
    error: "",
    details: "Collection completed and saved 44 new listings.",
  },
  {
    id: "run-naukri-0915",
    source: "Naukri",
    when: "12 Oct 2026, 09:15 AM",
    status: "Failed",
    duration: "32s",
    jobs: "0 jobs collected",
    error: "Authentication failed",
    details: "The source rejected the configured credentials. Verify the integration credentials before enabling a production retry.",
  },
  {
    id: "run-wellfound-0840",
    source: "Wellfound",
    when: "12 Oct 2026, 08:40 AM",
    status: "Blocked",
    duration: "18s",
    jobs: "12 jobs collected",
    error: "Rate limit reached",
    details: "The source temporarily blocked requests after its rate limit was reached.",
  },
];

const initialAiTasks = [
  {
    id: "AI-2048",
    type: "Resume Analysis",
    userId: 1,
    status: "Completed",
    durationSeconds: 3.2,
    cost: 1.84,
    createdAt: "13 Oct 2026, 10:42 AM",
    completedAt: "13 Oct 2026, 10:42 AM",
    input: { file: "rahul-sharma-resume.pdf", pages: 2, provider: "OpenAI" },
    result: "Resume parsed successfully. Overall score 86/100; 4 improvement suggestions generated.",
    error: "",
  },
  {
    id: "AI-2047",
    type: "Job Matching",
    userId: 2,
    status: "Failed",
    durationSeconds: 8.5,
    cost: 0.92,
    createdAt: "13 Oct 2026, 10:38 AM",
    completedAt: "13 Oct 2026, 10:38 AM",
    input: { area: "AI / ML", locations: ["Bengaluru", "Remote"], provider: "Gemini" },
    result: "",
    error: "Provider timeout while fetching ranked job candidates. No user data was changed.",
  },
  {
    id: "AI-2046",
    type: "Resume Scoring",
    userId: 3,
    status: "Processing",
    durationSeconds: 2.1,
    cost: 0.64,
    createdAt: "13 Oct 2026, 10:45 AM",
    completedAt: "",
    input: { file: "vikram-kumar-resume.pdf", targetRole: "Data Scientist", provider: "OpenAI" },
    result: "",
    error: "",
  },
  {
    id: "AI-2045",
    type: "Resume Analysis",
    userId: 6,
    status: "Queued",
    durationSeconds: 0,
    cost: 0,
    createdAt: "13 Oct 2026, 10:47 AM",
    completedAt: "",
    input: { file: "sneha-rao-resume.pdf", pages: 1, provider: "Gemini" },
    result: "",
    error: "",
  },
];

const funnelStages = [
  { label: "Registered", users: 10000, color: "#9a88ff" },
  { label: "Resume uploaded", users: 7000, color: "#8978ff" },
  { label: "AI analysis completed", users: 5000, color: "#7a8cf4" },
  { label: "Used job matching", users: 3500, color: "#6c9be9" },
  { label: "Applied", users: 1800, color: "#609fc8" },
  { label: "Premium", users: 800, color: "#5abf9a" },
];

const featureAdoption = [
  { feature: "Resume Analysis", users: 5160, basic: 44, premium: 76, costPerUse: 1.84, monthlyChange: 8.2 },
  { feature: "Job Matching", users: 6840, basic: 62, premium: 91, costPerUse: 0.92, monthlyChange: 12.4 },
  { feature: "Resume Scoring", users: 3920, basic: 31, premium: 67, costPerUse: 0.64, monthlyChange: 4.8 },
  { feature: "Career Assistant", users: 2480, basic: 18, premium: 48, costPerUse: 0.38, monthlyChange: -2.1 },
];

/* =========================================================
   HELPERS
========================================================= */

function formatMoney(value) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

function parsePlanEndDate(dateString) {
  if (typeof dateString !== "string") return null;
  const [day, month, year] = dateString.split(" ");
  const monthIndex = new Date(`${month} 1, ${year}`).getMonth();

  if (Number.isNaN(monthIndex)) return null;

  return new Date(Number(year), monthIndex, Number(day));
}

function StatusBadge({ children, type }) {
  const className =
    type ||
    String(children)
      .toLowerCase()
      .replace(/\s+/g, "-");

  return <span className={`badge ${className}`}>{children}</span>;
}

function Icon({ icon: IconComponent }) {
  return (
    <span className="icon">
      <IconComponent size={18} strokeWidth={1.9} aria-hidden="true" />
    </span>
  );
}

/* =========================================================
   APP
========================================================= */

export default function App() {
  const [page, setPage] = useState("Dashboard");
  const [users, setUsers] = useState(() =>
    loadStoredValue("aifagen-users", usersData)
  );
  const [payments, setPayments] = useState(() =>
    loadStoredValue("aifagen-payments", paymentsData)
  );
  const [jobs, setJobs] = useState(() =>
    loadStoredValue("aifagen-jobs", jobsData)
  );
  const [sources, setSources] = useState(() =>
    loadStoredValue("aifagen-sources", sourcesData)
  );
  const [sourceRuns, setSourceRuns] = useState(() =>
    loadStoredValue("aifagen-source-runs", initialSourceRuns)
  );
  const [aiTasks, setAiTasks] = useState(() =>
    loadStoredValue("aifagen-ai-tasks", initialAiTasks)
  );
  const [internalJobs, setInternalJobs] = useState(() =>
    loadStoredValue("aifagen-internal-jobs", initialInternalJobs)
  );
  const [admins, setAdmins] = useState(() =>
    loadStoredValue("aifagen-admins", initialAdmins)
  );
  const [auditLogs, setAuditLogs] = useState(() =>
    loadStoredValue("aifagen-audit-log", [])
  );

  const [dark, setDark] = useState(
    localStorage.getItem("aifagen-theme") === "dark"
  );
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const [notificationOpen, setNotificationOpen] = useState(false);
  const [adminOpen, setAdminOpen] = useState(false);

  const [sidePanel, setSidePanel] = useState(null);
  const [modal, setModal] = useState(null);
  const [toast, setToast] = useState(null);
  const [copilotOpen, setCopilotOpen] = useState(false);

  function notify(message, variant = "success") {
    setToast({ id: Date.now(), message, variant });
  }

  useEffect(() => {
    if (!toast) return undefined;
    const timeout = window.setTimeout(() => setToast(null), 4200);
    return () => window.clearTimeout(timeout);
  }, [toast]);

  useEffect(() => {
    localStorage.setItem("aifagen-users", JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    localStorage.setItem("aifagen-payments", JSON.stringify(payments));
  }, [payments]);

  useEffect(() => {
    localStorage.setItem("aifagen-jobs", JSON.stringify(jobs));
  }, [jobs]);

  useEffect(() => {
    localStorage.setItem("aifagen-sources", JSON.stringify(sources));
  }, [sources]);

  useEffect(() => {
    localStorage.setItem("aifagen-source-runs", JSON.stringify(sourceRuns));
  }, [sourceRuns]);

  useEffect(() => {
    localStorage.setItem("aifagen-ai-tasks", JSON.stringify(aiTasks));
  }, [aiTasks]);

  useEffect(() => {
    localStorage.setItem("aifagen-internal-jobs", JSON.stringify(internalJobs));
  }, [internalJobs]);

  useEffect(() => {
    localStorage.setItem("aifagen-admins", JSON.stringify(admins));
  }, [admins]);

  useEffect(() => {
    localStorage.setItem("aifagen-audit-log", JSON.stringify(auditLogs));
  }, [auditLogs]);

  function recordAudit(action, target, before, after, reason) {
    setAuditLogs((current) => [
      {
        id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
        when: new Date().toLocaleString("en-IN"),
        admin: "admin@aifagen.com",
        action,
        target,
        before: JSON.stringify(before),
        after: JSON.stringify(after),
        reason,
      },
      ...current,
    ]);
  }

  function updateUser(userId, updates, reason) {
    const current = users.find((user) => user.id === userId);
    if (!current) throw new Error(`User ${userId} was not found.`);
    if (!reason.trim()) throw new Error("A reason for the profile change is required.");
    if (updates.area && !AREA_OPTIONS.includes(updates.area)) {
      throw new Error("Choose an area from the approved list.");
    }
    if (updates.plan && !PLAN_OPTIONS.includes(updates.plan)) {
      throw new Error("Choose a valid plan.");
    }
    if (updates.status && !USER_STATUS_OPTIONS.includes(updates.status)) {
      throw new Error("Choose a valid account status.");
    }
    if (updates.email && users.some((user) =>
      user.id !== userId && user.email.toLowerCase() === updates.email.trim().toLowerCase()
    )) {
      throw new Error("A user with this email already exists.");
    }
    if (updates.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(updates.email.trim())) {
      throw new Error("Enter a valid email address.");
    }
    const next = { ...current, ...updates };
    setUsers((items) =>
      items.map((user) => (user.id === userId ? next : user))
    );
    recordAudit("Edited user profile", current.email, current, next, reason);
    notify("User profile updated.");
  }

  function addUser(user) {
    if (!user.name.trim() || !user.email.trim() || !user.mobile.trim()) {
      throw new Error("Name, email, and mobile are required.");
    }
    if (!AREA_OPTIONS.includes(user.area)) {
      throw new Error("Choose an area from the approved list.");
    }
    if (!user.reason?.trim()) throw new Error("A reason for adding this user is required.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email.trim())) {
      throw new Error("Enter a valid email address.");
    }
    if (users.some((item) => item.email.toLowerCase() === user.email.toLowerCase())) {
      throw new Error("A user with this email already exists.");
    }
    const { reason, ...profileFields } = user;
    const created = {
      ...profileFields,
      id: Date.now(),
      plan: "None",
      status: "Inactive",
      ai: 0,
      joined: new Date().toLocaleDateString("en-GB", {
        day: "2-digit", month: "short", year: "numeric",
      }),
      profile: { headline: "", location: "" },
      lastPaymentId: null,
      resumes: [],
      applications: [],
      savedJobs: [],
      preferences: [],
    };
    setUsers((current) => [created, ...current]);
    recordAudit("Added user", created.email, null, created, reason);
    notify("User added successfully.");
  }

  function changeUserPlan(userId, plan, status, reason) {
    if (!PLAN_OPTIONS.includes(plan)) {
      throw new Error("Choose a valid plan.");
    }
    if (!USER_STATUS_OPTIONS.includes(status)) {
      throw new Error("Choose a valid account status.");
    }
    if (!reason.trim()) throw new Error("A reason for the plan change is required.");
    const current = users.find((user) => user.id === userId);
    if (!current) throw new Error(`User ${userId} was not found.`);
    const next = { ...current, plan, status };
    setUsers((items) =>
      items.map((user) => (user.id === userId ? next : user))
    );
    recordAudit("Changed plan/status", current.email, {
      plan: current.plan,
      status: current.status,
    }, {
      plan,
      status,
    }, reason);
    notify("User plan and status updated.");
  }

  function manageSubscription(userId, action, reason) {
    const current = users.find((user) => user.id === userId);
    if (!current) throw new Error(`User ${userId} was not found.`);
    if (!reason.trim()) throw new Error("A reason is required for subscription changes.");

    let next;
    if (action === "cancel") {
      next = { ...current, status: "Cancelled" };
    } else if (action === "extend") {
      const currentEnd = parsePlanEndDate(current.planEnd);
      const baseDate = currentEnd && currentEnd > new Date() ? currentEnd : new Date();
      baseDate.setDate(baseDate.getDate() + 30);
      next = {
        ...current,
        status: "Active",
        planEnd: baseDate.toLocaleDateString("en-GB", {
          day: "2-digit", month: "short", year: "numeric",
        }),
      };
    } else {
      throw new Error("Unsupported subscription action.");
    }

    setUsers((items) => items.map((user) => user.id === userId ? next : user));
    recordAudit(
      action === "cancel" ? "Cancelled subscription" : "Extended subscription",
      current.email,
      { plan: current.plan, status: current.status, planEnd: current.planEnd },
      { plan: next.plan, status: next.status, planEnd: next.planEnd },
      reason.trim()
    );
    notify(action === "cancel" ? "Subscription cancelled." : "Subscription extended by 30 days.");
  }

  function bulkUpdateUserStatus(userIds, status, reason) {
    if (!USER_STATUS_OPTIONS.includes(status)) {
      throw new Error("Choose a valid account status.");
    }
    if (!reason.trim()) throw new Error("A reason for the bulk change is required.");

    const selectedUsers = users.filter((user) => userIds.includes(user.id));
    if (!selectedUsers.length) throw new Error("Select at least one user.");

    const changedUsers = selectedUsers.filter((user) => user.status !== status);
    if (!changedUsers.length) throw new Error("The selected users already have that status.");

    setUsers((current) => current.map((user) =>
      userIds.includes(user.id) ? { ...user, status } : user
    ));
    changedUsers.forEach((user) =>
      recordAudit(
        "Bulk changed user status",
        user.email,
        { status: user.status },
        { status },
        reason.trim()
      )
    );
    notify(`${changedUsers.length} user status${changedUsers.length === 1 ? "" : "es"} updated.`);
  }

  function retrySource(sourceName) {
    const source = sources.find((item) => item.name === sourceName);
    if (!source) throw new Error(`Job source ${sourceName} was not found.`);
    if (source.status === "Running") return;

    const runId = `simulated-${Date.now()}`;
    const runTime = new Date().toLocaleString("en-IN");
    setSources((current) => current.map((item) =>
      item.name === sourceName
        ? { ...item, status: "Running", note: "Simulated retry in progress..." }
        : item
    ));
    setSourceRuns((current) => [{
      id: runId,
      source: sourceName,
      when: runTime,
      status: "Running",
      duration: "In progress",
      jobs: "—",
      error: "",
      details: "This is a local simulation; no external source was contacted.",
    }, ...current]);

    window.setTimeout(() => {
      const completedSource = {
        ...source,
        status: "Working",
        lastRun: runTime,
        duration: "Simulated",
        note: "Simulated retry completed",
      };
      setSources((current) => current.map((item) =>
        item.name === sourceName ? completedSource : item
      ));
      setSourceRuns((current) => current.map((run) =>
        run.id === runId
          ? {
              ...run,
              status: "Completed (simulated)",
              duration: "1s",
              jobs: "0 jobs collected",
              details: "The simulated retry completed. No external source was contacted and no job records were changed.",
            }
          : run
      ));
      recordAudit(
        "Simulated job source retry",
        sourceName,
        { status: source.status, note: source.note },
        { status: "Working", note: "Simulated retry completed" },
        "Local simulated retry workflow"
      );
      notify(`${sourceName} retry simulation completed.`);
    }, 900);
  }

  function retryAiTask(taskId) {
    const task = aiTasks.find((item) => item.id === taskId);
    if (!task) throw new Error(`AI task ${taskId} was not found.`);
    if (task.status !== "Failed") {
      throw new Error("Only failed tasks can be retried.");
    }

    const retryTime = new Date().toLocaleString("en-IN");
    setAiTasks((current) => current.map((item) =>
      item.id === taskId
        ? { ...item, status: "Processing", createdAt: retryTime, completedAt: "", error: "" }
        : item
    ));
    recordAudit(
      "Retried AI task (simulated)",
      taskId,
      { status: task.status, error: task.error },
      { status: "Processing" },
      "Local simulated retry"
    );

    window.setTimeout(() => {
      const completedAt = new Date().toLocaleString("en-IN");
      const completedTask = {
        ...task,
        status: "Completed (simulated)",
        durationSeconds: 1.4,
        completedAt,
        cost: 0.92,
        error: "",
        result: "Simulated retry completed successfully. No external AI provider was contacted.",
      };
      setAiTasks((current) => current.map((item) =>
        item.id === taskId ? completedTask : item
      ));
      recordAudit(
        "Completed simulated AI task retry",
        taskId,
        { status: "Processing" },
        { status: completedTask.status, completedAt },
        "Local simulated retry"
      );
      notify("AI task retry simulation completed.");
    }, 1000);
  }

  function processRefund(paymentId, amount, reason) {
    const payment = payments.find((item) => item.id === paymentId);
    if (!payment) throw new Error(`Payment ${paymentId} was not found.`);
    const amountCents = Math.round(payment.amount * 100);
    const refundedCents = Math.round((payment.refundedAmount || 0) * 100);
    const refundCents = Math.round(amount * 100);
    const remaining = (amountCents - refundedCents) / 100;
    if (payment.status !== "Paid" && payment.status !== "Partially refunded") {
      throw new Error("Only paid or partially refunded payments can be refunded.");
    }
    if (!Number.isFinite(amount) || amount <= 0 || !Number.isInteger(amount * 100) || refundCents <= 0 || refundCents > amountCents - refundedCents) {
      throw new Error(`Refund must be greater than zero and no more than ${formatMoney(remaining)}.`);
    }
    if (!reason.trim()) throw new Error("A refund reason is required.");

    const refundedAmount = (refundedCents + refundCents) / 100;
    const status = refundedCents + refundCents === amountCents
      ? "Refunded"
      : "Partially refunded";
    const next = { ...payment, refundedAmount, status, refundReason: reason.trim() };
    setPayments((items) =>
      items.map((item) => (item.id === paymentId ? next : item))
    );
    recordAudit("Refunded payment", paymentId, payment, next, reason.trim());
    notify(`Refund of ${formatMoney(refundedAmount)} recorded.`);
  }

  function toggleTheme() {
    const next = !dark;

    setDark(next);
    localStorage.setItem(
      "aifagen-theme",
      next ? "dark" : "light"
    );
  }

  function openAdmin() {
    setAdminOpen((value) => !value);
    setNotificationOpen(false);
  }

  function openNotifications() {
    setNotificationOpen((value) => !value);
    setAdminOpen(false);
  }

  function exportCSV(rows, filename) {
    if (!rows.length) return;

    const headers = Object.keys(rows[0]);

    const csv = [
      headers.join(","),
      ...rows.map((row) =>
        headers
          .map((key) =>
            `"${String(row[key] ?? "").replace(/"/g, '""')}"`
          )
          .join(",")
      ),
    ].join("\n");

    const blob = new Blob([csv], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = filename;
    link.click();

    URL.revokeObjectURL(url);
  }

  return (
    <div className={`app ${dark ? "dark" : "light"} ${sidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>

      <Sidebar
        page={page}
        setPage={setPage}
        dark={dark}
        toggleTheme={toggleTheme}
        sidebarOpen={sidebarOpen}
        toggleSidebar={() => setSidebarOpen((open) => !open)}
        notify={notify}
      />

      <main className="main">

        <TopBar
          notificationOpen={notificationOpen}
          setNotificationOpen={setNotificationOpen}
          adminOpen={adminOpen}
          setAdminOpen={setAdminOpen}
          openNotifications={openNotifications}
          openAdmin={openAdmin}
          setPage={setPage}
          toggleTheme={toggleTheme}
          dark={dark}
          notify={notify}
          users={users}
          payments={payments}
          jobs={jobs}
          sources={sources}
          onSelectSearchResult={(result) => {
            setPage(result.page);
            setNotificationOpen(false);
            setAdminOpen(false);
            if (result.type === "user") {
              setSidePanel({
                type: "user",
                user: result.record,
                lastPayment: payments.find((payment) => payment.id === result.record.lastPaymentId),
              });
            } else if (result.type === "payment") {
              setSidePanel({ type: "payment", payment: result.record });
            } else if (result.type === "job") {
              setSidePanel({ type: "job", job: result.record });
            } else {
              setSidePanel({ type: "source", source: result.record });
            }
          }}
        />

        <div className="content">

          {page === "Dashboard" && (
            <Dashboard
              setPage={setPage}
              setSidePanel={setSidePanel}
              exportCSV={exportCSV}
              users={users}
              jobs={jobs}
              payments={payments}
              sources={sources}
              aiTasks={aiTasks}
              auditLogs={auditLogs}
              notify={notify}
            />
          )}

          {page === "Users" && (
            <UsersPage
              setSidePanel={setSidePanel}
              setModal={setModal}
              exportCSV={exportCSV}
              users={users}
              payments={payments}
              onBulkUserStatus={(userIds, status, reason) =>
                bulkUpdateUserStatus(userIds, status, reason)
              }
            />
          )}

          {page === "Payments" && (
            <PaymentsPage
              setSidePanel={setSidePanel}
              setModal={setModal}
              exportCSV={exportCSV}
              payments={payments}
              users={users}
            />
          )}

          {page === "Revenue Overview" && (
            <RevenueOverviewPage
              payments={payments}
              users={users}
              setPage={setPage}
            />
          )}

          {page === "Subscriptions" && (
            <SubscriptionsPage
              payments={payments}
              users={users}
              setSidePanel={setSidePanel}
              setModal={setModal}
              setPage={setPage}
              manageSubscription={manageSubscription}
            />
          )}

          {page === "Jobs" && (
            <JobsPage
              jobs={jobs}
              setJobs={setJobs}
              recordAudit={recordAudit}
              setModal={setModal}
            />
          )}

          {page === "Internal Jobs" && (
            <InternalJobsPage
              setModal={setModal}
              internalJobs={internalJobs}
              setInternalJobs={setInternalJobs}
              recordAudit={recordAudit}
              notify={notify}
            />
          )}

          {page === "Job Sources" && (
            <SourcesPage
              sources={sources}
              sourceRuns={sourceRuns}
              setSidePanel={setSidePanel}
              retrySource={retrySource}
            />
          )}

          {page === "AI Usage" && (
            <AIUsagePage users={users} />
          )}

          {page === "Product Analytics" && (
            <ProductAnalyticsPage />
          )}

          {page === "Engagement" && (
            <EngagementPage
              users={users}
              auditLogs={auditLogs}
              setSidePanel={setSidePanel}
              payments={payments}
            />
          )}

          {page === "AI Processing" && (
            <AIProcessingPage
              tasks={aiTasks}
              users={users}
              setSidePanel={setSidePanel}
              retryAiTask={retryAiTask}
            />
          )}

          {page === "Job Quality" && (
            <JobQualityPage
              jobs={jobs}
              setJobs={setJobs}
              setModal={setModal}
              setSidePanel={setSidePanel}
              recordAudit={recordAudit}
            />
          )}

          {page === "Audit Log" && (
            <AuditPage
              exportCSV={exportCSV}
              logs={auditLogs}
            />
          )}

          {page === "Settings" && (
            <SettingsPage
              admins={admins}
              setAdmins={setAdmins}
              recordAudit={recordAudit}
              setModal={setModal}
              notify={notify}
            />
          )}

          {page !== "Dashboard" && page !== "Settings" && (
            <PeriodComparison
              page={page}
              users={users}
              payments={payments}
              jobs={jobs}
              internalJobs={internalJobs}
              sources={sources}
              aiTasks={aiTasks}
              auditLogs={auditLogs}
            />
          )}

        </div>

      </main>

      {sidePanel && (
        <SidePanel
          data={sidePanel}
          close={() => setSidePanel(null)}
          setModal={setModal}
          users={users}
          payments={payments}
          sources={sources}
          sourceRuns={sourceRuns}
          retrySource={retrySource}
          aiTasks={aiTasks}
          retryAiTask={retryAiTask}
        />
      )}

      {modal && (
        <Modal
          type={modal}
          close={() => setModal(null)}
          onAddUser={addUser}
          onUpdateUser={updateUser}
          onChangePlan={changeUserPlan}
          onRefund={processRefund}
          notify={notify}
        />
      )}

      {toast && <Toast key={toast.id} toast={toast} close={() => setToast(null)} />}

      <AdminCopilot
        open={copilotOpen}
        setOpen={setCopilotOpen}
        page={page}
        users={users}
        payments={payments}
        jobs={jobs}
        setJobs={setJobs}
        sources={sources}
        sourceRuns={sourceRuns}
        aiTasks={aiTasks}
        internalJobs={internalJobs}
        auditLogs={auditLogs}
        setPage={setPage}
        setModal={setModal}
        setSidePanel={setSidePanel}
        notify={notify}
        recordAudit={recordAudit}
      />

    </div>
  );
}

/* =========================================================
   SIDEBAR
========================================================= */

function Sidebar({
  page,
  setPage,
  dark,
  toggleTheme,
  sidebarOpen,
  toggleSidebar,
  notify,
}) {
  const groups = [
    {
      title: "Admin Workspace",
      items: ["Dashboard", "Users"],
    },
    {
      title: "Revenue & Billing",
      items: ["Revenue Overview", "Subscriptions", "Payments"],
    },
    {
      title: "Job Management",
      items: ["Jobs", "Job Quality", "Internal Jobs", "Job Sources"],
    },
    {
      title: "Platform Operations",
      items: ["Product Analytics", "Engagement", "AI Usage", "AI Processing", "Audit Log", "Settings"],
    },
  ];

  const icons = {
    Dashboard: LayoutDashboard,
    Users: Users,
    Payments: CreditCard,
    "Revenue Overview": TrendingUp,
    Subscriptions: BadgeCheck,
    Jobs: BriefcaseBusiness,
    "Internal Jobs": Building2,
    "Job Sources": Radio,
    "AI Usage": Sparkles,
    "Product Analytics": BarChart3,
    Engagement: UserX,
    "AI Processing": Activity,
    "Job Quality": SearchCheck,
    "Audit Log": ClipboardList,
    Settings: Settings,
  };
  const activeGroup = groups.find((group) => group.items.includes(page))?.title;
  const [groupOverride, setGroupOverride] = useState(null);
  const openGroup = groupOverride?.page === page
    ? groupOverride.group
    : activeGroup || groups[0].title;

  function signOut() {
    notify("Sign out will be available when authentication is connected.", "info");
  }

  return (
    <aside className={`sidebar ${sidebarOpen ? "expanded" : "compact"}`}>

      <div className="brand">
        <button
          className="brand-identity brand-toggle"
          type="button"
          aria-label={sidebarOpen ? "Close sidebar" : "Open sidebar"}
          aria-expanded={sidebarOpen}
          title={sidebarOpen ? "Close sidebar" : "Open sidebar"}
          onClick={toggleSidebar}
        >
          <img className="brand-logo" src="/aifagen-logo.png" alt="" />
          <div className="brand-copy">
            <div className="brand-sub">Admin Portal</div>
          </div>
        </button>
      </div>

      <nav className="navigation">

        {groups.map((group) => (
          <div className={`nav-group ${openGroup === group.title ? "open" : ""}`} key={group.title}>
            <button
              className="nav-group-title"
              type="button"
              aria-label={group.title}
              aria-expanded={openGroup === group.title}
              onClick={() => setGroupOverride({
                page,
                group: openGroup === group.title ? "" : group.title,
              })}
              title={!sidebarOpen ? group.title : undefined}
            >
              <Icon icon={icons[group.items[0]]} />
              <span>{group.title}</span>
              <ChevronDown size={14} aria-hidden="true" />
            </button>
            {openGroup === group.title && (
              <div className="nav-group-items">
                {group.items.map((item) => (
                  <button
                    key={item}
                    className={`nav-item ${page === item ? "active" : ""}`}
                    title={sidebarOpen ? undefined : item}
                    aria-label={item}
                    aria-current={page === item ? "page" : undefined}
                    onClick={() => setPage(item)}
                  >
                    <Icon icon={icons[item]} />
                    <span>{item}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}

      </nav>

      <div className="sidebar-bottom">

        <div className="sidebar-admin">
          <div className="sidebar-admin-avatar">A</div>
          <div className="sidebar-admin-info">
            <strong>Admin</strong>
            <span>admin@aifagen.com</span>
          </div>
        </div>

        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
          title={!sidebarOpen ? (dark ? "Switch to light mode" : "Switch to dark mode") : undefined}
        >
          <span className="theme-icon">
            {dark ? (
              <Sun size={16} aria-hidden="true" />
            ) : (
              <Moon size={16} aria-hidden="true" />
            )}
          </span>

          <span className="theme-label">
            {dark ? "Light mode" : "Dark mode"}
          </span>

          <span className={`theme-switch ${dark ? "on" : ""}`}>
            <span />
          </span>

        </button>

        <button
          className="sidebar-signout"
          onClick={signOut}
          title={!sidebarOpen ? "Sign out" : undefined}
          aria-label="Sign out"
        >
          <LogOut size={16} aria-hidden="true" />
          <span>Sign out</span>
        </button>

      </div>

    </aside>
  );
}

/* =========================================================
   TOP BAR
========================================================= */

function TopBar({
  notificationOpen,
  adminOpen,
  openNotifications,
  openAdmin,
  setPage,
  toggleTheme,
  dark,
  notify,
  users,
  payments,
  jobs,
  sources,
  onSelectSearchResult,
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);

  const searchResults = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return [];

    const records = [
      ...users.map((user) => ({
        type: "user",
        label: user.name,
        description: `${user.email} · ${user.mobile}`,
        page: "Users",
        record: user,
      })),
      ...payments.map((payment) => ({
        type: "payment",
        label: payment.id,
        description: `${payment.user} · ${formatMoney(payment.amount)} · ${payment.status}`,
        page: "Payments",
        record: payment,
      })),
      ...jobs.map((job) => ({
        type: "job",
        label: job.title,
        description: `${job.company} · ${job.location} · ${job.source}`,
        page: "Jobs",
        record: job,
      })),
      ...sources.map((source) => ({
        type: "source",
        label: source.name,
        description: `Job source · ${source.status} · ${source.note}`,
        page: "Job Sources",
        record: source,
      })),
    ];

    return records
      .filter((record) =>
        `${record.label} ${record.description}`.toLowerCase().includes(query)
      )
      .slice(0, 8);
  }, [jobs, payments, searchQuery, sources, users]);

  function selectSearchResult(result) {
    onSelectSearchResult(result);
    setSearchQuery("");
    setSearchOpen(false);
  }

  return (
    <header className="topbar">
      <div className="topbar-search">
        <Search size={17} aria-hidden="true" />
        <input
          type="search"
          aria-label="Search users, payments, jobs, and job sources"
          aria-controls="global-search-results"
          aria-expanded={searchOpen && Boolean(searchQuery.trim())}
          placeholder="Search users, payments, jobs..."
          value={searchQuery}
          onFocus={() => setSearchOpen(true)}
          onBlur={() => setSearchOpen(false)}
          onChange={(event) => {
            setSearchQuery(event.target.value);
            setSearchOpen(true);
          }}
          onKeyDown={(event) => {
            if (event.key === "Escape") setSearchOpen(false);
            if (event.key === "Enter" && searchResults[0]) {
              selectSearchResult(searchResults[0]);
            }
          }}
        />
        {searchQuery && (
          <button
            className="search-clear"
            aria-label="Clear search"
            onClick={() => setSearchQuery("")}
          >
            ×
          </button>
        )}
        {searchOpen && searchQuery.trim() && (
          <div className="global-search-results" id="global-search-results" role="listbox">
            {searchResults.length ? searchResults.map((result) => (
              <button
                key={`${result.type}-${result.record.id || result.record.name}`}
                className="global-search-result"
                role="option"
                aria-selected="false"
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => selectSearchResult(result)}
              >
                <span className={`global-search-type ${result.type}`}>
                  {result.type === "source" ? "Source" : result.type}
                </span>
                <span className="global-search-copy">
                  <strong>{result.label}</strong>
                  <small>{result.description}</small>
                </span>
                <ArrowRight size={15} aria-hidden="true" />
              </button>
            )) : (
              <p className="global-search-empty">No matching records found.</p>
            )}
          </div>
        )}
      </div>

      <div className="topbar-actions">

        <button
          className="notification-button"
          aria-label="Notifications"
          onClick={openNotifications}
        >
          <Bell size={19} strokeWidth={1.9} aria-hidden="true" />
          <span className="notification-dot" />
        </button>

        <button
          className="admin-profile"
          onClick={openAdmin}
        >
          <div className="avatar">A</div>

          <div className="admin-profile-info">
            <strong>Admin</strong>
            <small>Administrator</small>
          </div>

          <span className="admin-chevron">
            <ChevronDown
              size={16}
              className={adminOpen ? "rotate-icon" : ""}
              aria-hidden="true"
            />
          </span>
        </button>

      </div>

      {notificationOpen && (
        <div className="notification-menu">

          <div className="notification-header">
            <strong>Notifications</strong>
            <span>3 new</span>
          </div>

          <div className="notification-item">
            <div className="notification-icon red">
              <AlertCircle size={17} aria-hidden="true" />
            </div>

            <div>
              <strong>Payment failed</strong>
              <p>PAY-1004 needs attention.</p>
            </div>
          </div>

          <div className="notification-item">
            <div className="notification-icon orange">
              <RefreshCw size={16} aria-hidden="true" />
            </div>

            <div>
              <strong>Job source issue</strong>
              <p>Naukri authentication failed.</p>
            </div>
          </div>

          <div className="notification-item">
            <div className="notification-icon blue">
              <Info size={17} aria-hidden="true" />
            </div>

            <div>
              <strong>New user</strong>
              <p>A new user joined today.</p>
            </div>
          </div>

        </div>
      )}

      {adminOpen && (
        <div className="admin-menu">

          <div className="admin-menu-header">

            <div className="admin-menu-avatar">
              A
            </div>

            <div>
              <strong>Admin</strong>
              <span>admin@aifagen.com</span>
            </div>

          </div>

          <div className="menu-divider" />

          <button
            onClick={() => {
              setPage("Settings");
            }}
          >
            <span><UserRound size={16} aria-hidden="true" /></span>
            Profile
          </button>

          <div className="menu-divider" />

          <button onClick={toggleTheme}>
            <span>
              {dark ? (
                <Sun size={16} aria-hidden="true" />
              ) : (
                <Moon size={16} aria-hidden="true" />
              )}
            </span>
            {dark ? "Light mode" : "Dark mode"}
          </button>

          <button
            className="signout-item"
            onClick={() => notify("Sign out will be available when authentication is connected.", "info")}
          >
            <span><LogOut size={16} aria-hidden="true" /></span>
            Sign out
          </button>

        </div>
      )}

    </header>
  );
}

/* =========================================================
   PAGE HEADER
========================================================= */

function PageHeader({
  title,
  subtitle,
  actions,
  className = "",
}) {
  return (
    <div className={`page-header ${className}`.trim()}>

      <div>
        {className.includes("dashboard") && (
          <span className="page-eyebrow">AIFAGEN ADMIN · OVERVIEW</span>
        )}
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>

      {actions && (
        <div className="page-actions">
          {actions}
        </div>
      )}

    </div>
  );
}

const comparisonScenarios = {
  overview: {
    heading: "Platform performance",
    metrics: [
      { label: "Total users", value: 12842, format: "count", changes: { week: 2.6, month: 8.4 } },
      { label: "Revenue", value: 842000, format: "money", changes: { week: -3.2, month: 14.3 } },
      { label: "At-risk users", value: 427, format: "count", changes: { week: 4.1, month: -3.2 }, inverse: true },
    ],
  },
  users: {
    heading: "User growth & retention",
    metrics: [
      { label: "Active users", value: 10932, format: "count", changes: { week: 1.8, month: 5.1 } },
      { label: "New registrations", value: 1284, format: "count", changes: { week: 6.2, month: 8.4 } },
      { label: "At-risk users", value: 427, format: "count", changes: { week: 4.1, month: -3.2 }, inverse: true },
    ],
  },
  revenue: {
    heading: "Revenue & payment performance",
    metrics: [
      { label: "Revenue", value: 684000, format: "money", changes: { week: -8.2, month: 12.8 } },
      { label: "Failed payment value", value: 24820, format: "money", changes: { week: 18, month: 6.4 }, inverse: true },
      { label: "Refunds", value: 12400, format: "money", changes: { week: 4.5, month: -2.8 }, inverse: true },
    ],
  },
  subscriptions: {
    heading: "Subscription movement",
    metrics: [
      { label: "Active subscribers", value: 4892, format: "count", changes: { week: 1.6, month: 6.8 } },
      { label: "Expiring soon", value: 127, format: "count", changes: { week: 8.5, month: -3.1 }, inverse: true },
      { label: "Cancellations", value: 284, format: "count", changes: { week: 7, month: 2.4 }, inverse: true },
    ],
  },
  jobs: {
    heading: "Job inventory movement",
    metrics: [
      { label: "Visible jobs", value: 17892, format: "count", changes: { week: 2.3, month: 4.6 } },
      { label: "New listings", value: 1284, format: "count", changes: { week: 8.2, month: 11.4 } },
      { label: "Hidden jobs", value: 528, format: "count", changes: { week: -2.1, month: -5.4 }, inverse: true },
    ],
  },
  internalJobs: {
    heading: "Internal job pipeline",
    metrics: [
      { label: "Live roles", value: 18, format: "count", changes: { week: 5.9, month: 12.5 } },
      { label: "Draft roles", value: 2, format: "count", changes: { week: 0, month: -33.3 }, inverse: true },
      { label: "Roles needing review", value: 4, format: "count", changes: { week: -20, month: -11.1 }, inverse: true },
    ],
  },
  sources: {
    heading: "Job source reliability",
    metrics: [
      { label: "Working sources", value: 18, format: "count", changes: { week: 5.9, month: 12.5 } },
      { label: "Sources needing attention", value: 3, format: "count", changes: { week: 50, month: -25 }, inverse: true },
      { label: "Collection success", value: 94.2, format: "percent", changes: { week: -2.4, month: 1.8 } },
    ],
  },
  ai: {
    heading: "AI usage & reliability",
    metrics: [
      { label: "AI calls", value: 124820, format: "count", changes: { week: 6.8, month: 14.8 } },
      { label: "Estimated AI cost", value: 18420, format: "money", changes: { week: 9.2, month: 7.4 }, inverse: true },
      { label: "Failed AI tasks", value: 18, format: "count", changes: { week: 12.5, month: -8.4 }, inverse: true },
    ],
  },
  audit: {
    heading: "Administrative activity",
    metrics: [
      { label: "Actions today", value: 184, format: "count", changes: { week: 4.2, month: 8.1 } },
      { label: "Actions this week", value: 1284, format: "count", changes: { week: 3.6, month: 8.1 } },
      { label: "High-risk actions", value: 12, format: "count", changes: { week: 20, month: -14.3 }, inverse: true },
    ],
  },
};

function PeriodComparison({ page, users, payments, jobs, internalJobs, sources, aiTasks, auditLogs }) {
  const [period, setPeriod] = useState("month");
  const group = page === "Users"
    ? "users"
    : ["Payments", "Revenue Overview"].includes(page)
      ? "revenue"
      : page === "Subscriptions"
        ? "subscriptions"
        : ["Jobs", "Job Quality"].includes(page)
          ? "jobs"
          : page === "Internal Jobs"
            ? "internalJobs"
            : page === "Job Sources"
              ? "sources"
              : ["AI Usage", "AI Processing"].includes(page)
                ? "ai"
                : ["Audit Log", "Settings"].includes(page)
                  ? "audit"
                  : "overview";
  const scenario = comparisonScenarios[group];
  const periodLabel = period === "week" ? "week" : "month";
  const nextPeriodLabel = period === "week" ? "next week" : "next month";
  const failedPayments = payments.filter((payment) => payment.status === "Failed");
  const refundedPayments = payments.filter((payment) => payment.status === "Refunded");
  const atRiskUsers = users.filter((user) => user.status === "Cancelled" || user.status === "Past due");
  const sourceIssues = sources.filter((source) => ["Failed", "Blocked", "Stalled", "No jobs"].includes(source.status));
  const failedTasks = aiTasks.filter((task) => task.status === "Failed");
  const signals = group === "revenue" || group === "subscriptions"
    ? [
        failedPayments.length
          ? `${failedPayments.length} failed payment${failedPayments.length === 1 ? "" : "s"} totaling ${formatMoney(failedPayments.reduce((sum, payment) => sum + payment.amount, 0))}`
          : "No failed payments in the current sample",
        refundedPayments.length
          ? `${refundedPayments.length} refunded transaction${refundedPayments.length === 1 ? "" : "s"} totaling ${formatMoney(refundedPayments.reduce((sum, payment) => sum + payment.amount, 0))}`
          : "No refunded transactions in the current sample",
        `${atRiskUsers.length} cancelled or past-due account${atRiskUsers.length === 1 ? "" : "s"} in the current sample`,
      ]
    : group === "users"
      ? [
          `${users.filter((user) => user.status === "Cancelled").length} cancelled account${users.filter((user) => user.status === "Cancelled").length === 1 ? "" : "s"} in the current sample`,
          `${users.filter((user) => user.status === "Past due").length} past-due account${users.filter((user) => user.status === "Past due").length === 1 ? "" : "s"}`,
          `${users.filter((user) => user.status === "Inactive").length} marked inactive`,
        ]
      : group === "sources"
        ? (sourceIssues.length
            ? sourceIssues.slice(0, 3).map((source) => `${source.name}: ${source.status}${source.note ? ` · ${source.note}` : ""}`)
            : ["No source issues are recorded in the current sample"])
        : group === "jobs"
          ? [
              `${jobs.filter((job) => job.visible).length} visible of ${jobs.length} jobs in the current sample`,
              `${jobs.filter((job) => !job.visible).length} hidden listings`,
              ...(sourceIssues.length ? sourceIssues.slice(0, 2).map((source) => `${source.name}: ${source.status}${source.note ? ` · ${source.note}` : ""}`) : ["No source issues are recorded"]),
            ]
          : group === "internalJobs"
            ? [
                `${internalJobs.filter((job) => job.visible).length} published and visible internal listings`,
                `${internalJobs.filter((job) => !job.visible).length} hidden or draft listings`,
                "Review publication status and listing freshness",
              ]
        : group === "ai"
          ? (failedTasks.length
              ? failedTasks.slice(0, 3).map((task) => `${task.type}: ${task.error || "failed task"}`)
              : ["No failed AI tasks are recorded in the current sample"])
          : group === "audit"
            ? (auditLogs.length
                ? auditLogs.slice(0, 3).map((entry) => `${entry.action} · ${entry.target}`)
                : ["No administrator changes have been recorded in the local audit log"])
            : [
                `${failedPayments.length} failed payment${failedPayments.length === 1 ? "" : "s"} (${formatMoney(failedPayments.reduce((sum, payment) => sum + payment.amount, 0))})`,
                `${atRiskUsers.length} cancelled or past-due account${atRiskUsers.length === 1 ? "" : "s"} in the current sample`,
                sourceIssues.length
                  ? `${sourceIssues.length} job sources have a status needing attention`
                  : "No job source issues in the current sample",
              ];

  function formatMetricValue(metric, value) {
    if (metric.format === "money") {
      return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0,
      }).format(Math.round(value));
    }
    if (metric.format === "percent") return `${value.toFixed(1)}%`;
    return Math.round(value).toLocaleString();
  }

  return (
    <section className="period-comparison" aria-label="Period comparison">
      <div className="period-comparison-heading">
        <div>
          <span className="period-comparison-eyebrow"><Activity size={14} aria-hidden="true" />PERFORMANCE REVIEW</span>
          <h2>{scenario.heading}</h2>
          <p>Illustrative current {periodLabel} compared with the previous {periodLabel}</p>
        </div>
        <div className="period-comparison-controls" role="group" aria-label="Comparison period">
          {[["week", "Week"], ["month", "Month"]].map(([key, label]) => (
            <button key={key} type="button" className={period === key ? "active" : ""} aria-pressed={period === key} onClick={() => setPeriod(key)}>{label}</button>
          ))}
        </div>
      </div>

      <div className="period-comparison-metrics">
        {scenario.metrics.map((metric) => {
          const change = metric.changes[period];
          const previous = metric.value / (1 + change / 100);
          const projection = metric.value * (1 + change / 100);
          const scale = Math.max(metric.value, previous, projection, 1);
          const isPositive = metric.inverse ? change < 0 : change > 0;
          const trendClass = isPositive ? "improving" : change === 0 ? "unchanged" : "declining";
          return (
            <article className="period-comparison-metric" key={metric.label}>
              <span>{metric.label}</span>
              <strong>{formatMetricValue(metric, metric.value)}</strong>
              <small>Previous: {formatMetricValue(metric, previous)}</small>
              <div className="comparison-bar-pair" aria-label={`Previous ${formatMetricValue(metric, previous)}; current ${formatMetricValue(metric, metric.value)}`}>
                <div className="comparison-bar previous"><i style={{ width: `${(previous / scale) * 100}%` }} /></div>
                <div className={`comparison-bar current ${isPositive ? "improving" : change === 0 ? "unchanged" : "declining"}`}><i style={{ width: `${(metric.value / scale) * 100}%` }} /></div>
                <div className="comparison-bar forecast"><i style={{ width: `${(projection / scale) * 100}%` }} /></div>
              </div>
              <b className={isPositive ? "improving" : change === 0 ? "unchanged" : "declining"}>
                {change > 0 ? "+" : ""}{change.toFixed(1)}% <span>vs previous {periodLabel}</span>
              </b>
              <div className={`comparison-forecast ${trendClass}`}>
                <small>Projected {nextPeriodLabel}</small>
                <strong>{formatMetricValue(metric, projection)}</strong>
              </div>
            </article>
          );
        })}
      </div>

      <div className="period-comparison-signals">
        <strong>Signals to investigate</strong>
        <ul>{signals.map((signal, index) => <li key={`${signal}-${index}`}>{signal}</li>)}</ul>
      </div>
      <div className="period-comparison-legend"><span><i className="previous" />Previous period</span><span><i className="current" />Current period</span><span><i className="forecast" />Trend projection</span></div>
      <p className="period-comparison-note">Projection repeats the displayed period-over-period rate for one period. All values are illustrative demo estimates, not date-filtered history or a statistical forecast. Dated historical snapshots are required for live predictions and verified losses.</p>
    </section>
  );
}

/* =========================================================
   DASHBOARD
========================================================= */

function Dashboard({
  setPage,
  setSidePanel,
  exportCSV,
  users,
  jobs,
  payments,
  sources,
  aiTasks,
  auditLogs,
  notify,
}) {
  const [period, setPeriod] = useState("7D");
  const [chartMode, setChartMode] = useState("Revenue");
  const [chartType, setChartType] = useState("Line");
  const [refreshing, setRefreshing] = useState(false);
  const currentHour = new Date().getHours();
  const greeting = currentHour < 12
    ? "Good morning"
    : currentHour < 18
      ? "Good afternoon"
      : "Good evening";

  function refreshDashboard() {
    if (refreshing) return;
    setRefreshing(true);
    window.setTimeout(() => {
      setRefreshing(false);
      notify("Dashboard is refreshed with the latest available sample data.", "info");
    }, 700);
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const renewalCutoff = new Date(today);
  renewalCutoff.setDate(renewalCutoff.getDate() + 30);
  const upcomingPlanEnds = users
    .filter((user) => {
      if (!user.planEnd || user.status !== "Active" || user.plan === "None") {
        return false;
      }

      const planEnd = parsePlanEndDate(user.planEnd);
      if (!planEnd) return false;
      return planEnd >= today && planEnd <= renewalCutoff;
    })
    .sort(
      (first, second) =>
        parsePlanEndDate(first.planEnd) - parsePlanEndDate(second.planEnd)
    )
    .slice(0, 4);
  const activeJobsCount = jobs.filter((job) => job.visible).length;
  const sourcesNeedingAttention = sources.filter(
    (source) => ["Failed", "Blocked", "Stalled"].includes(source.status)
  ).length;
  const activeUsersCount = users.filter((user) =>
    user.status === "Active" && daysSinceLastActive(user) < 30
  ).length;
  const payingUsersCount = users.filter((user) =>
    user.plan !== "None" && user.status === "Active"
  ).length;
  const failedPayments = payments.filter((payment) => payment.status === "Failed");
  const aiFailures = aiTasks.filter((task) => task.status === "Failed");
  const sevenDayCutoff = new Date(today);
  sevenDayCutoff.setDate(sevenDayCutoff.getDate() + 7);
  const actionAlerts = [
    ...payments
      .filter((payment) => payment.status === "Failed")
      .map((payment) => ({
        type: "payment",
        title: `Payment failed · ${payment.id}`,
        detail: `${payment.user} · ${formatMoney(payment.amount)}`,
        record: payment,
        page: "Payments",
        urgency: "Urgent",
      })),
    ...sources
      .filter((source) => source.status === "Failed" || source.status === "Blocked")
      .map((source) => ({
        type: "source",
        title: `${source.name} source ${source.status.toLowerCase()}`,
        detail: source.note,
        record: source,
        page: "Job Sources",
        urgency: "Needs attention",
      })),
    ...upcomingPlanEnds
      .filter((user) => {
        const endDate = parsePlanEndDate(user.planEnd);
        return endDate && endDate <= sevenDayCutoff;
      })
      .map((user) => ({
        type: "user",
        title: `${user.name} · plan ending soon`,
        detail: `${user.plan} plan ends ${user.planEnd}`,
        record: user,
        page: "Users",
        urgency: "Upcoming",
      })),
    ...aiFailures.map((task) => ({
      type: "ai-task",
      title: `${task.type} failed`,
      detail: task.error || `${task.id} · needs investigation`,
      record: task,
      page: "AI Processing",
      urgency: "Urgent",
    })),
  ].slice(0, 6);

  return (
    <>
      <PageHeader
        className="dashboard-page-header"
        title={`${greeting}, Admin`}
        subtitle="Here's what's happening across your platform today · metrics are sample estimates."
        actions={
          <>
            <button
              className="button secondary"
              onClick={() =>
                exportCSV(
                  [
                    {
                      metric: "Total Users",
                      value: "12842",
                    },
                    {
                      metric: "New Users",
                      value: "1284",
                    },
                    {
                      metric: "Paying Users",
                      value: "3426",
                    },
                    {
                      metric: "Revenue",
                      value: formatMoney(842000),
                    },
                  ],
                  "dashboard.csv"
                )
              }
            >
              <Download size={15} aria-hidden="true" />
              Export
            </button>

            <button
              className="button primary"
              onClick={refreshDashboard}
              disabled={refreshing}
            >
              <RefreshCw className={refreshing ? "spin" : ""} size={15} aria-hidden="true" />
              {refreshing ? "Refreshing…" : "Refresh"}
            </button>
          </>
        }
      />

      {refreshing ? (
        <div className="stats-grid" aria-label="Refreshing dashboard metrics" aria-busy="true">
          {Array.from({ length: 6 }, (_, index) => (
            <div className="stat-card stat-skeleton" key={index}>
              <span /><span /><span />
            </div>
          ))}
        </div>
      ) : (
        <div className="stats-grid">

          <StatCard
            title="Total users"
            value="12,842"
            change="+8.2% from last month"
            icon={Users}
            sparkline={[30, 35, 32, 44, 48, 54, 66, 72]}
          />

          <StatCard
            title="Active users"
            value={activeUsersCount.toLocaleString()}
            change="+5.1% vs last month"
            icon={Activity}
            sparkline={[24, 29, 30, 38, 34, 43, 48, 56]}
          />

          <StatCard
            title="Paying users"
            value={payingUsersCount.toLocaleString()}
            change="+6.8% vs last month"
            icon={CreditCard}
            sparkline={[22, 24, 28, 31, 36, 38, 44, 51]}
          />

          <StatCard
            title="Monthly revenue"
            value={formatMoney(842000)}
            change="+14.3% vs last month"
            icon={IndianRupee}
            sparkline={[18, 22, 21, 29, 32, 42, 45, 59]}
          />

          <StatCard
            title="AI calls"
            value="48,420"
            change="+14.8% vs last month"
            icon={Sparkles}
            sparkline={[18, 25, 28, 27, 39, 45, 51, 62]}
          />

          <StatCard
            title="Active jobs"
            value={activeJobsCount.toLocaleString()}
            change="+4.6% vs last month"
            icon={BriefcaseBusiness}
            sparkline={[34, 39, 36, 42, 49, 48, 57, 63]}
          />

        </div>
      )}

      <div className="dashboard-grid">

        <div className="card chart-card">

          <div className="card-header">

            <div>
              <h2>{chartMode === "Revenue" ? "Revenue performance" : "User growth"}</h2>
              <p>{chartMode === "Revenue" ? "Revenue, successful payments and refunds" : "New, active and paying users"}</p>
            </div>

            <div className="dashboard-chart-controls">
              <div className="chart-control-group" role="group" aria-label="Dashboard chart metric">
                {["Revenue", "User growth"].map((mode) => (
                  <button
                    className={chartMode === mode ? "active" : ""}
                    aria-pressed={chartMode === mode}
                    key={mode}
                    onClick={() => setChartMode(mode)}
                  >
                    {mode}
                  </button>
                ))}
              </div>
              <div className="chart-control-group chart-type-control" role="group" aria-label="Chart style">
                {["Line", "Area", "Bars"].map((type) => (
                  <button
                    className={chartType === type ? "active" : ""}
                    aria-pressed={chartType === type}
                    key={type}
                    onClick={() => setChartType(type)}
                  >
                    <span className={`chart-type-icon ${type.toLowerCase()}`} aria-hidden="true">
                      {type === "Bars" ? <><i /><i /><i /></> : <svg viewBox="0 0 18 14"><path d="M1 11 6 6l4 2 6-6" /><path d={type === "Area" ? "M1 11 6 6l4 2 6-6v11H1Z" : ""} className="chart-type-fill" /></svg>}
                    </span>
                    {type}
                  </button>
                ))}
              </div>
              <div className="chart-control-group period-control" role="group" aria-label="Chart period">
                {["7D", "30D", "90D", "1Y"].map((range) => (
                  <button
                    className={period === range ? "active" : ""}
                    aria-pressed={period === range}
                    key={range}
                    onClick={() => setPeriod(range)}
                  >
                    {range}
                  </button>
                ))}
              </div>
            </div>

          </div>

          <CommandTrendChart
            mode={chartMode}
            period={period}
            chartType={chartType}
          />

        </div>

        <div className="card plan-card">

          <div className="card-header">
            <div>
              <h2>Plan Split</h2>
              <p>Current users</p>
            </div>
          </div>

          <PlanSplitChart />

          <div className="plan-list">

            <div>
              <span>
                <i className="dot purple" />
                {planSegments[0].name}
              </span>
              <strong>{planSegments[0].percent}%</strong>
            </div>

            <div>
              <span>
                <i className="dot blue" />
                {planSegments[1].name}
              </span>
              <strong>{planSegments[1].percent}%</strong>
            </div>

            <div>
              <span>
                <i className="dot gray" />
                {planSegments[2].name}
              </span>
              <strong>{planSegments[2].percent}%</strong>
            </div>

          </div>

        </div>

      </div>

      <div className="dashboard-support-grid">
        <div className="dashboard-actions-column">
          <section className="card action-center">
            <div className="card-header">
              <div>
                <h2>Attention required</h2>
                <p>
                  {actionAlerts.length
                    ? `${actionAlerts.length} items need review`
                    : "No urgent admin actions"}
                </p>
              </div>
              <span className={`action-center-count ${actionAlerts.length ? "has-alerts" : ""}`}>
                {actionAlerts.length}
              </span>
            </div>

            <div className="attention-summary">
              {[
                { label: "Sources failed", count: sources.filter((source) => ["Failed", "Blocked", "Stalled"].includes(source.status)).length, page: "Job Sources", color: "danger" },
                { label: "Payments failed", count: failedPayments.length, page: "Payments", color: "warning" },
                { label: "Plans expiring", count: upcomingPlanEnds.length, page: "Payments", color: "neutral" },
                { label: "AI errors", count: aiFailures.length, page: "AI Processing", color: "danger" },
              ].map((item) => (
                <button
                  className={`attention-summary-item ${item.color}`}
                  key={item.label}
                  onClick={() => setPage(item.page)}
                >
                  <strong>{item.count}</strong>
                  <span>{item.label}</span>
                  <ArrowRight size={14} aria-hidden="true" />
                </button>
              ))}
            </div>

            {actionAlerts.length ? (
              <div className="action-alert-list">
                {actionAlerts.map((alert) => (
                  <button
                    className="action-alert"
                    key={`${alert.type}-${alert.record.id || alert.record.name}`}
                    onClick={() => {
                      setPage(alert.page);
                      if (alert.type === "payment") {
                        setSidePanel({ type: "payment", payment: alert.record });
                      } else if (alert.type === "source") {
                        setSidePanel({ type: "source", source: alert.record });
                      } else if (alert.type === "ai-task") {
                        setSidePanel({ type: "ai-task", task: alert.record });
                      } else {
                        setSidePanel({
                          type: "user",
                          user: alert.record,
                          lastPayment: payments.find(
                            (payment) => payment.id === alert.record.lastPaymentId
                          ),
                        });
                      }
                    }}
                  >
                    <span className={`action-alert-mark ${alert.type}`} />
                    <span className="action-alert-copy">
                      <strong>{alert.title}</strong>
                      <small>{alert.detail}</small>
                    </span>
                    <span className={`action-alert-tag ${alert.type}`}>
                      {alert.urgency}
                    </span>
                    <ArrowRight size={15} aria-hidden="true" />
                  </button>
                ))}
              </div>
            ) : (
              <p className="action-center-empty">
                Payments, sources, and upcoming renewals are all in good shape.
              </p>
            )}
          </section>

          <div className="quick-cards">
          <button
            className="quick-card"
            onClick={() => setPage("Users")}
          >
            <div>
              <strong>View Users</strong>
              <span>Manage accounts and plans</span>
            </div>

            <ArrowRight size={18} aria-hidden="true" />
          </button>

          <button
            className="quick-card"
            onClick={() => setPage("Job Sources")}
          >
            <div>
              <strong>{sourcesNeedingAttention} sources need attention</strong>
              <span>Review job collection health</span>
            </div>

            <ArrowRight size={18} aria-hidden="true" />
          </button>

          <button
            className="quick-card"
            onClick={() => setPage("Payments")}
          >
            <div>
              <strong>Upcoming renewals</strong>
              <span>{upcomingPlanEnds.length} plans end in the next 30 days</span>
            </div>

            <ArrowRight size={18} aria-hidden="true" />
          </button>
          </div>
        </div>

        <div className="dashboard-insights">
          <section className="card platform-health-card">
            <div className="card-header">
              <div>
                <h2>Platform health</h2>
                <p>Operational service overview</p>
              </div>
              <strong className="health-score">94%</strong>
            </div>
            {[
              ["API services", "Healthy"],
              ["Job collection", sourcesNeedingAttention ? "Attention" : "Healthy"],
              ["AI services", aiFailures.length ? "Attention" : "Healthy"],
              ["Payments", failedPayments.length ? "Attention" : "Healthy"],
              ["Email", "Attention"],
            ].map(([name, status]) => (
              <div className="platform-health-row" key={name}>
                <span><i className={`health-dot ${status === "Healthy" ? "healthy" : "attention"}`} />{name}</span>
                <strong className={status === "Healthy" ? "health-ok" : "health-warning"}>{status}</strong>
              </div>
            ))}
            <p className="analytics-footnote">Service status is a prototype indicator, not a live health check.</p>
          </section>

          <section className="card recent-activity-card">
            <div className="card-header">
              <div>
                <h2>Recent admin activity</h2>
                <p>Latest actions recorded in this portal</p>
              </div>
              <button className="text-button" onClick={() => setPage("Audit Log")}>View audit log</button>
            </div>
            {auditLogs.length ? auditLogs.slice(0, 5).map((log) => (
              <div className="recent-activity-row" key={log.id}>
                <span className="activity-dot" />
                <div><strong>{log.admin} {log.action.toLowerCase()}</strong><small>{log.target} · {log.when}</small></div>
              </div>
            )) : (
              <div className="recent-activity-empty"><ClipboardList size={19} aria-hidden="true" /> No admin actions recorded yet.</div>
            )}
          </section>

          <section className="card dashboard-renewals">
            <div className="card-header">
              <div>
                <h2>Plans ending soon</h2>
                <p>Next 30 days</p>
              </div>
              <button
                className="text-button dashboard-view-all"
                onClick={() => setPage("Payments")}
              >
                View all
                <ArrowRight size={14} aria-hidden="true" />
              </button>
            </div>

            {upcomingPlanEnds.length > 0 ? (
              <div className="dashboard-renewal-list">
                {upcomingPlanEnds.map((user) => (
                  <button
                    className="dashboard-renewal-row"
                    key={user.id}
                    onClick={() =>
                      setSidePanel({ type: "user", user })
                    }
                  >
                    <span className="dashboard-renewal-avatar">
                      {user.name.charAt(0)}
                    </span>
                    <span className="dashboard-renewal-user">
                      <strong>{user.name}</strong>
                      <small>{user.plan} plan</small>
                    </span>
                    <span className="dashboard-renewal-date">
                      {user.planEnd}
                    </span>
                    <ArrowRight size={15} aria-hidden="true" />
                  </button>
                ))}
              </div>
            ) : (
              <p className="dashboard-empty">
                No active plans are ending in the next 30 days.
              </p>
            )}
          </section>

          <section className="card job-health-card">
            <div className="job-health-heading">
              <span className="job-health-icon">
                <BriefcaseBusiness size={18} aria-hidden="true" />
              </span>
              <span>
                <strong>Job health</strong>
                <small>Platform overview</small>
              </span>
              <span className="job-health-link">
                View details
                <ArrowRight size={15} aria-hidden="true" />
              </span>
            </div>

            <span className="job-health-metrics">
              <button onClick={() => setPage("Jobs")}>
                <strong>{activeJobsCount}</strong>
                <small>Active jobs</small>
              </button>
              <span className="job-health-divider" />
              <button onClick={() => setPage("Job Sources")}>
                <strong className={sourcesNeedingAttention ? "needs-attention" : ""}>
                  {sourcesNeedingAttention}
                </strong>
                <small>Sources need attention</small>
              </button>
            </span>
          </section>
        </div>
      </div>
    </>
  );
}

/* =========================================================
   STAT CARD
========================================================= */

function StatCard({
  title,
  value,
  change,
  icon: IconComponent,
  sparkline = [],
}) {
  const needsAttention = /failed|attention|past due|inactive/i.test(`${title} ${change}`) ||
    /^-\d/.test(change.trim());
  const isPositive = !needsAttention && /\+\d/.test(change);

  return (
    <div className="stat-card">

      <div className="stat-top">
        <span>{title}</span>

        <div className="stat-icon">
          <IconComponent size={18} strokeWidth={1.9} aria-hidden="true" />
        </div>
      </div>

      <strong className={`stat-value ${String(value).length > 8 ? "compact" : ""}`}>
        {value}
      </strong>

      <span className={`stat-change ${needsAttention ? "stat-change-warning" : isPositive ? "stat-change-positive" : ""}`}>
        {change}
      </span>

      {sparkline.length > 1 && (
        <svg className="stat-sparkline" viewBox="0 0 100 26" preserveAspectRatio="none" aria-hidden="true">
          <polyline
            points={sparkline.map((point, index) => `${(index / (sparkline.length - 1)) * 100},${24 - (point / Math.max(...sparkline)) * 20}`).join(" ")}
            fill="none"
            stroke="var(--stat-accent)"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      )}

    </div>
  );
}

function CommandTrendChart({ mode, period, chartType = "Line" }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const pointsByPeriod = {
    "7D": {
      labels: ["Oct 8", "Oct 9", "Oct 10", "Oct 11", "Oct 12", "Oct 13", "Oct 14"],
      revenue: [[420, 510, 470, 630, 590, 720, 680], [350, 420, 410, 500, 470, 610, 570], [60, 80, 50, 90, 70, 110, 85]],
      users: [[42, 51, 47, 63, 59, 72, 68], [33, 36, 39, 42, 44, 49, 52], [9, 11, 12, 13, 15, 16, 18]],
    },
    "30D": {
      labels: ["Day 1", "Day 4", "Day 7", "Day 10", "Day 13", "Day 16", "Day 19", "Day 22", "Day 25", "Day 30"],
      revenue: [[380, 460, 425, 510, 570, 535, 620, 595, 710, 680], [310, 365, 350, 405, 450, 432, 500, 476, 570, 548], [48, 66, 59, 72, 81, 76, 92, 88, 108, 96]],
      users: [[38, 45, 42, 51, 57, 54, 62, 60, 71, 68], [29, 32, 35, 36, 40, 42, 45, 46, 50, 53], [8, 9, 10, 11, 12, 13, 14, 15, 17, 18]],
    },
    "90D": {
      labels: ["Wk 1", "Wk 2", "Wk 3", "Wk 4", "Wk 5", "Wk 6", "Wk 7", "Wk 8", "Wk 9", "Wk 10", "Wk 11", "Wk 12"],
      revenue: [[320, 390, 360, 445, 410, 520, 485, 570, 535, 640, 605, 720], [265, 310, 298, 356, 335, 415, 397, 460, 440, 515, 492, 585], [42, 51, 48, 63, 57, 72, 68, 80, 74, 95, 88, 108]],
      users: [[32, 39, 36, 45, 42, 52, 49, 57, 54, 64, 61, 72], [24, 27, 29, 32, 34, 37, 40, 42, 44, 48, 50, 54], [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 19]],
    },
    "6M": {
      labels: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
      revenue: [[390, 455, 510, 575, 655, 730], [315, 368, 420, 472, 538, 604], [48, 57, 65, 74, 88, 96]],
      users: [[39, 46, 51, 58, 66, 73], [28, 32, 37, 42, 47, 53], [7, 9, 11, 13, 16, 19]],
    },
    "1Y": {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      revenue: [[410, 445, 430, 520, 485, 570, 550, 625, 605, 710, 680, 790], [330, 355, 347, 415, 393, 460, 445, 500, 486, 566, 545, 632], [55, 62, 58, 72, 68, 81, 78, 92, 87, 105, 99, 118]],
      users: [[41, 45, 43, 52, 49, 57, 55, 63, 61, 71, 68, 79], [30, 32, 34, 36, 39, 41, 43, 46, 48, 51, 54, 57], [7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 19, 21]],
    },
  };
  const dataset = pointsByPeriod[period] || pointsByPeriod["7D"];
  const definitions = mode === "Revenue"
    ? [
      { name: "Revenue", color: "#7564ee", values: dataset.revenue[0] },
      { name: "Payments", color: "#24a982", values: dataset.revenue[1] },
      { name: "Refunds", color: "#e4a23a", values: dataset.revenue[2] },
    ]
    : mode === "Payments"
      ? [{ name: "Payments", color: "#24a982", values: dataset.revenue[1] }]
      : mode === "Refunds"
        ? [{ name: "Refunds", color: "#e4a23a", values: dataset.revenue[2] }]
        : [
      { name: "New users", color: "#7564ee", values: dataset.users[0] },
      { name: "Active users", color: "#24a982", values: dataset.users[1] },
      { name: "Paying users", color: "#e4a23a", values: dataset.users[2] },
    ];
  const series = definitions;
  const max = Math.max(...series.flatMap((item) => item.values));
  const pointCount = dataset.labels.length;
  const activeHover = hoveredIndex !== null && hoveredIndex < pointCount ? hoveredIndex : null;
  const chartPoints = (values) => values.map((value, index) =>
    `${(index / (values.length - 1)) * 100},${90 - (value / max) * 72}`
  ).join(" ");
  const formatValue = (value) => mode === "User growth" ? `${value.toLocaleString()} users` : formatMoney(value);

  return (
    <div className="command-chart">
      <div className="command-chart-legend">
        {series.map((item) => (
          <span key={item.name}><i style={{ background: item.color }} />{item.name}</span>
        ))}
        <span className="sample-data-badge">{period} sample</span>
      </div>
      <div className={`command-chart-plot ${chartType.toLowerCase()}`}>
        <div className="command-chart-grid" aria-hidden="true"><i /><i /><i /><i /></div>
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" role="img" aria-label={`${mode} trend over ${period}`}>
          {chartType === "Bars"
            ? series.map((item, seriesIndex) => item.values.map((value, pointIndex) => {
              const groupWidth = 100 / item.values.length;
              const barWidth = Math.min(2.8, groupWidth / 5);
              const barX = pointIndex * groupWidth + groupWidth / 2 + (seriesIndex - (series.length - 1) / 2) * (barWidth + 0.35) - barWidth / 2;
              const barY = 90 - (value / max) * 72;
              return <rect key={`${item.name}-${pointIndex}`} x={barX} y={barY} width={barWidth} height={90 - barY} rx="0.7" fill={item.color} opacity="0.88" />;
            }))
            : series.map((item, index) => {
              const points = chartPoints(item.values);
              return (
                <g key={item.name}>
                  {chartType === "Area" && <polygon points={`0,90 ${points} 100,90`} fill={item.color} opacity={index === 0 ? "0.13" : "0.07"} />}
                  <polyline
                    points={points}
                    fill="none"
                    stroke={item.color}
                    strokeWidth={index === 0 ? "2.4" : "1.8"}
                    vectorEffect="non-scaling-stroke"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  {item.values.map((value, pointIndex) => (
                    <circle key={`${item.name}-point-${pointIndex}`} cx={(pointIndex / (pointCount - 1)) * 100} cy={90 - (value / max) * 72} r="0.8" fill={item.color} stroke="var(--surface)" strokeWidth="0.45" vectorEffect="non-scaling-stroke" />
                  ))}
                </g>
              );
            })}
        </svg>
        <div className="command-chart-hover-zones">
          {dataset.labels.map((label, index) => (
            <button
              type="button"
              key={`${period}-${label}`}
              className={`command-chart-hover-zone ${activeHover === index ? "active" : ""}`}
              style={{ left: `${(index / pointCount) * 100}%`, width: `${100 / pointCount}%` }}
              aria-label={`${label}: ${series.map((item) => `${item.name} ${formatValue(item.values[index])}`).join(", ")}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onFocus={() => setHoveredIndex(index)}
              onBlur={() => setHoveredIndex(null)}
            />
          ))}
        </div>
        {activeHover !== null && (
          <div
            className="command-chart-tooltip"
            style={{ left: `${Math.min(86, Math.max(14, (activeHover / (pointCount - 1)) * 100))}%` }}
            role="status"
          >
            <strong>{dataset.labels[activeHover]}</strong>
            {series.map((item) => (
              <span key={item.name}><i style={{ background: item.color }} />{item.name}<b>{formatValue(item.values[activeHover])}</b></span>
            ))}
          </div>
        )}
      </div>
      <div className="command-chart-axis">
        <span>{dataset.labels[0]}</span>
        <span>{dataset.labels[Math.floor((pointCount - 1) / 2)]}</span>
        <span>{dataset.labels[pointCount - 1]}</span>
      </div>
    </div>
  );
}

function RevenueOverviewPage({ payments, users, setPage }) {
  const [period, setPeriod] = useState("6M");
  const [metric, setMetric] = useState("Revenue");
  const successfulPayments = payments.filter((payment) => payment.status === "Paid");
  const refunds = payments.reduce(
    (sum, payment) => sum + (payment.refundedAmount || (payment.status === "Refunded" ? payment.amount : 0)),
    0
  );
  const metrics = [
    { title: "Total revenue", value: "₹42.8L", change: "+18.4% vs last period", icon: IndianRupee, trend: [22, 26, 31, 38, 42, 50, 61] },
    { title: "This month", value: "₹6.84L", change: "+12.8% vs last month", icon: CalendarDays, trend: [25, 29, 34, 39, 43, 51, 58] },
    { title: "MRR", value: "₹5.92L", change: "+9.6% vs last month", icon: TrendingUp, trend: [26, 30, 33, 37, 42, 47, 53] },
    { title: "Paying users", value: "1,842", change: "+8.2% vs last month", icon: Users, trend: [23, 27, 31, 37, 41, 46, 52] },
    { title: "Conversion", value: "14.7%", change: "+2.1% vs last month", icon: Percent, trend: [18, 22, 26, 30, 35, 40, 48] },
    { title: "Avg. revenue", value: "₹1,284", change: "+5.4% vs last month", icon: CreditCard, trend: [20, 23, 29, 31, 36, 42, 47] },
  ];
  const totalCollected = successfulPayments.reduce((sum, payment) => sum + payment.amount, 0);

  return (
    <>
      <PageHeader
        title="Revenue Overview"
        subtitle="A high-level view of revenue performance, subscriptions, and payment activity."
        actions={
          <>
            <button className="button secondary" onClick={() => setPage("Subscriptions")}><BadgeCheck size={15} aria-hidden="true" />Subscriptions</button>
            <button className="button primary" onClick={() => setPage("Payments")}><CreditCard size={15} aria-hidden="true" />Payment details</button>
          </>
        }
      />
      <div className="analytics-notice revenue-sample-notice">
        <Info size={16} aria-hidden="true" />
        <span>Revenue totals and percentage changes are illustrative estimates. Transaction totals below come from the local sample payment records.</span>
      </div>
      <div className="stats-grid revenue-overview-stats">
        {metrics.map((item) => <StatCard key={item.title} title={item.title} value={item.value} change={item.change} icon={item.icon} sparkline={item.trend} />)}
      </div>
      <section className="card revenue-performance-card">
        <div className="card-header revenue-chart-header">
          <div><h2>{metric} trend</h2><p>{period} performance · sample estimates</p></div>
          <div className="revenue-chart-filters">
            <div className="chart-control-group" role="group" aria-label="Revenue metric">
              {["Revenue", "Payments", "Refunds"].map((name) => <button key={name} className={metric === name ? "active" : ""} aria-pressed={metric === name} onClick={() => setMetric(name)}>{name}</button>)}
            </div>
            <div className="chart-control-group" role="group" aria-label="Revenue period">
              {["7D", "30D", "90D", "6M", "1Y"].map((range) => <button key={range} className={period === range ? "active" : ""} aria-pressed={period === range} onClick={() => setPeriod(range)}>{range}</button>)}
            </div>
          </div>
        </div>
        <CommandTrendChart mode={metric} period={period} chartType="Area" />
        <div className="revenue-chart-summary">
          <span><small>Recorded successful payments</small><strong>{formatMoney(totalCollected)}</strong></span>
          <span><small>Recorded refunds</small><strong>{formatMoney(refunds)}</strong></span>
          <span><small>Paying users in sample</small><strong>{users.filter((user) => user.plan !== "None" && user.status === "Active").length}</strong></span>
        </div>
      </section>
      <div className="revenue-shortcuts">
        <button className="card revenue-shortcut" onClick={() => setPage("Subscriptions")}>
          <span className="revenue-shortcut-icon"><BadgeCheck size={19} aria-hidden="true" /></span>
          <span><strong>Subscription management</strong><small>Review active plans, renewals, and cancellations</small></span>
          <ArrowRight size={17} aria-hidden="true" />
        </button>
        <button className="card revenue-shortcut" onClick={() => setPage("Payments")}>
          <span className="revenue-shortcut-icon"><CreditCard size={19} aria-hidden="true" /></span>
          <span><strong>Payment activity</strong><small>Review transactions, failed payments, and refunds</small></span>
          <ArrowRight size={17} aria-hidden="true" />
        </button>
      </div>
    </>
  );
}

function SubscriptionsPage({ payments, users, setSidePanel, setModal, setPage, manageSubscription }) {
  const [statusFilter, setStatusFilter] = useState("All");
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const expiringCutoff = new Date(now);
  expiringCutoff.setDate(expiringCutoff.getDate() + 30);
  const subscriptionUsers = users.filter((user) => user.plan && user.plan !== "None");
  const getExpiry = (user) => user.planEnd ? parsePlanEndDate(user.planEnd) : null;
  const getSubscriptionStatus = (user) => {
    if (user.status === "Cancelled") return "Cancelled";
    if (user.status === "Past due") return "Past due";
    const endDate = getExpiry(user);
    if (user.status === "Active" && endDate && endDate >= now && endDate <= expiringCutoff) return "Expiring";
    if (user.status === "Active" && endDate && endDate < now) return "Expired";
    return user.status;
  };
  const getAmount = (user) => {
    const payment = payments.find((item) => item.id === user.lastPaymentId && item.status === "Paid") ||
      payments.find((item) => item.user === user.name && item.status === "Paid");
    return payment ? formatMoney(payment.amount) : "—";
  };
  const filtered = subscriptionUsers.filter((user) => statusFilter === "All" || getSubscriptionStatus(user) === statusFilter);
  const activeCount = subscriptionUsers.filter((user) => user.status === "Active" && (!getExpiry(user) || getExpiry(user) >= now)).length;
  const basicCount = subscriptionUsers.filter((user) => user.plan === "Basic" && user.status === "Active").length;
  const premiumCount = subscriptionUsers.filter((user) => user.plan === "Premium" && user.status === "Active").length;
  const expiringCount = subscriptionUsers.filter((user) => getSubscriptionStatus(user) === "Expiring").length;
  const cancelledCount = subscriptionUsers.filter((user) => user.status === "Cancelled").length;
  const planTotal = basicCount + premiumCount;
  const premiumPercent = planTotal ? Math.round((premiumCount / planTotal) * 100) : 0;

  function confirmSubscriptionAction(user, action) {
    const isCancel = action === "cancel";
    setModal({
      type: "confirm-action",
      title: isCancel ? "Cancel this subscription?" : "Extend this subscription?",
      message: isCancel ? `${user.name}'s ${user.plan} subscription will be marked cancelled.` : `${user.name}'s ${user.plan} subscription will be extended by 30 days.`,
      confirmLabel: isCancel ? "Cancel subscription" : "Extend 30 days",
      danger: isCancel,
      requiresReason: true,
      reasonLabel: "Reason for change",
      successMessage: isCancel ? "Subscription cancelled." : "Subscription extended by 30 days.",
      onConfirm: (reason) => manageSubscription(user.id, action, reason),
    });
  }

  return (
    <>
      <PageHeader
        title="Subscriptions"
        subtitle="Manage plan distribution, upcoming renewals, and subscriber accounts."
        actions={<button className="button secondary" onClick={() => setPage("Revenue Overview")}><ArrowRight size={15} aria-hidden="true" />Revenue overview</button>}
      />
      <div className="analytics-notice">
        <Info size={16} aria-hidden="true" />
        <span>Subscription records use the current local user sample. Plan changes, cancellation, and extensions are saved locally and recorded in the audit log.</span>
      </div>
      <div className="stats-grid subscription-stats">
        <StatCard title="Active" value={activeCount.toLocaleString()} change="Current active plans" icon={CheckCircle2} />
        <StatCard title="Basic" value={basicCount.toLocaleString()} change="Active subscriptions" icon={BadgeCheck} />
        <StatCard title="Premium" value={premiumCount.toLocaleString()} change="Active subscriptions" icon={Sparkles} />
        <StatCard title="Expiring soon" value={expiringCount.toLocaleString()} change="Within 30 days" icon={Timer} />
        <StatCard title="Cancelled" value={cancelledCount.toLocaleString()} change="Subscription records" icon={CircleX} />
      </div>
      <section className="card subscription-plan-card">
        <div className="card-header"><div><h2>Plan distribution</h2><p>Active paid plans in the local sample</p></div><span className="sample-data-badge">Sample records</span></div>
        <div className="subscription-plan-content">
          <div className="subscription-donut" style={{ "--premium-percent": `${premiumPercent}%` }}>
            <div><strong>{planTotal}</strong><small>active plans</small></div>
          </div>
          <div className="subscription-plan-legend">
            <div><span><i className="premium" />Premium</span><strong>{premiumCount}<small>{planTotal ? Math.round((premiumCount / planTotal) * 100) : 0}%</small></strong></div>
            <div><span><i className="basic" />Basic</span><strong>{basicCount}<small>{planTotal ? Math.round((basicCount / planTotal) * 100) : 0}%</small></strong></div>
            <p>Cancelled and past-due plans are excluded from this distribution.</p>
          </div>
        </div>
      </section>
      <section className="table-card subscription-table-card">
        <div className="table-title">
          <div><h2>Subscription records</h2><p>{filtered.length} of {subscriptionUsers.length} paid-plan accounts</p></div>
          <select aria-label="Filter subscriptions by status" value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)}>
            {["All", "Active", "Expiring", "Past due", "Cancelled", "Expired", "Inactive"].map((status) => <option key={status}>{status}</option>)}
          </select>
        </div>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>USER</th><th>PLAN</th><th>STARTED</th><th>RENEWAL</th><th>STATUS</th><th>AMOUNT</th><th>ACTIONS</th></tr></thead>
            <tbody>
              {filtered.map((user) => {
                const status = getSubscriptionStatus(user);
                return (
                  <tr key={user.id}>
                    <td><div className="subscription-user-cell"><span>{user.name.charAt(0)}</span><div><strong>{user.name}</strong><small>{user.email}</small></div></div></td>
                    <td><StatusBadge>{user.plan}</StatusBadge></td>
                    <td>{user.joined || "—"}</td>
                    <td>{user.planEnd || "Not scheduled"}</td>
                    <td><StatusBadge type={status === "Expiring" ? "subscription-expiring" : undefined}>{status}</StatusBadge></td>
                    <td>{getAmount(user)}</td>
                    <td><div className="row-actions subscription-actions">
                      <button onClick={() => setSidePanel({ type: "user", user, lastPayment: payments.find((payment) => payment.id === user.lastPaymentId) })}>View</button>
                      <button onClick={() => setModal({ type: "change-plan", user })}>Change</button>
                      <button onClick={() => setModal({ type: "reminder", user: user.name, reminderType: "renewal" })}>Remind</button>
                      {user.status === "Cancelled" ? (
                        <button onClick={() => confirmSubscriptionAction(user, "extend")}>Reactivate</button>
                      ) : (
                        <>
                          <button onClick={() => confirmSubscriptionAction(user, "extend")}>Extend</button>
                          <button className="danger-text" onClick={() => confirmSubscriptionAction(user, "cancel")}>Cancel</button>
                        </>
                      )}
                    </div></td>
                  </tr>
                );
              })}
              {filtered.length === 0 && <tr><td colSpan={7}><div className="empty-state">No subscriptions match this status.</div></td></tr>}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

function PlanSplitChart() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const totalUsers = 12842;
  const tooltipSegment = hoveredIndex === null
    ? null
    : planSegments[hoveredIndex];
  function getSegmentPath(startPercent, percent) {
    const startAngle = (startPercent / 100) * 360;
    const endAngle = ((startPercent + percent) / 100) * 360;
    const pointAt = (angle) => {
      const radians = (angle * Math.PI) / 180;
      return {
        x: 110 + 91 * Math.sin(radians),
        y: 110 - 91 * Math.cos(radians),
      };
    };
    const start = pointAt(startAngle);
    const end = pointAt(endAngle);
    const largeArc = percent > 50 ? 1 : 0;

    return `M ${start.x} ${start.y} A 91 91 0 ${largeArc} 1 ${end.x} ${end.y}`;
  }

  return (
    <div
      className="donut"
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <svg
        className="donut-interaction"
        viewBox="0 0 220 220"
        role="group"
        aria-label="User plan split"
      >
        {planSegments.map((segment, index) => {
          const startPercent = planSegments
            .slice(0, index)
            .reduce((total, item) => total + item.percent, 0);

          return (
            <path
              key={segment.name}
              className="donut-segment"
              d={getSegmentPath(startPercent, segment.percent)}
              stroke={segment.color}
              strokeWidth="38"
              strokeLinecap="butt"
              fill="none"
              tabIndex="0"
              aria-label={`${segment.name}: ${segment.percent}%, ${Math.round((totalUsers * segment.percent) / 100).toLocaleString()} users`}
              onMouseEnter={() => setHoveredIndex(index)}
              onFocus={() => setHoveredIndex(index)}
              onBlur={() => setHoveredIndex(null)}
            />
          );
        })}
      </svg>

      {tooltipSegment && (
        <div className="plan-tooltip" role="status">
          <span>{tooltipSegment.name}</span>
          <strong>{tooltipSegment.percent}% · {Math.round((totalUsers * tooltipSegment.percent) / 100).toLocaleString()} users</strong>
        </div>
      )}

      <div className="donut-center">
        <strong>12.8K</strong>
        <span>Users</span>
      </div>
    </div>
  );
}

/* =========================================================
   USERS
========================================================= */

function getUserHealth(user) {
  const days = daysSinceLastActive(user);
  let score = 15;
  if (user.status === "Active") score += 25;
  if (user.plan === "Premium") score += 12;
  if (user.ai >= 20) score += 18;
  else if (user.ai > 0) score += 10;
  if (user.applications?.length) score += 15;
  if (user.savedJobs?.length) score += 5;
  if (days < 7) score += 10;
  else if (days >= 14) score -= days >= 30 ? 40 : 15;
  if (user.status === "Past due" || user.status === "Cancelled") score -= 20;
  score = Math.max(0, Math.min(100, score));

  const health = user.status === "Inactive" || days >= 30
    ? "Inactive"
    : user.status === "Past due" || days >= 14
      ? "At Risk"
      : user.applications?.length && days < 7
        ? "Engaged"
        : "Healthy";
  return { score, health };
}

function UserHealthBadge({ user }) {
  const { health } = getUserHealth(user);
  return <StatusBadge type={`user-health-badge ${health.toLowerCase().replace(/\s+/g, "-")}`}>{health}</StatusBadge>;
}

function UsersPage({
  setSidePanel,
  setModal,
  exportCSV,
  users,
  payments,
  onBulkUserStatus,
}) {
  const [search, setSearch] = useState("");
  const [plan, setPlan] = useState("All");
  const [status, setStatus] = useState("All");
  const [sort, setSort] = useState("Newest");
  const [segment, setSegment] = useState("All");
  const [selectedUserIds, setSelectedUserIds] = useState(() => new Set());

  const atRiskCount = users.filter((user) => getUserHealth(user).health === "At Risk").length;
  const activeCount = users.filter((user) => user.status === "Active").length;
  const premiumCount = users.filter((user) => user.plan === "Premium").length;
  const newCutoff = useMemo(() => {
    const cutoff = new Date();
    cutoff.setDate(cutoff.getDate() - 30);
    return cutoff;
  }, []);

  const filteredUsers = useMemo(() => {
    let result = users.filter((user) => {
      const matchesSearch =
        user.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        user.email
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        user.mobile.includes(search);

      const matchesPlan =
        plan === "All" || user.plan === plan;

      const matchesStatus =
        status === "All" || user.status === status;

      const health = getUserHealth(user).health;
      const joined = user.joined ? parsePlanEndDate(user.joined) : null;
      const matchesSegment = segment === "All" ||
        (segment === "Active" && user.status === "Active") ||
        (segment === "New" && joined && joined >= newCutoff) ||
        (segment === "Premium" && user.plan === "Premium") ||
        (segment === "At Risk" && health === "At Risk") ||
        (segment === "Inactive" && health === "Inactive");

      return (
        matchesSearch &&
        matchesPlan &&
        matchesStatus &&
        matchesSegment
      );
    });

    if (sort === "Name") {
      result.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    }

    if (sort === "AI Usage") {
      result.sort((a, b) => b.ai - a.ai);
    }

    return result;
  }, [users, search, plan, status, sort, segment, newCutoff]);

  const allFilteredSelected =
    filteredUsers.length > 0 &&
    filteredUsers.every((user) => selectedUserIds.has(user.id));

  function clearUserSelection() {
    setSelectedUserIds(new Set());
  }

  function toggleFilteredUserSelection() {
    setSelectedUserIds((current) => {
      const next = new Set(current);
      if (allFilteredSelected) {
        filteredUsers.forEach((user) => next.delete(user.id));
      } else {
        filteredUsers.forEach((user) => next.add(user.id));
      }
      return next;
    });
  }

  function toggleUserSelection(userId) {
    setSelectedUserIds((current) => {
      const next = new Set(current);
      if (next.has(userId)) next.delete(userId);
      else next.add(userId);
      return next;
    });
  }

  return (
    <>
      <PageHeader
        title="Users"
        subtitle="Manage users, plans, profiles and account activity."
        actions={
          <>
            <button
              className="button secondary"
              onClick={() =>
                exportCSV(
                  filteredUsers,
                  "users.csv"
                )
              }
            >
              <Download size={15} aria-hidden="true" />
              Export CSV
            </button>

            <button
              className="button primary"
              onClick={() => setModal("add-user")}
            >
              <Plus size={15} aria-hidden="true" />
              Add User
            </button>
          </>
        }
      />

      <div className="stats-grid user-analytics-stats">
        <StatCard title="Total users" value={users.length.toLocaleString()} change="+8.4% vs last month" icon={Users} sparkline={[25, 30, 34, 40, 43, 49, 58]} />
        <StatCard title="Active" value={activeCount.toLocaleString()} change="+5.1% vs last month" icon={Activity} sparkline={[32, 35, 38, 42, 46, 52, 56]} />
        <StatCard title="Premium" value={premiumCount.toLocaleString()} change="+12.8% vs last month" icon={BadgeCheck} sparkline={[18, 21, 25, 28, 34, 39, 45]} />
        <StatCard title="At risk" value={atRiskCount.toLocaleString()} change="-3.2% vs last month" icon={AlertCircle} sparkline={[62, 58, 54, 49, 45, 42, 37]} />
      </div>

      <div className="user-segments" role="group" aria-label="Filter users by segment">
        {["All", "Active", "New", "Premium", "At Risk", "Inactive"].map((item) => (
          <button
            key={item}
            className={segment === item ? "active" : ""}
            aria-pressed={segment === item}
            onClick={() => {
              setSegment(item);
              clearUserSelection();
            }}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="filter-card">

        <div className="search-box">
          <Search size={18} aria-hidden="true" />

          <input
            placeholder="Search name, email or mobile..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              clearUserSelection();
            }}
          />
        </div>

        <select
          aria-label="Filter by plan"
          value={plan}
          onChange={(e) => {
            setPlan(e.target.value);
            clearUserSelection();
          }}
        >
          <option value="All">All plans</option>
          <option value="Premium">Premium</option>
          <option value="Basic">Basic</option>
          <option value="None">None</option>
        </select>

        <select
          aria-label="Filter by status"
          value={status}
          onChange={(e) => {
            setStatus(e.target.value);
            clearUserSelection();
          }}
        >
          <option value="All">All statuses</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
          <option value="Past due">Past due</option>
          <option value="Cancelled">Cancelled</option>
        </select>

        <select
          aria-label="Sort users"
          value={sort}
          onChange={(e) => {
            setSort(e.target.value);
            clearUserSelection();
          }}
        >
          <option value="Newest">Sort: Newest</option>
          <option value="Name">Sort: Name</option>
          <option value="AI Usage">Sort: AI usage</option>
        </select>

      </div>

      <div className="table-card">

        <div className="table-title">

          <div>
            <h2>All Users</h2>
            <p>{filteredUsers.length} users found</p>
          </div>

          {selectedUserIds.size ? (
            <div className="job-bulk-actions">
              <span>{selectedUserIds.size} selected</span>
              <button
                className="button secondary small"
                onClick={() => {
                  const selected = filteredUsers.filter((user) =>
                    selectedUserIds.has(user.id)
                  );
                  setModal({
                    type: "bulk-user-status",
                    users: selected,
                    onConfirm: (nextStatus, reason) => {
                      onBulkUserStatus(
                        selected.map((user) => user.id),
                        nextStatus,
                        reason
                      );
                      clearUserSelection();
                    },
                  });
                }}
              >
                <Users size={15} aria-hidden="true" />
                Update status
              </button>
              <button
                className="button secondary small"
                onClick={clearUserSelection}
              >
                Clear selection
              </button>
            </div>
          ) : (
            <span>25 per page</span>
          )}
        </div>

        <div className="table-wrapper">

          <table>

            <thead>
              <tr>
                <th className="job-select-cell">
                  <input
                    className="job-select"
                    type="checkbox"
                    aria-label="Select all filtered users"
                    checked={allFilteredSelected}
                    disabled={filteredUsers.length === 0}
                    onChange={toggleFilteredUserSelection}
                  />
                </th>
                <th>NAME & EMAIL</th>
                <th>MOBILE</th>
                <th>AREA</th>
                <th>PLAN</th>
                <th>STATUS</th>
                <th>HEALTH</th>
                <th>AI / 30 DAYS</th>
                <th>JOINED</th>
                <th>ACTIONS</th>
              </tr>
            </thead>

            <tbody>

              {filteredUsers.map((user) => (
                <tr key={user.id}>

                  <td className="job-select-cell">
                    <input
                      className="job-select"
                      type="checkbox"
                      aria-label={`Select ${user.name}`}
                      checked={selectedUserIds.has(user.id)}
                      onChange={() => toggleUserSelection(user.id)}
                    />
                  </td>

                  <td>
                    <div className="user-cell">

                      <div className="small-avatar">
                        {user.name.charAt(0)}
                      </div>

                      <div>
                        <strong>{user.name}</strong>
                        <span>{user.email}</span>
                      </div>

                    </div>
                  </td>

                  <td>{user.mobile}</td>

                  <td>{user.area}</td>

                  <td>
                    <StatusBadge>
                      {user.plan}
                    </StatusBadge>
                  </td>

                  <td>
                    <StatusBadge>
                      {user.status}
                    </StatusBadge>
                  </td>

                  <td><UserHealthBadge user={user} /></td>

                  <td>{user.ai} calls</td>

                  <td>{user.joined}</td>

                  <td>

                    <div className="row-actions">

                      <button
                        onClick={() =>
                          setSidePanel({
                            type: "user",
                            user,
                            lastPayment: payments.find(
                              (payment) => payment.id === user.lastPaymentId
                            ),
                          })
                        }
                      >
                        View
                      </button>

                      <button
                        onClick={() =>
                          setModal({
                            type: "edit-user",
                            user,
                          })
                        }
                      >
                        Edit
                      </button>

                      <button
                        onClick={() =>
                          setModal({
                            type: "change-plan",
                            user,
                          })
                        }
                      >
                        Plan
                      </button>

                    </div>

                  </td>

                </tr>
              ))}

              {filteredUsers.length === 0 && (
                <tr>
                  <td colSpan="10">
                    <div className="empty-state empty-state-rich">
                      <span className="empty-state-icon"><Users size={21} aria-hidden="true" /></span>
                      <strong>No matching users</strong>
                      <span>Try changing your filters or search for another user.</span>
                      <button
                        type="button"
                        className="text-button"
                        onClick={() => {
                          setSearch("");
                          setPlan("All");
                          setStatus("All");
                        }}
                      >
                        Clear filters
                      </button>
                    </div>
                  </td>
                </tr>
              )}

            </tbody>

          </table>

        </div>

      </div>
    </>
  );
}

/* =========================================================
   PAYMENTS
========================================================= */

function PaymentsPage({
  setSidePanel,
  setModal,
  exportCSV,
  payments,
  users,
}) {
  const [status, setStatus] = useState("All");

  const filtered = payments.filter(
    (payment) =>
      status === "All" ||
      payment.status === status
  );

  const total = payments
    .filter((p) => p.status === "Paid")
    .reduce((sum, p) => sum + p.amount, 0);
  const failedPayments = payments.filter(
    (payment) =>
      payment.status === "Failed" &&
      users.some((user) => user.lastPaymentId === payment.id)
  );
  const refundedTotal = payments.reduce(
    (sum, payment) => sum + (payment.refundedAmount || (payment.status === "Refunded" ? payment.amount : 0)),
    0
  );
  const failedAmount = payments
    .filter((payment) => payment.status === "Failed")
    .reduce((sum, payment) => sum + payment.amount, 0);
  const successfulCount = payments.filter((payment) => payment.status === "Paid").length;
  const successRate = payments.length ? Math.round((successfulCount / payments.length) * 1000) / 10 : 0;
  const paidPercent = payments.length ? Math.round((successfulCount / payments.length) * 100) : 0;
  const failedPercent = payments.length
    ? Math.round((payments.filter((payment) => payment.status === "Failed").length / payments.length) * 100)
    : 0;
  const renewalUsers = users
    .filter((user) => user.planEnd && user.status === "Active" && user.plan !== "None")
    .sort((a, b) => parsePlanEndDate(a.planEnd) - parsePlanEndDate(b.planEnd))
    .slice(0, 4);

  return (
    <>
      <PageHeader
        title="Payments"
        subtitle="Monitor payments, refunds and upcoming renewals."
      />

      <div className="stats-grid payment-stats">
        <StatCard
          title="Revenue"
          value={formatMoney(total)}
          change={`${successfulCount} successful payments`}
          icon={IndianRupee}
          sparkline={[22, 28, 25, 34, 39, 44, 53]}
        />
        <StatCard
          title="Success rate"
          value={`${successRate}%`}
          change="Paid transactions"
          icon={CheckCircle2}
          sparkline={[68, 73, 71, 80, 82, 86, 91]}
        />
        <StatCard
          title="Failed amount"
          value={formatMoney(failedAmount)}
          change={`${failedPayments.length} payments need attention`}
          icon={CircleX}
          sparkline={[72, 68, 65, 56, 52, 46, 39]}
        />
        <StatCard
          title="Refunds"
          value={formatMoney(refundedTotal)}
          change="Processed"
          icon={RotateCcw}
          sparkline={[22, 30, 27, 34, 28, 39, 33]}
        />
      </div>

      <div className="payment-insights-grid">
        <section className="card payment-trend-card">
          <div className="card-header">
            <div><h2>Revenue trend</h2><p>Illustrative collection activity · last 7 periods</p></div>
            <span className="sample-data-badge">Sample data</span>
          </div>
          <CommandTrendChart mode="Revenue" period="7D" />
        </section>
        <section className="card payment-status-card">
          <div className="card-header">
            <div><h2>Payment status</h2><p>{payments.length} sample transactions</p></div>
          </div>
          <div className="payment-status-visual">
            <div className="payment-donut" style={{ "--paid-percent": `${paidPercent}%`, "--failed-percent": `${failedPercent}%` }}>
              <div><strong>{paidPercent}%</strong><small>paid</small></div>
            </div>
            <div className="payment-status-legend">
              <span><i className="paid" />Paid <strong>{successfulCount}</strong></span>
              <span><i className="failed" />Failed <strong>{payments.filter((payment) => payment.status === "Failed").length}</strong></span>
              <span><i className="refunded" />Refunded <strong>{payments.filter((payment) => payment.status.toLowerCase().includes("refund")).length}</strong></span>
            </div>
          </div>
        </section>
      </div>

      <div className="filter-card">

        <select aria-label="Filter by payment date">
          <option>Last 30 days</option>
          <option>Last 7 days</option>
          <option>Last 90 days</option>
        </select>

        <select
          aria-label="Filter by payment status"
          value={status}
          onChange={(e) =>
            setStatus(e.target.value)
          }
        >
          <option>All</option>
          <option>Paid</option>
          <option>Failed</option>
          <option>Refunded</option>
          <option>Partially refunded</option>
        </select>

        <button
          className="button primary"
          onClick={() =>
            exportCSV(
              filtered,
              "payments.csv"
            )
          }
        >
          <Download size={15} aria-hidden="true" />
          Export CSV
        </button>

      </div>

      <div className="table-card">

        <div className="table-title">
          <div>
            <h2>Recent Payments</h2>
            <p>Latest payment activity · {payments.length} records</p>
          </div>
        </div>

        <div className="table-wrapper">

          <table>

            <thead>
              <tr>
                <th>PAYMENT ID</th>
                <th>USER</th>
                <th>AMOUNT</th>
                <th>STATUS</th>
                <th>METHOD</th>
                <th>DATE</th>
                <th>ACTIONS</th>
              </tr>
            </thead>

            <tbody>

              {filtered.map((payment) => (
                <tr key={payment.id}>

                  <td>
                    <strong>{payment.id}</strong>
                  </td>

                  <td>{payment.user}</td>

                  <td>
                    {formatMoney(payment.amount)}
                  </td>

                  <td>
                    <StatusBadge>
                      {payment.status}
                    </StatusBadge>
                  </td>

                  <td>{payment.method}</td>

                  <td>{payment.date}</td>

                  <td>
                    <div className="row-actions">

                      <button
                        onClick={() =>
                          setSidePanel({
                            type: "payment",
                            payment,
                          })
                        }
                      >
                        Invoice
                      </button>

                      {(payment.status === "Paid" || payment.status === "Partially refunded") && (
                        <button
                          onClick={() =>
                            setModal({
                              type: "refund",
                              payment,
                            })
                          }
                        >
                          Refund
                        </button>
                      )}

                    </div>
                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>

      <div className="card renewal-card failed-payers-card">
        <div className="card-header">
          <div>
            <h2>Failed payers</h2>
            <p>Latest failed payments that may need support follow-up</p>
          </div>
        </div>
        {failedPayments.length === 0 ? (
          <p className="empty-state">No users currently need payment follow-up.</p>
        ) : (
          <div className="renewal-list">
            {failedPayments.map((payment) => {
              const user = users.find((candidate) => candidate.lastPaymentId === payment.id);
              return (
                <div className="renewal-row" key={payment.id}>
                  <div>
                    <strong>{payment.user}</strong>
                    <span>{payment.id} · {formatMoney(payment.amount)} · {payment.date}</span>
                    <small>Reason: {payment.failureReason || "Payment could not be completed"} · Last attempt: {payment.date}</small>
                  </div>
                  <div className="row-actions">
                    <button
                      onClick={() => user && setSidePanel({ type: "user", user, lastPayment: payment })}
                    >
                      View user
                    </button>
                    <button
                      onClick={() => setModal({ type: "reminder", user: payment.user })}
                    >
                      Follow up
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div className="card renewal-card">

        <div className="card-header">
          <div>
            <h2>Upcoming Renewals</h2>
            <p>Users whose plans renew soon</p>
          </div>
        </div>

        <div className="renewal-list">
          {renewalUsers.map((user) => {
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            const daysRemaining = Math.max(0, Math.ceil((parsePlanEndDate(user.planEnd) - today) / 86400000));
            const priorPayment = payments.find((payment) => payment.user === user.name && payment.status === "Paid");
            const amount = priorPayment ? formatMoney(priorPayment.amount) : "Amount unavailable";
            return (
          <div
            className="renewal-row"
            key={user.id}
          >

            <div>
              <strong>{user.name}</strong>
              <span>
                {user.plan} · {user.planEnd} · {amount} · {daysRemaining} days left
              </span>
            </div>

              <button
                className="button small secondary"
                onClick={() =>
                  setModal({
                    type: "reminder",
                    user: user.name,
                  })
                }
              >
                Send reminder
              </button>

            </div>
          );})}

        </div>

      </div>
    </>
  );
}

/* =========================================================
   JOBS
========================================================= */

function JobsPage({ jobs, setJobs, recordAudit, setModal }) {
  const [search, setSearch] = useState("");
  const [source, setSource] = useState("All");
  const [visibility, setVisibility] = useState("All");
  const [selectedJobIds, setSelectedJobIds] = useState(() => new Set());
  const visibleCount = jobs.filter((job) => job.visible).length;
  const hiddenCount = jobs.length - visibleCount;
  const filtered = jobs.filter((job) => {
    const query = search.trim().toLowerCase();
    const matchesSearch =
      job.title.toLowerCase().includes(query) ||
      job.company.toLowerCase().includes(query) ||
      job.location.toLowerCase().includes(query);
    const matchesSource = source === "All" || job.source === source;
    const matchesVisibility =
      visibility === "All" ||
      (visibility === "Visible" && job.visible) ||
      (visibility === "Hidden" && !job.visible);

    return matchesSearch && matchesSource && matchesVisibility;
  });

  const allFilteredSelected =
    filtered.length > 0 &&
    filtered.every((job) => selectedJobIds.has(job.id));

  function clearSelection() {
    setSelectedJobIds(new Set());
  }

  function toggleSelectAllFiltered() {
    setSelectedJobIds((selected) => {
      const next = new Set(selected);
      if (allFilteredSelected) {
        filtered.forEach((job) => next.delete(job.id));
      } else {
        filtered.forEach((job) => next.add(job.id));
      }
      return next;
    });
  }

  function toggleJobSelection(id) {
    setSelectedJobIds((selected) => {
      const next = new Set(selected);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }

  function setJobVisibility(ids, visible) {
    const idsToUpdate = new Set(ids);
    const changed = jobs.filter((job) => idsToUpdate.has(job.id) && job.visible !== visible);
    setJobs((currentJobs) => currentJobs.map((job) =>
      idsToUpdate.has(job.id) ? { ...job, visible } : job
    ));
    changed.forEach((job) =>
      recordAudit(visible ? "Showed external job" : "Hid external job", job.title,
        { visible: job.visible }, { visible }, "Visibility managed by admin")
    );
    clearSelection();
  }

  function toggleJobVisibility(id, visible) {
    const job = jobs.find((item) => item.id === id);
    if (!job || job.visible === visible) return;
    setJobs((currentJobs) => currentJobs.map((item) =>
      item.id === id ? { ...item, visible } : item
    ));
    recordAudit(visible ? "Showed external job" : "Hid external job", job.title,
      { visible: job.visible }, { visible }, "Visibility managed by admin");
  }

  function confirmBulkVisibility(visible) {
    const selected = jobs.filter((job) =>
      selectedJobIds.has(job.id) && job.visible !== visible
    );
    if (!selected.length) {
      clearSelection();
      return;
    }

    setModal({
      type: "confirm-action",
      title: `${visible ? "Show" : "Hide"} selected jobs?`,
      message: `${selected.length} selected job${selected.length === 1 ? "" : "s"} will become ${visible ? "visible" : "hidden"}. Hidden jobs remain available to restore.`,
      confirmLabel: `${visible ? "Show" : "Hide"} jobs`,
      successMessage: `${selected.length} job${selected.length === 1 ? "" : "s"} ${visible ? "shown" : "hidden"}.`,
      onConfirm: () => setJobVisibility(selected.map((job) => job.id), visible),
    });
  }

  return (
    <>
      <PageHeader
        title="Jobs"
        subtitle="Manage collected jobs and platform visibility."
      />

      <div className="stats-grid jobs-analytics-stats">
        <StatCard title="Total jobs" value={jobs.length.toLocaleString()} change="Collected listings" icon={BriefcaseBusiness} sparkline={[30, 34, 40, 45, 48, 55, 62]} />
        <StatCard title="Visible" value={visibleCount.toLocaleString()} change="Available to users" icon={Eye} sparkline={[44, 48, 50, 55, 60, 63, 68]} />
        <StatCard title="Hidden" value={hiddenCount.toLocaleString()} change="Admin moderated" icon={EyeOff} sparkline={[42, 39, 36, 34, 30, 27, 24]} />
        <StatCard title="Quality review" value={jobs.filter((job) => !job.applyLink && !job.applyUrl).length.toLocaleString()} change="Missing application links" icon={SearchCheck} sparkline={[47, 44, 41, 39, 35, 32, 29]} />
      </div>

      <div className="job-health-overview card">
        <div><strong>Job health</strong><small>Completeness signals based on available listing fields · sample estimate</small></div>
        <div className="job-health-bars">
          <span><i className="fresh" /><b>Fresh</b><strong>82%</strong></span>
          <span><i className="aging" /><b>Aging</b><strong>11%</strong></span>
          <span><i className="duplicate" /><b>Potential duplicate</b><strong>4%</strong></span>
          <span><i className="missing" /><b>Missing data</b><strong>3%</strong></span>
        </div>
      </div>

      <div className="filter-card">

        <div className="search-box medium">
          <Search size={18} aria-hidden="true" />

          <input
            placeholder="Search title or company..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              clearSelection();
            }}
          />
        </div>

        <select
          aria-label="Filter by job source"
          value={source}
          onChange={(e) => {
            setSource(e.target.value);
            clearSelection();
          }}
        >
          <option value="All">All sources</option>
          <option value="Internal">Internal</option>
          <option value="LinkedIn">LinkedIn</option>
          <option value="Indeed">Indeed</option>
          <option value="Naukri">Naukri</option>
        </select>

        <select
          aria-label="Filter by visibility"
          value={visibility}
          onChange={(e) => {
            setVisibility(e.target.value);
            clearSelection();
          }}
        >
          <option value="All">All visibility</option>
          <option value="Visible">Visible</option>
          <option value="Hidden">Hidden</option>
        </select>

      </div>

      <div className="table-card">

        <div className="table-title">
          <div>
            <h2>Jobs</h2>
            <p>
              Showing {filtered.length} of {jobs.length} jobs
            </p>
          </div>
          <div className="job-table-actions">
          {selectedJobIds.size > 0 && (
            <div className="job-bulk-actions">
              <span>{selectedJobIds.size} selected</span>
              <button
                className="button secondary small"
                onClick={() => confirmBulkVisibility(true)}
              >
                <Eye size={15} aria-hidden="true" />
                Show selected
              </button>
              <button
                className="button secondary small"
                onClick={() => confirmBulkVisibility(false)}
              >
                <EyeOff size={15} aria-hidden="true" />
                Hide selected
              </button>
            </div>
          )}
          </div>
        </div>

        <div className="table-wrapper">

          <table>

            <thead>
              <tr>
                <th className="job-select-cell">
                  <input
                    className="job-select"
                    type="checkbox"
                    aria-label="Select all filtered jobs"
                    checked={allFilteredSelected}
                    disabled={filtered.length === 0}
                    onChange={toggleSelectAllFiltered}
                  />
                </th>
                <th>TITLE</th>
                <th>COMPANY</th>
                <th>LOCATION</th>
                <th>SOURCE</th>
                <th>POSTED</th>
                <th>STATUS</th>
                <th>ACTION</th>
              </tr>
            </thead>

            <tbody>

              {filtered.map((job) => (
                <tr key={job.id}>
                  <td className="job-select-cell">
                    <input
                      className="job-select"
                      type="checkbox"
                      aria-label={`Select ${job.title}`}
                      checked={selectedJobIds.has(job.id)}
                      onChange={() => toggleJobSelection(job.id)}
                    />
                  </td>

                  <td>
                    <strong>{job.title}</strong>
                  </td>

                  <td>{job.company}</td>

                  <td>{job.location}</td>

                  <td>{job.source}</td>

                  <td>{job.date}</td>

                  <td>
                    <StatusBadge>
                      {job.visible
                        ? "Visible"
                        : "Hidden"}
                    </StatusBadge>
                  </td>

                  <td>
                    <button
                      className={`job-visibility-action ${job.visible ? "hide" : "show"}`}
                      onClick={() =>
                        toggleJobVisibility(job.id, !job.visible)
                      }
                    >
                      {job.visible ? (
                        <EyeOff size={15} aria-hidden="true" />
                      ) : (
                        <Eye size={15} aria-hidden="true" />
                      )}
                      {job.visible
                        ? "Hide"
                        : "Show"}
                    </button>
                  </td>

                </tr>
              ))}

              {filtered.length === 0 && (
                <tr>
                  <td className="job-empty-state" colSpan={8}>
                    No jobs match these search and filter criteria.
                  </td>
                </tr>
              )}

            </tbody>

          </table>
        </div>

      </div>
    </>
  );
}

/* =========================================================
   INTERNAL JOBS
========================================================= */

function InternalJobsPage({
  setModal,
  internalJobs,
  setInternalJobs,
  recordAudit,
  notify,
}) {
  const emptyJob = {
    title: "",
    department: "",
    location: "",
    type: "Full-time",
    description: "",
    skills: "",
    applyLink: "",
    status: "Draft",
  };
  const [draft, setDraft] = useState(emptyJob);
  const [error, setError] = useState("");

  function createJob() {
    if (!draft.title.trim() || !draft.description.trim()) {
      setError("Enter a job title and description.");
      return;
    }
    if (!isSafeApplyLink(draft.applyLink)) {
      setError("Apply links must use https:// or mailto:.");
      return;
    }
    const job = { ...draft, id: Date.now(), visible: draft.status === "Published" };
    setInternalJobs((current) => [job, ...current]);
    recordAudit("Created internal job", job.title, null, job, "New internal job posting");
    notify("Internal job created successfully.");
    setDraft(emptyJob);
    setError("");
  }

  function changeVisibility(job) {
    const nextStatus = job.visible ? "Hidden" : "Published";
    const next = { ...job, status: nextStatus, visible: !job.visible };
    setInternalJobs((current) => current.map((item) => item.id === job.id ? next : item));
    recordAudit(next.visible ? "Showed internal job" : "Hid internal job", job.title,
      { visible: job.visible }, { visible: next.visible }, "Visibility managed by admin");
    notify(`Internal job ${next.visible ? "published" : "hidden"}.`);
  }

  function deleteJob(job) {
    setModal({
      type: "confirm-action",
      title: "Delete internal job?",
      message: `"${job.title}" will be permanently removed. This cannot be undone.`,
      confirmLabel: "Delete job",
      danger: true,
      onConfirm: () => {
        setInternalJobs((current) => current.filter((item) => item.id !== job.id));
        recordAudit("Deleted internal job", job.title, job, null, "Admin confirmed deletion");
        notify("Internal job deleted.");
      },
    });
  }

  return (
    <>
      <PageHeader
        title="Internal Jobs"
        subtitle="Create and manage jobs posted by the AIFAGen team."
      />

      <div className="stats-grid internal-job-stats">
        {[
          ["All", internalJobs.length],
          ["Live", internalJobs.filter((job) => job.status === "Published" || (!job.status && job.visible)).length],
          ["Hidden", internalJobs.filter((job) => job.status === "Hidden" || (!job.status && !job.visible)).length],
          ["Drafts", internalJobs.filter((job) => (job.status || "Draft") === "Draft").length],
        ].map(([title, count]) => <StatCard key={title} title={title} value={String(count)} change="Internal postings" icon={BriefcaseBusiness} />)}
      </div>

      <div className="internal-job-workspace">
      <div className="card internal-form">

        <div className="card-header">
          <div>
            <h2>Create Internal Job</h2>
            <p>Post a new opportunity on the platform.</p>
          </div>
        </div>

        <div className="form-grid">

          <label>
            Title *
            <input placeholder="e.g. AI Engineer" value={draft.title}
              onChange={(event) => setDraft({ ...draft, title: event.target.value })} />
          </label>

          <label>
            Department
            <input placeholder="Engineering" value={draft.department}
              onChange={(event) => setDraft({ ...draft, department: event.target.value })} />
          </label>

          <label>
            Location
            <input placeholder="Hyderabad / Remote" value={draft.location}
              onChange={(event) => setDraft({ ...draft, location: event.target.value })} />
          </label>

          <label>
            Employment Type
            <select value={draft.type}
              onChange={(event) => setDraft({ ...draft, type: event.target.value })}>
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Internship</option>
              <option>Contract</option>
            </select>
          </label>

          <label className="full">
            Description *
            <textarea
              placeholder="Job description..."
              rows="5"
              value={draft.description}
              onChange={(event) => setDraft({ ...draft, description: event.target.value })}
            />
          </label>

          <label>
            Skills
            <input placeholder="Python, React, AI" value={draft.skills}
              onChange={(event) => setDraft({ ...draft, skills: event.target.value })} />
          </label>

          <label>
            Apply Link
            <input placeholder="https://... or mailto:..." value={draft.applyLink}
              onChange={(event) => setDraft({ ...draft, applyLink: event.target.value })} />
          </label>

        </div>

        <div className="form-bottom">

          <label>
            Publishing status
            <select value={draft.status} onChange={(event) => setDraft({ ...draft, status: event.target.value })}>
              <option>Draft</option><option>Published</option><option>Hidden</option>
            </select>
          </label>
          {error && <p className="form-error" role="alert">{error}</p>}

          <button
            className="button primary"
            onClick={createJob}
          >
            Create Job
          </button>

        </div>

      </div>

      <aside className="card internal-job-preview">
        <div className="card-header"><div><h2>Job preview</h2><p>Local preview · not published</p></div><Eye size={17} aria-hidden="true" /></div>
        <span className="preview-job-status">{draft.status}</span>
        <h3>{draft.title || "Your job title"}</h3>
        <strong>{draft.department || "AIFAGen Labs"}</strong>
        <p>{draft.location || "Location"} · {draft.type}</p>
        <div className="preview-job-description"><b>About the role</b><p>{draft.description || "Add a description to preview the role details."}</p></div>
        {draft.skills && <small>Skills · {draft.skills}</small>}
        <button className="button primary" disabled>Apply now</button>
      </aside>
      </div>

      <div className="card internal-postings-card">

        <div className="card-header">
          <div>
            <h2>Internal Job Postings</h2>
            <p>{internalJobs.length} postings</p>
          </div>
        </div>

        <div className="internal-job-list">

          {internalJobs.map((job) => (
            <div
              className="internal-job-row"
              key={job.id}
            >

              <div className="job-main">

                <strong>{job.title}</strong>

                <span>
                  {job.department} · {job.location}
                </span>

                <small>{job.skills}</small>

              </div>

              <StatusBadge>
                {job.status || (job.visible ? "Published" : "Hidden")}
              </StatusBadge>

              <div className="row-actions">

                <button
                  onClick={() =>
                    setModal({
                      type: "edit-job",
                      job,
                      onSave: (updates, reason) => {
                        if (!isSafeApplyLink(updates.applyLink)) {
                          throw new Error("Apply links must use https:// or mailto:.");
                        }
                        const next = { ...job, ...updates };
                        setInternalJobs((current) => current.map((item) => item.id === job.id ? next : item));
                        recordAudit("Edited internal job", job.title, job, next, reason);
                      },
                    })
                  }
                >
                  Edit
                </button>

                <button onClick={() => changeVisibility(job)}>
                  {job.visible ? "Hide" : "Show"}
                </button>

                <button className="danger-text" onClick={() => deleteJob(job)}>
                  Delete
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>
    </>
  );
}

/* =========================================================
   JOB SOURCES
========================================================= */

function SourcesPage({ sources, sourceRuns, setSidePanel, retrySource }) {
  const workingCount = sources.filter((source) => source.status === "Working").length;
  const runningCount = sources.filter((source) => source.status === "Running").length;
  const failedCount = sources.filter((source) => ["Failed", "Blocked"].includes(source.status)).length;
  const stalledCount = sources.filter((source) => source.status === "Stalled").length;
  const isRetrying = sources.some((source) => source.status === "Running");

  return (
    <>
      <PageHeader
        title="Job Sources"
        subtitle="Monitor job collection sources and recent runs."
        actions={
          <button
            className="button primary"
            disabled={isRetrying}
            onClick={() =>
              sources
                .filter((source) => source.status !== "Working")
                .forEach((source) => retrySource(source.name))
            }
          >
            <RefreshCw size={15} aria-hidden="true" />
            {isRetrying ? "Retry in progress..." : "Simulate retries"}
          </button>
        }
      />

      <div className="source-health-overview card">
        <div className="source-health-head"><div><strong>Source health</strong><small>Sample metrics from simulated collection runs</small></div><strong>{sources.length ? Math.round((workingCount / sources.length) * 100) : 0}%</strong></div>
        <div className="source-health-counts">
          <span><i className="working" />{workingCount} Working</span>
          <span><i className="running" />{runningCount} Running</span>
          <span><i className="failed" />{failedCount} Failed</span>
          <span><i className="stalled" />{stalledCount} Stalled</span>
        </div>
      </div>

      <div className="table-card">

        <div className="table-title">
          <div>
            <h2>Job Sources</h2>
            <p>Problem sources appear first</p>
          </div>
        </div>

        <div className="table-wrapper">

          <table>

            <thead>
              <tr>
                <th>SOURCE</th>
                <th>STATUS</th>
                <th>LAST RUN</th>
                <th>DURATION</th>
                <th>JOBS SAVED</th>
                <th>24H JOBS</th>
                <th>NOTE</th>
                <th>ACTION</th>
              </tr>
            </thead>

            <tbody>

              {[...sources].sort((a, b) =>
                a.status === "Working" ? 1 : b.status === "Working" ? -1 : 0
              ).map((source) => (
                <tr key={source.name}>

                  <td>
                    <strong>{source.name}</strong>
                  </td>

                  <td>
                    <StatusBadge>
                      {source.status}
                    </StatusBadge>
                  </td>

                  <td>{source.lastRun}</td>
                  <td>{source.duration}</td>
                  <td>{source.saved}</td>
                  <td>{source.jobs24}</td>
                  <td>{source.note}</td>

                  <td>
                    <div className="source-row-actions">
                      <button
                        className="text-button"
                        onClick={() => setSidePanel({ type: "source", source })}
                      >
                        Details
                      </button>
                      <button
                        className="text-button"
                        disabled={source.status === "Running"}
                        onClick={() => retrySource(source.name)}
                      >
                        {source.status === "Running" ? "Retrying…" : "Retry"}
                      </button>
                    </div>
                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>

      <div className="card run-history-card">

        <div className="card-header">
          <div>
            <h2>Recent Run History</h2>
            <p>Latest collection activity</p>
          </div>
        </div>

        <div className="run-history">

          {sourceRuns.slice(0, 8).map((run) => (
            <button
              className="source-run-row"
              key={run.id}
              onClick={() => {
                const source = sources.find((item) => item.name === run.source);
                if (source) setSidePanel({ type: "source", source, run });
              }}
            >
              <span className="source-run-when">{run.when}</span>
              <strong className="source-run-source">{run.source}</strong>
              <span className="source-run-status"><StatusBadge>{run.status}</StatusBadge></span>
              <span className="source-run-outcome">{run.error || run.jobs}</span>
              <span className="source-run-view">View details</span>
            </button>
          ))}

        </div>

      </div>
    </>
  );
}

/* =========================================================
   AI USAGE
========================================================= */

function AIUsagePage({ users }) {
  const registeredUsers = 12842;
  const activeUsers = users.filter((user) => user.ai > 0).length;
  return (
    <>
      <PageHeader
        title="AI Usage"
        subtitle="Monitor AI calls, providers and estimated platform cost."
      />

      <div className="stats-grid">

        <StatCard
          title="AI Calls"
          value="48,420"
          change="+14.8% this month · sample"
          icon={Sparkles}
          sparkline={[24, 31, 29, 38, 44, 52, 62]}
        />

        <StatCard
          title="Estimated Cost"
          value={formatMoney(18420)}
          change="Current period · sample"
          icon={IndianRupee}
          sparkline={[18, 22, 26, 29, 34, 41, 48]}
        />

        <StatCard
          title="Success rate"
          value="98.7%"
          change="Estimated task success"
          icon={CheckCircle2}
          sparkline={[86, 88, 91, 90, 94, 96, 99]}
        />

        <StatCard
          title="Avg latency"
          value="2.4 sec"
          change="Estimated processing time"
          icon={Timer}
          sparkline={[60, 53, 56, 49, 42, 45, 38]}
        />

      </div>

      <div className="two-column ai-usage-grid">

        <div className="card">

          <div className="card-header">
            <div>
              <h2>Usage by Feature</h2>
              <p>Current period</p>
            </div>
          </div>

          <UsageRow
            label="Job Matching"
            value="42%"
          />

          <UsageRow
            label="Resume Analysis"
            value="28%"
          />

          <UsageRow
            label="Career Assistant"
            value="18%"
          />

          <UsageRow
            label="Other"
            value="12%"
          />

        </div>

        <div className="card">

          <div className="card-header">
            <div>
              <h2>Provider Usage</h2>
              <p>AI provider distribution</p>
            </div>
          </div>

          <UsageRow
            label="OpenAI"
            value="56%"
          />

          <UsageRow
            label="Gemini"
            value="29%"
          />

          <UsageRow
            label="HuggingFace"
            value="15%"
          />

        </div>

      </div>

      <section className="card provider-performance-card">
        <div className="card-header">
          <div><h2>Provider performance</h2><p>Illustrative operational estimates · review AI Processing for task-level outcomes</p></div>
          <span className="sample-data-badge">Sample data</span>
        </div>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>PROVIDER</th><th>CALLS</th><th>EST. COST</th><th>SUCCESS</th><th>AVG LATENCY</th></tr></thead>
            <tbody>
              {[
                ["OpenAI", "27.1K", "₹9.2K", "99.1%", "1.8 sec"],
                ["Gemini", "14.0K", "₹5.4K", "98.4%", "2.1 sec"],
                ["HuggingFace", "7.3K", "₹3.8K", "97.9%", "3.4 sec"],
              ].map(([provider, calls, cost, success, latency]) => (
                <tr key={provider}><td><strong>{provider}</strong></td><td>{calls}</td><td>{cost}</td><td><StatusBadge>{success}</StatusBadge></td><td>{latency}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="card adoption-card">
        <div className="card-header adoption-heading">
          <div>
            <h2>Feature adoption & cost efficiency</h2>
            <p>Estimated reach across registered users; usage remains separate from processing success.</p>
          </div>
          <span className="sample-data-badge">Illustrative estimates</span>
        </div>

        <div className="adoption-summary">
          <div>
            <span>AI-active users in account sample</span>
            <strong>{activeUsers} <small>/ {users.length}</small></strong>
          </div>
          <div>
            <span>Estimated AI cost per active user</span>
            <strong>{formatMoney(18420 / 3426)}</strong>
          </div>
          <div>
            <span>Lowest cost per operation</span>
            <strong>{formatMoney(Math.min(...featureAdoption.map((item) => item.costPerUse)))}</strong>
          </div>
          <div>
            <span>Most-used feature</span>
            <strong>{[...featureAdoption].sort((a, b) => b.users - a.users)[0].feature}</strong>
          </div>
          <div>
            <span>Least-used feature</span>
            <strong>{[...featureAdoption].sort((a, b) => a.users - b.users)[0].feature}</strong>
          </div>
        </div>

        <div className="table-wrapper">
          <table className="analytics-table">
            <thead>
              <tr>
                <th>FEATURE</th>
                <th>USERS</th>
                <th>REGISTERED USERS</th>
                <th>BASIC ADOPTION</th>
                <th>PREMIUM ADOPTION</th>
                <th>AVG COST / USE</th>
                <th>MONTH OVER MONTH</th>
              </tr>
            </thead>
            <tbody>
              {[...featureAdoption].sort((a, b) => b.users - a.users).map((item) => (
                <tr key={item.feature}>
                  <td><strong>{item.feature}</strong></td>
                  <td>{item.users.toLocaleString()}</td>
                  <td>
                    <div className="adoption-cell">
                      <strong>{((item.users / registeredUsers) * 100).toFixed(1)}%</strong>
                      <span>{item.users.toLocaleString()} users</span>
                    </div>
                  </td>
                  <td>{item.basic}%</td>
                  <td>{item.premium}%</td>
                  <td>{formatMoney(item.costPerUse)}</td>
                  <td className={item.monthlyChange >= 0 ? "trend-up" : "trend-down"}>
                    {item.monthlyChange > 0 ? "+" : ""}{item.monthlyChange}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="analytics-footnote">
          Feature counts, plan comparisons, and costs are prototype estimates until connected to production usage events.
        </p>
      </section>

    </>
  );
}

function UsageRow({
  label,
  value,
}) {
  return (
    <div className="usage-row">

      <div>
        <span>{label}</span>
        <strong>{value}</strong>
      </div>

      <div className="usage-bar">
        <span
          style={{
            width: value,
          }}
        />
      </div>

    </div>
  );
}

function ProductAnalyticsPage() {
  const registered = funnelStages[0].users;
  return (
    <>
      <PageHeader
        title="Product Analytics"
        subtitle="Understand how users move from sign-up to meaningful outcomes."
      />
      <div className="analytics-notice">
        <Info size={16} aria-hidden="true" />
        <span>Illustrative funnel data for layout review. Connect production product events before using these figures for business decisions.</span>
      </div>
      <section className="card funnel-card">
        <div className="card-header funnel-header">
          <div>
            <h2>Application funnel</h2>
            <p>Journey from account registration to Premium subscription</p>
          </div>
          <span className="sample-data-badge">Sample data</span>
        </div>
        <div className="funnel-stage-list">
          {funnelStages.map((stage, index) => {
            const conversion = (stage.users / registered) * 100;
            const previous = funnelStages[index - 1];
            const dropOff = previous
              ? Math.round(((previous.users - stage.users) / previous.users) * 100)
              : 0;
            return (
              <div className="funnel-stage" key={stage.label}>
                <div className="funnel-stage-label">
                  <span className="funnel-stage-index">{String(index + 1).padStart(2, "0")}</span>
                  <strong>{stage.label}</strong>
                </div>
                <div
                  className="funnel-track"
                  role="img"
                  aria-label={`${stage.label}: ${stage.users.toLocaleString()} users, ${conversion.toFixed(0)} percent of registrations`}
                >
                  <span
                    className="funnel-bar"
                    style={{
                      width: `${Math.max(conversion, 8)}%`,
                      background: stage.color,
                    }}
                  />
                </div>
                <strong className="funnel-users">{stage.users.toLocaleString()}</strong>
                <span className="funnel-conversion">{conversion.toFixed(0)}%</span>
                <span className="funnel-dropoff">
                  {previous ? `${dropOff}% drop` : "Baseline"}
                </span>
              </div>
            );
          })}
        </div>
        <div className="funnel-legend">
          <span>Stage completion is shown as a share of registered users.</span>
          <span>Drop indicates loss from the immediately previous stage.</span>
        </div>
      </section>
      <div className="two-column funnel-insights">
        <section className="card funnel-insight-card">
          <div className="card-header">
            <div>
              <h2>Largest journey drop</h2>
              <p>Where follow-up or product improvements may help</p>
            </div>
          </div>
          <strong className="funnel-insight-value">30%</strong>
          <span>of registered users have not uploaded a resume in this sample.</span>
        </section>
        <section className="card funnel-insight-card">
          <div className="card-header">
            <div>
              <h2>Application-to-Premium path</h2>
              <p>Conversion between adjacent stages</p>
            </div>
          </div>
          <strong className="funnel-insight-value">44%</strong>
          <span>of users who applied are shown as Premium in this illustrative dataset.</span>
        </section>
      </div>
    </>
  );
}

function daysSinceLastActive(user) {
  const activeDate = parsePlanEndDate(user.lastActive || user.joined);
  if (!activeDate) return Number.POSITIVE_INFINITY;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return Math.floor((today - activeDate) / 86400000);
}

function EngagementPage({ users, auditLogs, setSidePanel, payments }) {
  const [inactiveWindow, setInactiveWindow] = useState("7");
  const [planFilter, setPlanFilter] = useState("All");
  const activityCounts = {
    daily: users.filter((user) => daysSinceLastActive(user) <= 0).length,
    weekly: users.filter((user) => daysSinceLastActive(user) < 7).length,
    monthly: users.filter((user) => daysSinceLastActive(user) < 30).length,
  };
  const atRiskUsers = users.filter((user) => {
    const days = daysSinceLastActive(user);
    return days >= Number(inactiveWindow) &&
      (planFilter === "All" || user.plan === planFilter);
  });
  const renewingUsers = users.filter((user) => {
    if (user.plan !== "Premium" || user.status !== "Active" || !user.planEnd) return false;
    const endDate = parsePlanEndDate(user.planEnd);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const cutoff = new Date(today);
    cutoff.setDate(cutoff.getDate() + 30);
    return endDate && endDate >= today && endDate <= cutoff;
  });
  const downgradeCount = auditLogs.filter((log) => {
    if (!/plan/i.test(log.action || "")) return false;
    try {
      const before = JSON.parse(log.before || "{}");
      const after = JSON.parse(log.after || "{}");
      const ranks = { None: 0, Basic: 1, Premium: 2 };
      return ranks[before.plan] > ranks[after.plan];
    } catch (error) {
      console.error("Unable to read a plan audit record for engagement analytics.", error);
      return false;
    }
  }).length;
  const cancelledCount = users.filter((user) => user.status === "Cancelled").length;
  const retentionCohorts = useMemo(() => {
    const cohorts = new Map();
    users.forEach((user) => {
      const joined = user.joined ? new Date(user.joined) : null;
      if (!joined || Number.isNaN(joined.getTime())) return;
      const key = joined.toLocaleDateString("en-US", { month: "short", year: "numeric" });
      const cohort = cohorts.get(key) || { month: key, users: 0, active: 0 };
      cohort.users += 1;
      if (daysSinceLastActive(user) < 30) cohort.active += 1;
      cohorts.set(key, cohort);
    });
    return [...cohorts.values()]
      .map((cohort) => ({
        ...cohort,
        retention: cohort.users ? (cohort.active / cohort.users) * 100 : 0,
      }))
      .sort((a, b) => new Date(a.month) - new Date(b.month));
  }, [users]);

  return (
    <>
      <PageHeader
        title="User Engagement"
        subtitle="Review activity, inactivity risk, renewal timing, and retention signals."
      />
      <div className="analytics-notice">
        <Info size={16} aria-hidden="true" />
        <span>Activity metrics use sample last-active dates; records without one fall back to their signup date. Replace both with product event timestamps for live reporting.</span>
      </div>
      <div className="stats-grid engagement-stats">
        <StatCard title="Daily active users" value={activityCounts.daily} change="Active today in sample" icon={Activity} />
        <StatCard title="Weekly active users" value={activityCounts.weekly} change="Active in the last 7 days" icon={Users} />
        <StatCard title="Monthly active users" value={activityCounts.monthly} change="Active in the last 30 days" icon={BarChart3} />
        <StatCard title="Premium renewals" value={renewingUsers.length} change="Within the next 30 days" icon={CreditCard} />
        <StatCard title="Cancellations" value={cancelledCount} change={`${downgradeCount} recorded downgrades`} icon={UserX} />
      </div>
      <section className="card engagement-table-card">
        <div className="table-title engagement-table-heading">
          <div>
            <h2>Users at risk of inactivity</h2>
            <p>{atRiskUsers.length} accounts have not returned within the selected window</p>
          </div>
          <div className="engagement-filters">
            <select
              aria-label="Inactive duration"
              value={inactiveWindow}
              onChange={(event) => setInactiveWindow(event.target.value)}
            >
              <option value="7">Inactive 7+ days</option>
              <option value="14">Inactive 14+ days</option>
              <option value="30">Inactive 30+ days</option>
            </select>
            <select
              aria-label="Filter inactive users by plan"
              value={planFilter}
              onChange={(event) => setPlanFilter(event.target.value)}
            >
              <option value="All">All plans</option>
              {PLAN_OPTIONS.map((plan) => <option key={plan}>{plan}</option>)}
            </select>
          </div>
        </div>
        <div className="table-wrapper">
          <table className="analytics-table">
            <thead>
              <tr><th>USER</th><th>PLAN</th><th>LAST ACTIVE</th><th>INACTIVE FOR</th><th>STATUS</th><th>ACTION</th></tr>
            </thead>
            <tbody>
              {atRiskUsers.map((user) => {
                const days = daysSinceLastActive(user);
                return (
                  <tr key={user.id}>
                    <td><strong>{user.name}</strong><span className="table-subtext">{user.email}</span></td>
                    <td>{user.plan}</td>
                    <td>{user.lastActive || `${user.joined} (signup fallback)`}</td>
                    <td>{Number.isFinite(days) ? `${days} days` : "Unknown"}</td>
                    <td><StatusBadge>{user.status}</StatusBadge></td>
                    <td>
                      <button
                        className="text-button"
                        onClick={() => setSidePanel({
                          type: "user",
                          user,
                          lastPayment: payments.find((payment) => payment.id === user.lastPaymentId),
                        })}
                      >
                        View account
                      </button>
                    </td>
                  </tr>
                );
              })}
              {!atRiskUsers.length && <tr><td colSpan="6"><div className="empty-state">No users match this inactivity filter.</div></td></tr>}
            </tbody>
          </table>
        </div>
      </section>
      <section className="card cohort-card">
        <div className="card-header">
          <div><h2>Retention by signup month</h2><p>Share of each sample signup cohort active in the last 30 days</p></div>
          <span className="sample-data-badge">Prototype estimate</span>
        </div>
        <div className="table-wrapper">
          <table className="analytics-table">
            <thead><tr><th>SIGNUP MONTH</th><th>USERS</th><th>ACTIVE IN LAST 30 DAYS</th><th>EST. RETENTION</th></tr></thead>
            <tbody>
              {retentionCohorts.map((cohort) => (
                <tr key={cohort.month}>
                  <td><strong>{cohort.month}</strong></td>
                  <td>{cohort.users}</td>
                  <td>{cohort.active}</td>
                  <td><strong>{cohort.retention.toFixed(0)}%</strong></td>
                </tr>
              ))}
              {!retentionCohorts.length && <tr><td colSpan="4"><div className="empty-state">No signup cohort data is available.</div></td></tr>}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

function AIProcessingPage({ tasks, users, setSidePanel, retryAiTask }) {
  const completed = tasks.filter((task) => task.status.startsWith("Completed"));
  const failed = tasks.filter((task) => task.status === "Failed");
  const processing = tasks.filter((task) => task.status === "Processing");
  const queued = tasks.filter((task) => task.status === "Queued");
  const averageTime = completed.length
    ? completed.reduce((sum, task) => sum + task.durationSeconds, 0) / completed.length
    : 0;
  const totalCost = tasks.reduce((sum, task) => sum + task.cost, 0);
  const taskUser = (task) => users.find((user) => user.id === task.userId);

  return (
    <>
      <PageHeader
        title="AI Processing Monitor"
        subtitle="Inspect individual AI operations, errors, timing, and simulated retries."
      />
      <div className="analytics-notice">
        <Info size={16} aria-hidden="true" />
        <span>Sample processing events. Retry is simulated locally and does not call an AI provider.</span>
      </div>
      <div className="stats-grid processing-stats">
        <StatCard title="Queued" value={queued.length} change="Waiting to start" icon={Timer} />
        <StatCard title="Processing" value={processing.length} change="Currently running" icon={RefreshCw} />
        <StatCard title="Completed" value={completed.length} change="Successful operations" icon={CheckCircle2} />
        <StatCard title="Failed" value={failed.length} change="Require investigation" icon={AlertCircle} />
        <StatCard title="Average duration" value={`${averageTime.toFixed(1)}s`} change={`Sample task cost ${formatMoney(totalCost)}`} icon={Activity} />
      </div>
      <section className="table-card">
        <div className="table-title">
          <div><h2>Recent AI tasks</h2><p>Open a task to inspect metadata and result/error details</p></div>
        </div>
        <div className="table-wrapper">
          <table className="analytics-table">
            <thead><tr><th>TASK</th><th>TYPE</th><th>USER</th><th>STATUS</th><th>DURATION</th><th>EST. COST</th><th>CREATED</th><th>ACTION</th></tr></thead>
            <tbody>
              {tasks.map((task) => {
                const user = taskUser(task);
                return (
                  <tr key={task.id}>
                    <td><strong>{task.id}</strong></td>
                    <td>{task.type}</td>
                    <td>{user?.email || "Unknown user"}</td>
                    <td><StatusBadge>{task.status}</StatusBadge></td>
                    <td>{task.durationSeconds ? `${task.durationSeconds.toFixed(1)} sec` : "—"}</td>
                    <td>{formatMoney(task.cost)}</td>
                    <td>{task.createdAt}</td>
                    <td>
                      <div className="source-row-actions">
                        <button className="text-button" onClick={() => setSidePanel({ type: "ai-task", task })}>Inspect</button>
                        {task.status === "Failed" && (
                          <button className="text-button" onClick={() => retryAiTask(task.id)}>Retry (simulated)</button>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
      <div className="processing-cost-grid">
        {["Resume Analysis", "Job Matching", "Resume Scoring"].map((type) => {
          const typeTasks = tasks.filter((task) => task.type === type);
          const cost = typeTasks.reduce((sum, task) => sum + task.cost, 0);
          return (
            <section className="card processing-cost-card" key={type}>
              <span>{type}</span>
              <strong>{formatMoney(cost)}</strong>
              <small>{typeTasks.length} sample task{typeTasks.length === 1 ? "" : "s"}</small>
            </section>
          );
        })}
      </div>
    </>
  );
}

function JobQualityPage({ jobs, setJobs, setModal, setSidePanel, recordAudit }) {
  const issues = useMemo(() => {
    const results = [];
    const grouped = new Map();
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    jobs.forEach((job) => {
      const normalizedTitle = String(job.title || "").trim().toLowerCase().replace(/\s+/g, " ");
      const normalizedCompany = String(job.company || "").trim().toLowerCase().replace(/\s+/g, " ");
      if (normalizedTitle && normalizedCompany) {
        const duplicateKey = `${normalizedTitle}|${normalizedCompany}`;
        grouped.set(duplicateKey, [...(grouped.get(duplicateKey) || []), job]);
      }

      const missingFields = ["title", "company", "location"].filter(
        (field) => !String(job[field] || "").trim()
      );
      if (missingFields.length) {
        results.push({
          id: `incomplete-${job.id}`,
          job,
          type: `Incomplete listing: missing ${missingFields.join(", ")}`,
          severity: "High",
          suggestion: "Review listing",
        });
      }

      if (typeof job.applyUrl !== "string" || !job.applyUrl.trim()) {
        results.push({
          id: `missing-url-${job.id}`,
          job,
          type: "Missing application link",
          severity: "High",
          suggestion: "Review listing",
        });
      } else if (!isSafeApplyLink(job.applyUrl)) {
        results.push({
          id: `invalid-url-${job.id}`,
          job,
          type: "Invalid application URL",
          severity: "High",
          suggestion: "Review URL",
        });
      }

      const postedAt = parsePlanEndDate(job.date);
      if (postedAt) {
        const ageDays = Math.floor((now - postedAt) / 86400000);
        if (ageDays > 30) {
          results.push({
            id: `stale-${job.id}`,
            job,
            type: `Potentially stale (${ageDays} days old)`,
            severity: "Medium",
            suggestion: "Verify listing",
          });
        }
      }

      const expiryDate = job.expiresAt ? parsePlanEndDate(job.expiresAt) : null;
      if (expiryDate && expiryDate < now) {
        results.push({
          id: `expired-${job.id}`,
          job,
          type: `Expired on ${job.expiresAt}`,
          severity: "High",
          suggestion: "Verify listing",
        });
      }
    });

    grouped.forEach((matches) => {
      if (matches.length > 1) {
        results.push({
          id: `duplicate-${matches.map((job) => job.id).join("-")}`,
          job: matches[0],
          matches,
          type: "Possible duplicate listing",
          severity: "Medium",
          suggestion: "Compare duplicates",
        });
      }
    });
    return results;
  }, [jobs]);

  const issuesBySeverity = {
    high: issues.filter((issue) => issue.severity === "High").length,
    medium: issues.filter((issue) => issue.severity === "Medium").length,
  };

  function hideProblemJob(job) {
    setModal({
      type: "confirm-action",
      title: "Hide this job listing?",
      message: `"${job.title}" will be hidden from users but kept in the admin portal.`,
      confirmLabel: "Hide job",
      successMessage: "Job listing hidden.",
      onConfirm: () => {
        const updated = { ...job, visible: false };
        setJobs((current) => current.map((item) => item.id === job.id ? updated : item));
        recordAudit("Hid job from quality review", job.title, { visible: job.visible }, { visible: false }, "Job quality issue review");
      },
    });
  }

  return (
    <>
      <PageHeader
        title="Job Quality"
        subtitle="Find duplicate, stale, incomplete, and unsafe listings before users encounter them."
      />
      <div className="analytics-notice">
        <Info size={16} aria-hidden="true" />
        <span>Quality checks run on the available sample job fields. Listings without imported application URLs are flagged for review.</span>
      </div>
      <div className="stats-grid quality-stats">
        <StatCard title="Open quality flags" value={issues.length} change="Across current job listings" icon={FileWarning} />
        <StatCard title="High severity" value={issuesBySeverity.high} change="Missing or unsafe apply links" icon={AlertCircle} />
        <StatCard title="Duplicate groups" value={issues.filter((issue) => issue.matches).length} change="Same normalized company and role" icon={GitCompareArrows} />
        <StatCard title="Potentially stale" value={issues.filter((issue) => issue.type.startsWith("Potentially stale")).length} change="Posted more than 30 days ago" icon={Timer} />
      </div>
      <section className="table-card">
        <div className="table-title">
          <div><h2>Issues to review</h2><p>Suggested actions preserve the original listing unless hidden by an admin</p></div>
        </div>
        <div className="table-wrapper">
          <table className="analytics-table">
            <thead><tr><th>JOB</th><th>ISSUE</th><th>SEVERITY</th><th>SOURCE</th><th>SUGGESTED ACTION</th></tr></thead>
            <tbody>
              {issues.map((issue) => (
                <tr key={issue.id}>
                  <td><strong>{issue.job.title}</strong><span className="table-subtext">{issue.job.company}</span></td>
                  <td>{issue.type}</td>
                  <td><StatusBadge>{issue.severity}</StatusBadge></td>
                  <td>{issue.job.source}</td>
                  <td>
                    {issue.matches ? (
                      <button className="text-button" onClick={() => setModal({ type: "compare-jobs", jobs: issue.matches })}>
                        Compare duplicates
                      </button>
                    ) : issue.severity === "High" ? (
                      <button className="text-button" onClick={() => hideProblemJob(issue.job)}>Review & hide</button>
                    ) : (
                      <button className="text-button" onClick={() => setSidePanel({ type: "job", job: issue.job })}>Verify details</button>
                    )}
                  </td>
                </tr>
              ))}
              {!issues.length && <tr><td colSpan="5"><div className="empty-state">No job quality issues found.</div></td></tr>}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

/* =========================================================
   AUDIT LOG
========================================================= */

function AuditPage({ exportCSV, logs }) {
  const [adminFilter, setAdminFilter] = useState("All");
  const [actionFilter, setActionFilter] = useState("");
  const [riskFilter, setRiskFilter] = useState("All");
  const riskFor = (action) => {
    if (/refund|remove admin|delete/i.test(action)) return "High";
    if (/change|update|hide|show|edit|add admin/i.test(action)) return "Medium";
    return "Low";
  };
  const highRiskCount = logs.filter((log) => riskFor(log.action) === "High").length;
  const filteredLogs = logs.filter((log) =>
    (adminFilter === "All" || log.admin === adminFilter) &&
    (riskFilter === "All" || riskFor(log.action) === riskFilter) &&
    (!actionFilter || `${log.action} ${log.target} ${log.reason}`.toLowerCase().includes(actionFilter.toLowerCase()))
  );
  const renderAuditSnapshot = (rawValue) => {
    if (!rawValue) return "—";
    try {
      const value = JSON.parse(rawValue);
      if (!value || typeof value !== "object" || Array.isArray(value)) return String(value);
      const entries = Object.entries(value).filter(([, item]) =>
        item === null || ["string", "number", "boolean"].includes(typeof item)
      );
      return entries.length
        ? entries.slice(0, 4).map(([key, item]) => `${key}: ${item ?? "—"}`).join(" · ")
        : "Record updated";
    } catch {
      return rawValue;
    }
  };

  return (
    <>
      <PageHeader
        title="Audit Log"
        subtitle="Track important administrative actions and changes."
        actions={
          <button
            className="button secondary"
            onClick={() =>
              exportCSV(logs, "audit-log.csv")
            }
          >
            <Download size={15} aria-hidden="true" />
            Export CSV
          </button>
        }
      />

      <div className="stats-grid audit-stats">
        <StatCard title="Recorded actions" value={String(logs.length)} change="All available history" icon={ClipboardList} />
        <StatCard title="Administrators" value={String(new Set(logs.map((log) => log.admin)).size)} change="With recorded activity" icon={Users} />
        <StatCard title="High risk" value={String(highRiskCount)} change="Review recommended" icon={AlertCircle} />
      </div>

      <div className="table-card">

        <div className="table-title">
          <div>
            <h2>Activity History</h2>
            <p>Newest activity first · before/after values are audit snapshots</p>
          </div>
        </div>

        <div className="filter-card audit-filters">
          <select aria-label="Filter by administrator" value={adminFilter} onChange={(event) => setAdminFilter(event.target.value)}>
            <option>All</option>
            {[...new Set(logs.map((log) => log.admin))].map((admin) => <option key={admin}>{admin}</option>)}
          </select>
          <input aria-label="Filter audit actions" placeholder="Search action or target..." value={actionFilter} onChange={(event) => setActionFilter(event.target.value)} />
          <select aria-label="Filter by risk" value={riskFilter} onChange={(event) => setRiskFilter(event.target.value)}>
            <option>All</option><option>High</option><option>Medium</option><option>Low</option>
          </select>
        </div>

        <div className="table-wrapper">

          <table>

            <thead>
              <tr>
                <th>WHEN</th>
                <th>ADMIN</th>
                <th>ACTION</th>
                <th>TARGET</th>
                <th>RISK</th>
                <th>BEFORE</th>
                <th>AFTER</th>
                <th>REASON</th>
              </tr>
            </thead>

            <tbody>

              {filteredLogs.map((log) => (
                <tr key={log.id}>
                  <td>{log.when}</td>
                  <td>{log.admin}</td>
                  <td>
                    <strong>{log.action}</strong>
                  </td>
                  <td>{log.target}</td>
                  <td><StatusBadge type={`risk-${riskFor(log.action).toLowerCase()}`}>{riskFor(log.action)}</StatusBadge></td>
                  <td><div className="audit-snapshot">{renderAuditSnapshot(log.before)}</div></td>
                  <td><div className="audit-snapshot">{renderAuditSnapshot(log.after)}</div></td>
                  <td>{log.reason}</td>
                </tr>
              ))}

              {filteredLogs.length === 0 && (
                <tr><td colSpan={8}><div className="empty-state">No audit entries match these filters.</div></td></tr>
              )}

            </tbody>

          </table>

        </div>

      </div>
    </>
  );
}

/* =========================================================
   SETTINGS
========================================================= */

function SettingsPage({ admins, setAdmins, recordAudit, setModal, notify }) {
  const [tab, setTab] = useState("Admins");
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [error, setError] = useState("");
  const defaultNotifications = {
    "Payment failures": true,
    "Job source failures": true,
    "AI service errors": true,
    "New administrator added": true,
    "Daily summary": false,
  };
  const [notifications, setNotifications] = useState(() => {
    try {
      const storedPreferences = window.localStorage.getItem("aifagen-admin-notification-preferences");
      if (!storedPreferences) return defaultNotifications;
      const parsedPreferences = JSON.parse(storedPreferences);
      if (!parsedPreferences || typeof parsedPreferences !== "object" || Array.isArray(parsedPreferences)) {
        throw new Error("Saved notification preferences have an invalid format.");
      }
      return Object.fromEntries(
        Object.keys(defaultNotifications).map((name) => [
            name,
            typeof parsedPreferences[name] === "boolean" ? parsedPreferences[name] : defaultNotifications[name],
        ])
      );
    } catch (storageError) {
      console.error("Unable to load saved notification preferences.", storageError);
      return defaultNotifications;
    }
  });

  function saveSettings() {
    if (tab !== "Notifications") {
      notify("Administrator changes are applied immediately; other settings are read-only in this prototype.", "info");
      return;
    }
    try {
      window.localStorage.setItem("aifagen-admin-notification-preferences", JSON.stringify(notifications));
      notify("Notification preferences saved.");
    } catch (storageError) {
      console.error("Unable to save notification preferences.", storageError);
      notify("Notification preferences could not be saved.", "error");
    }
  }

  function addAdmin() {
    const normalizedEmail = email.trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
      setError("Enter a valid email.");
      return;
    }
    if (admins.some((admin) => admin.email.toLowerCase() === normalizedEmail)) {
      setError("This administrator already exists.");
      return;
    }
    if (!reason.trim()) {
      setError("A reason for granting administrator access is required.");
      return;
    }

    const admin = {
      email: normalizedEmail,
      date: new Date().toLocaleDateString("en-GB", {
        day: "2-digit", month: "short", year: "numeric",
      }),
    };
    setAdmins((current) => [...current, admin]);
    recordAudit("Added admin", admin.email, null, admin, reason.trim());
    notify("Administrator access granted.");
    setEmail("");
    setReason("");
    setError("");
  }

  function removeAdmin(admin) {
    if (admins.length <= 1) {
      notify("The last administrator cannot be removed.", "error");
      return;
    }
    setModal({
      type: "confirm-action",
      title: "Remove administrator?",
      message: `Remove ${admin.email} from administrators? This change will be recorded in the audit log.`,
      confirmLabel: "Remove access",
      danger: true,
      requiresReason: true,
      reasonLabel: "Reason for removal",
      onConfirm: (removalReason) => {
        if (!removalReason.trim()) throw new Error("A reason for removing administrator access is required.");
        setAdmins((current) => current.filter((item) => item.email !== admin.email));
        recordAudit("Removed admin", admin.email, admin, null, removalReason.trim());
        notify("Administrator access removed.");
      },
    });
  }

  const tabs = [
    { name: "Admins", icon: Users },
    { name: "Security", icon: ShieldCheck },
    { name: "Notifications", icon: Bell },
    { name: "Integrations", icon: Radio },
    { name: "System", icon: Activity },
  ];

  return (
    <div className="admin-settings-page">
      <PageHeader
        title="Settings"
        subtitle="Manage administrator access, security, notifications, and platform services."
        className="settings-page-header"
        actions={<button className="button primary settings-save-button" onClick={saveSettings}><CheckCircle2 size={16} aria-hidden="true" />Save Changes</button>}
      />

      <nav className="settings-tabs" aria-label="Administration settings" role="tablist">
        {tabs.map(({ name, icon: TabIcon }) => (
          <button key={name} className={tab === name ? "active" : ""} role="tab" aria-selected={tab === name} aria-current={tab === name ? "page" : undefined} onClick={() => setTab(name)}><TabIcon size={16} aria-hidden="true" /><span>{name}</span></button>
        ))}
      </nav>

      <div className="settings-content">

        {tab === "Admins" && <section className="card settings-panel">

          <div className="card-header">
            <div>
              <h2>Administrator access</h2>
              <p>Manage who can access and administer this portal.</p>
            </div>
          </div>

          <div className="admin-add">

            <input
              placeholder="admin@example.com"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />
            <input
              placeholder="Reason for access"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            />

            <button
              className="button primary"
              onClick={addAdmin}
            >
              <Plus size={15} aria-hidden="true" />
              Add Admin
            </button>

          </div>
          {error && <p className="form-error" role="alert">{error}</p>}

          <div className="admin-list">

            {admins.map((admin) => (
              <div
                className="admin-row"
                key={admin.email}
              >

                <div className="small-avatar">
                  {admin.email.charAt(0).toUpperCase()}
                </div>

                <div className="admin-row-info">

                  <strong>{admin.email}</strong>

                  <span>
                    Added {admin.date}
                  </span>

                </div>

                <button
                  className="button danger small"
                  onClick={() =>
                    removeAdmin(admin)
                  }
                >
                  Remove
                </button>

              </div>
            ))}

          </div>

        </section>}

        {tab === "Integrations" && <section className="card settings-panel">

          <div className="card-header">
            <div>
              <h2>Connected services</h2>
              <p>Review configured integrations. Statuses shown are simulated, not live health checks.</p>
            </div>
          </div>

          <ServiceRow
            name="Job Collection"
            description="Sample connection status"
            status="OK"
          />

          <ServiceRow
            name="Payment Provider"
            description="Sample connection status"
            status="OK"
          />

          <ServiceRow
            name="AI Provider"
            description="Sample connection status"
            status="OK"
          />

          <ServiceRow
            name="Email Service"
            description="Configuration needs attention"
            status="Needs attention"
          />

        </section>}

        {tab === "Security" && <section className="card settings-panel">
          <div className="card-header"><div><h2>Security controls</h2><p>Policy indicators for this frontend prototype. These controls are currently display-only.</p></div></div>
          <div className="settings-rows">{[
            ["Session timeout", "30 minutes"],
            ["Two-factor authentication", "Enabled"],
            ["Password policy", "Strong"],
            ["Failed login limit", "5 attempts"],
          ].map(([name, value]) => <div className="settings-value-row" key={name}><span>{name}</span><strong>{value}</strong></div>)}</div>
        </section>}

        {tab === "Notifications" && <section className="card settings-panel">
          <div className="card-header"><div><h2>Notification preferences</h2><p>Choose the updates you want to receive. Preferences are saved in this browser.</p></div></div>
          <div className="settings-rows">{Object.entries(notifications).map(([name, enabled]) => <label className="notification-setting-row" key={name}><span><strong>{name}</strong><small>Receive an admin alert when this event needs attention.</small></span><input type="checkbox" checked={enabled} onChange={(event) => setNotifications((current) => ({ ...current, [name]: event.target.checked }))} /></label>)}</div>
        </section>}

        {tab === "System" && <section className="card settings-panel">
          <div className="card-header"><div><h2>System health</h2><p>Service indicators are illustrative prototype status, not live monitoring.</p></div></div>
          <div className="settings-rows">{[
            ["Frontend", "Operational"],
            ["API", "Operational"],
            ["Database", "Operational"],
            ["AI services", "Operational"],
            ["Job collector", "Degraded"],
          ].map(([name, value]) => <div className="settings-value-row" key={name}><span>{name}</span><StatusBadge>{value}</StatusBadge></div>)}</div>
        </section>}

      </div>
    </div>
  );
}

function ServiceRow({
  name,
  description,
  status,
}) {
  return (
    <div className="service-row">

      <div>
        <strong>{name}</strong>
        <span>{description}</span>
      </div>

      <StatusBadge>
        {status}
      </StatusBadge>

    </div>
  );
}

/* =========================================================
   SIDE PANEL
========================================================= */

function SidePanel({
  data,
  close,
  setModal,
  users,
  payments,
  sources,
  sourceRuns,
  retrySource,
  aiTasks,
  retryAiTask,
}) {
  const source = data.type === "source"
    ? sources.find((item) => item.name === data.source.name) || data.source
    : null;
  const aiTask = data.type === "ai-task"
    ? aiTasks.find((item) => item.id === data.task.id) || data.task
    : null;

  return (
    <div className="overlay">

      <aside className="side-panel" role="dialog" aria-modal="true" aria-labelledby="side-panel-title">

        <div className="side-panel-header">

          <div>
            <span className="eyebrow">
              {data.type === "user"
                ? "USER PROFILE"
                : data.type === "payment"
                  ? "PAYMENT DETAILS"
                  : data.type === "source"
                    ? "JOB SOURCE"
                    : data.type === "ai-task"
                      ? "AI PROCESSING TASK"
                    : "JOB LISTING"}
            </span>

            <h2 id="side-panel-title">
              {data.type === "user"
                ? data.user.name
                : data.type === "payment"
                  ? data.payment.id
                  : data.type === "source"
                    ? source.name
                      : data.type === "ai-task"
                        ? aiTask.id
                        : data.job.title}
            </h2>
          </div>

          <button
            className="close-button"
            aria-label="Close details"
            onClick={close}
          >
            ×
          </button>

        </div>

        {data.type === "user" && (
          <UserDetails
            user={data.user}
            lastPayment={data.lastPayment || payments.find((payment) => payment.id === data.user.lastPaymentId)}
            setModal={setModal}
          />
        )}

        {data.type === "payment" && (
          <PaymentDetails
            payment={data.payment}
            setModal={setModal}
          />
        )}

        {data.type === "job" && (
          <JobDetails job={data.job} />
        )}

        {data.type === "source" && (
          <SourceDetails
            source={source}
            runs={sourceRuns.filter((run) => run.source === source.name)}
            selectedRun={data.run}
            retrySource={retrySource}
          />
        )}

        {data.type === "ai-task" && (
          <AITaskDetails
            task={aiTask}
            users={users}
            retryAiTask={retryAiTask}
          />
        )}

      </aside>

    </div>
  );
}

function AITaskDetails({ task, users, retryAiTask }) {
  const user = users.find((item) => item.id === task.userId);
  return (
    <div className="side-content">
      <div className="source-detail-status">
        <StatusBadge>{task.status}</StatusBadge>
        <span>{task.type}</span>
      </div>
      <DetailSection title="Task">
        <Detail label="Task ID" value={task.id} />
        <Detail label="User" value={user?.email || "Unknown user"} />
        <Detail label="Created" value={task.createdAt} />
        <Detail label="Completed" value={task.completedAt || "Not completed"} />
        <Detail label="Duration" value={task.durationSeconds ? `${task.durationSeconds.toFixed(1)} seconds` : "Not available"} />
        <Detail label="Estimated cost" value={formatMoney(task.cost)} />
      </DetailSection>
      <DetailSection title="Input metadata">
        <pre className="metadata-preview">{JSON.stringify(task.input, null, 2)}</pre>
      </DetailSection>
      {task.error && (
        <DetailSection title="Failure details">
          <div className="source-error-detail">
            <strong><AlertCircle size={15} aria-hidden="true" /> Processing error</strong>
            <p>{task.error}</p>
          </div>
        </DetailSection>
      )}
      <DetailSection title="Result summary">
        <p className="source-run-detail-copy">{task.result || "No result has been recorded for this task yet."}</p>
      </DetailSection>
      {task.status === "Failed" && (
        <>
          <p className="source-simulation-note">
            Retry is simulated locally; no external AI provider is called.
          </p>
          <button className="button primary full-button" onClick={() => retryAiTask(task.id)}>
            <RefreshCw size={15} aria-hidden="true" />
            Simulate retry
          </button>
        </>
      )}
    </div>
  );
}

function JobDetails({ job }) {
  return (
    <div className="side-content">
      <div className="profile-summary">
        <div className="large-avatar">{job.company?.charAt(0) || "?"}</div>
        <div>
          <h3>{job.title || "Untitled listing"}</h3>
          <span>{job.company || "Company not provided"}</span>
          <div className="profile-badges">
            <StatusBadge>{job.visible ? "Visible" : "Hidden"}</StatusBadge>
          </div>
        </div>
      </div>
      <DetailSection title="Job listing">
        <Detail label="Company" value={job.company} />
        <Detail label="Location" value={job.location} />
        <Detail label="Source" value={job.source} />
        <Detail label="Posted" value={job.date} />
      </DetailSection>
      <p className="source-simulation-note">
        Job actions are available from the Jobs page.
      </p>
    </div>
  );
}

function SourceDetails({ source, runs, selectedRun, retrySource }) {
  const focusedRun = selectedRun || runs[0];

  return (
    <div className="side-content">
      <div className="source-detail-status">
        <StatusBadge>{source.status}</StatusBadge>
        <span>{source.lastRun}</span>
      </div>

      <DetailSection title="Latest source status">
        <Detail label="Jobs saved" value={source.saved} />
        <Detail label="Jobs in last 24h" value={source.jobs24} />
        <Detail label="Last duration" value={source.duration} />
        <Detail label="Current note" value={source.note} />
      </DetailSection>

      {focusedRun && (
        <DetailSection title={selectedRun ? "Selected run details" : "Latest run details"}>
          <Detail label="Started" value={focusedRun.when} />
          <Detail label="Result" value={focusedRun.status} />
          <Detail label="Duration" value={focusedRun.duration} />
          <Detail label="Jobs" value={focusedRun.jobs} />
          {focusedRun.error && (
            <div className="source-error-detail">
              <strong><AlertCircle size={15} aria-hidden="true" /> Error</strong>
              <p>{focusedRun.error}</p>
            </div>
          )}
          <p className="source-run-detail-copy">{focusedRun.details}</p>
        </DetailSection>
      )}

      <DetailSection title="Recent runs">
        {runs.length ? runs.slice(0, 6).map((run) => (
          <div className="source-detail-run" key={run.id}>
            <div>
              <strong>{run.status}</strong>
              <span>{run.when} · {run.duration}</span>
            </div>
            {run.error ? (
              <small className="source-error-text">{run.error}</small>
            ) : (
              <small>{run.jobs}</small>
            )}
          </div>
        )) : <p className="empty-state">No run history is available.</p>}
      </DetailSection>

      <p className="source-simulation-note">
        Retry is a local simulation only. It does not contact the source or change collected jobs.
      </p>

      <button
        className="button primary full-button"
        disabled={source.status === "Running"}
        onClick={() => retrySource(source.name)}
      >
        <RefreshCw size={15} aria-hidden="true" />
        {source.status === "Running" ? "Simulation running..." : "Simulate retry"}
      </button>
    </div>
  );
}

function UserDetails({
  user,
  lastPayment,
  setModal,
}) {
  const { score, health } = getUserHealth(user);
  const timeline = [
    ...((user.applications || []).slice(0, 3).map((item) => ({
      title: `Applied to ${item}`,
      date: user.lastActive || "Recent activity",
      icon: BriefcaseBusiness,
    }))),
    ...((user.resumes || []).slice(0, 2).map((resume) => ({
      title: "Resume analyzed",
      date: resume.uploaded || "Recent activity",
      icon: FileWarning,
    }))),
    ...(user.ai > 0 ? [{
      title: `Used AI features · ${user.ai} calls`,
      date: user.lastActive || "Last 30 days",
      icon: Sparkles,
    }] : []),
    { title: "Joined AIFAGen", date: user.joined, icon: UserPlus },
  ];

  return (
    <div className="side-content">

      <div className="profile-summary">

        <div className="large-avatar">
          {user.name.charAt(0)}
        </div>

        <div>
          <h3>{user.name}</h3>
          <span>{user.email}</span>

          <div className="profile-badges">
            <StatusBadge>
              {user.plan}
            </StatusBadge>

            <StatusBadge>
              {user.status}
            </StatusBadge>
          </div>
        </div>

      </div>

      <section className={`user-health-panel ${health.toLowerCase().replace(/\s+/g, "-")}`}>
        <div className="user-health-panel-heading">
          <div><span>User health</span><strong>{health}</strong></div>
          <strong>{score}<small>/100</small></strong>
        </div>
        <div className="user-health-meter"><span style={{ width: `${score}%` }} /></div>
        <div className="user-health-facts">
          <span><small>Last active</small><strong>{user.lastActive || `${user.joined} (signup fallback)`}</strong></span>
          <span><small>Applications</small><strong>{user.applications?.length || 0}</strong></span>
          <span><small>Saved jobs</small><strong>{user.savedJobs?.length || 0}</strong></span>
        </div>
      </section>

      <DetailSection title="Contact">

        <Detail
          label="Email"
          value={user.email}
        />

        <Detail
          label="Mobile"
          value={user.mobile}
        />

        <Detail
          label="Area"
          value={user.area}
        />

        <Detail
          label="Joined"
          value={user.joined}
        />

      </DetailSection>

      <DetailSection title="Profile">
        <Detail label="Headline" value={user.profile?.headline || "Not provided"} />
        <Detail label="Location" value={user.profile?.location || "Not provided"} />
        <Detail label="Job preferences" value={(user.preferences || []).join(", ") || "None saved"} />
      </DetailSection>

      <DetailSection title="Subscription & payments">
        <Detail label="Plan" value={user.plan} />
        <Detail label="Status" value={user.status} />
        <Detail label="Plan end date" value={user.planEnd || "Not scheduled"} />
        <Detail label="Last payment" value={lastPayment ? `${lastPayment.id} · ${formatMoney(lastPayment.amount)} · ${lastPayment.status}` : "No payment recorded"} />
      </DetailSection>

      <DetailSection title="Resumes">
        {(user.resumes || []).length ? user.resumes.map((resume) => (
          <div className="detail-row" key={resume.name}>
            <span>{resume.name}<br />Uploaded {resume.uploaded}</span>
            <strong>Score {resume.score}</strong>
          </div>
        )) : <p className="empty-state">No resumes uploaded.</p>}
      </DetailSection>

      <DetailSection title="Applications">
        {(user.applications || []).length
          ? <ul className="profile-item-list">{user.applications.map((item) => <li key={item}>{item}</li>)}</ul>
          : <p className="empty-state">No job applications.</p>}
      </DetailSection>

      <DetailSection title="Saved jobs">
        {(user.savedJobs || []).length
          ? <ul className="profile-item-list">{user.savedJobs.map((item) => <li key={item}>{item}</li>)}</ul>
          : <p className="empty-state">No saved jobs.</p>}
      </DetailSection>

      <DetailSection title="AI Usage">

        <div className="usage-highlight">
          <strong>{user.ai}</strong>
          <span>AI calls in last 30 days</span>
        </div>

      </DetailSection>

      <DetailSection title="Activity timeline · sample">
        {timeline.length ? (
          <div className="user-activity-timeline">
            {timeline.map((event, index) => {
              const EventIcon = event.icon;
              return (
                <div className="user-activity-event" key={`${event.title}-${index}`}>
                  <span className="user-activity-marker"><EventIcon size={13} aria-hidden="true" /></span>
                  <div><strong>{event.title}</strong><small>{event.date}</small></div>
                </div>
              );
            })}
          </div>
        ) : <p className="empty-state">No activity is recorded for this account.</p>}
      </DetailSection>

      <div className="side-actions">

        <button
          className="button secondary"
          onClick={() =>
            setModal({
              type: "edit-user",
              user,
            })
          }
        >
          Edit profile
        </button>

        <button
          className="button primary"
          onClick={() =>
            setModal({
              type: "change-plan",
              user,
            })
          }
        >
          Change plan
        </button>

      </div>

    </div>
  );
}

function PaymentDetails({
  payment,
  setModal,
}) {
  return (
    <div className="side-content">

      <div className="invoice-header">

        <div className="invoice-icon">
          ₹
        </div>

        <div>
          <h3>{payment.id}</h3>
          <span>{payment.date}</span>
        </div>

      </div>

      <DetailSection title="Payment">

        <Detail
          label="User"
          value={payment.user}
        />

        <Detail
          label="Amount"
          value={formatMoney(payment.amount)}
        />

        <Detail
          label="Method"
          value={payment.method}
        />

        <Detail
          label="Status"
          value={payment.status}
        />

      </DetailSection>

      <DetailSection title="Transaction Details">

        <div className="payment-message">

          {payment.refundedAmount > 0 && (
            <Detail label="Refunded" value={formatMoney(payment.refundedAmount)} />
          )}

          {(payment.status === "Paid" || payment.status === "Partially refunded") && (
            <>
              <strong><CheckCircle2 size={16} aria-hidden="true" /> Payment successful</strong>
              <p>
                The payment was successfully processed
                and the user's plan was updated.
              </p>
            </>
          )}

          {payment.status === "Failed" && (
            <>
              <strong><AlertCircle size={16} aria-hidden="true" /> Payment failed</strong>
              <p>
                The payment provider rejected the
                transaction. The user should retry.
              </p>
            </>
          )}

          {payment.status === "Refunded" && (
            <>
              <strong><RotateCcw size={16} aria-hidden="true" /> Payment refunded</strong>
              <p>
                This transaction has already been
                refunded.
              </p>
            </>
          )}

        </div>

      </DetailSection>

      {payment.status === "Paid" && (
        <button
          className="button danger full-button"
          onClick={() =>
            setModal({
              type: "refund",
              payment,
            })
          }
        >
          Refund payment
        </button>
      )}

    </div>
  );
}

function DetailSection({
  title,
  children,
}) {
  return (
    <section className="detail-section">

      <h4>{title}</h4>

      {children}

    </section>
  );
}

function Detail({
  label,
  value,
}) {
  return (
    <div className="detail-row">

      <span>{label}</span>

      <strong>{value}</strong>

    </div>
  );
}

/* =========================================================
   MODAL
========================================================= */

function Modal({ type, close, onAddUser, onUpdateUser, onChangePlan, onRefund, notify }) {
  const [plan, setPlan] = useState(type?.user?.plan || PLAN_OPTIONS[1]);
  const [status, setStatus] = useState(type?.user?.status || USER_STATUS_OPTIONS[0]);
  const [bulkStatus, setBulkStatus] = useState("Inactive");
  const [form, setForm] = useState(() => ({
    name: type?.user?.name || "",
    email: type?.user?.email || "",
    mobile: type?.user?.mobile || "",
    area: type?.user?.area || AREA_OPTIONS[0],
    headline: type?.user?.profile?.headline || "",
    location: type?.user?.profile?.location || "",
    title: type?.job?.title || "",
    department: type?.job?.department || "",
    jobLocation: type?.job?.location || "",
    type: type?.job?.type || "Full-time",
    skills: type?.job?.skills || "",
    description: type?.job?.description || "",
    applyLink: type?.job?.applyLink || "",
    reason: "",
    amount: type?.payment
      ? (type.payment.amount - (type.payment.refundedAmount || 0)).toFixed(2)
      : "",
  }));
  const [error, setError] = useState("");
  const [refundReviewed, setRefundReviewed] = useState(false);

  function setField(field, value) {
    setForm((current) => ({ ...current, [field]: value }));
    setError("");
  }

  function runAction(action) {
    try {
      action();
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Unable to save these changes.");
    }
  }

  if (type?.type === "compare-jobs") {
    return (
      <ModalShell title="Compare possible duplicates" close={close}>
        <div className="duplicate-compare-grid">
          {type.jobs.map((job, index) => (
            <section className="duplicate-compare-card" key={job.id}>
              <span className="eyebrow">LISTING {index + 1}</span>
              <h3>{job.title}</h3>
              <DetailSection title="Listing details">
                <Detail label="Company" value={job.company} />
                <Detail label="Location" value={job.location} />
                <Detail label="Source" value={job.source} />
                <Detail label="Posted" value={job.date} />
                <Detail label="Apply URL" value={job.applyUrl || "Not provided"} />
                <Detail label="Visibility" value={job.visible ? "Visible" : "Hidden"} />
              </DetailSection>
            </section>
          ))}
        </div>
        <div className="modal-actions">
          <button className="button secondary" onClick={close}>Close comparison</button>
        </div>
      </ModalShell>
    );
  }

  if (type?.type === "confirm-action") {
    return (
      <ModalShell title={type.title} close={close}>
        <div className="modal-form">
          <p className="modal-description">{type.message}</p>
          {type.requiresReason && (
            <label>
              {type.reasonLabel || "Reason"} *
              <textarea
                rows="3"
                value={form.reason}
                onChange={(event) => setField("reason", event.target.value)}
              />
            </label>
          )}
          {error && <p className="form-error" role="alert">{error}</p>}
          <div className="modal-actions">
            <button className="button secondary" onClick={close}>Cancel</button>
            <button
              className={`button ${type.danger ? "danger" : "primary"}`}
              onClick={() => runAction(() => {
                if (type.requiresReason && !form.reason.trim()) {
                  throw new Error("A reason is required to continue.");
                }
                type.onConfirm(form.reason);
                if (type.successMessage) notify(type.successMessage);
                close();
              })}
            >
              {type.confirmLabel || "Confirm"}
            </button>
          </div>
        </div>
      </ModalShell>
    );
  }

  if (type?.type === "bulk-user-status") {
    return (
      <ModalShell title={`Update ${type.users.length} user status${type.users.length === 1 ? "" : "es"}`} close={close}>
        <div className="modal-form">
          <p className="modal-description">
            This confirmed action will update the selected users and create an audit entry for each changed account.
          </p>
          <div className="bulk-user-preview">
            {type.users.slice(0, 5).map((user) => (
              <span key={user.id}>{user.name}</span>
            ))}
            {type.users.length > 5 && <span>+{type.users.length - 5} more</span>}
          </div>
          <label>New account status
            <select value={bulkStatus} onChange={(event) => setBulkStatus(event.target.value)}>
              {USER_STATUS_OPTIONS.map((option) => <option key={option}>{option}</option>)}
            </select>
          </label>
          <label>Reason for change *
            <textarea
              rows="3"
              value={form.reason}
              onChange={(event) => setField("reason", event.target.value)}
            />
          </label>
          {error && <p className="form-error" role="alert">{error}</p>}
          <div className="modal-actions">
            <button className="button secondary" onClick={close}>Cancel</button>
            <button
              className="button primary"
              onClick={() => runAction(() => {
                if (!form.reason.trim()) throw new Error("A reason for the bulk change is required.");
                type.onConfirm(bulkStatus, form.reason);
                close();
              })}
            >
              Confirm status update
            </button>
          </div>
        </div>
      </ModalShell>
    );
  }

  if (type === "add-user") {
    return (
      <ModalShell title="Add User" close={close}>
        <div className="modal-form">
          <label>Full name<input value={form.name} onChange={(event) => setField("name", event.target.value)} /></label>
          <label>Email<input type="email" value={form.email} onChange={(event) => setField("email", event.target.value)} /></label>
          <label>Mobile<input value={form.mobile} onChange={(event) => setField("mobile", event.target.value)} /></label>
          <label>Area of interest
            <select value={form.area} onChange={(event) => setField("area", event.target.value)}>
              {AREA_OPTIONS.map((area) => <option key={area}>{area}</option>)}
            </select>
          </label>
          <label>Reason for adding *<textarea rows="2" value={form.reason} onChange={(event) => setField("reason", event.target.value)} /></label>
          {error && <p className="form-error" role="alert">{error}</p>}
          <div className="modal-actions">
            <button className="button secondary" onClick={close}>Cancel</button>
            <button className="button primary" onClick={() => runAction(() => {
              if (!form.reason.trim()) throw new Error("A reason is required.");
              onAddUser(form);
              close();
            })}>Add User</button>
          </div>
        </div>
      </ModalShell>
    );
  }

  if (type?.type === "edit-user") {
    const { user } = type;
    return (
      <ModalShell title={`Edit ${user.name}`} close={close}>
        <div className="modal-form">
          <label>Name *<input value={form.name} onChange={(event) => setField("name", event.target.value)} /></label>
          <label>Email *<input type="email" value={form.email} onChange={(event) => setField("email", event.target.value)} /></label>
          <label>Mobile *<input value={form.mobile} onChange={(event) => setField("mobile", event.target.value)} /></label>
          <label>Area of interest
            <select value={form.area} onChange={(event) => setField("area", event.target.value)}>
              {AREA_OPTIONS.map((area) => <option key={area}>{area}</option>)}
            </select>
          </label>
          <label>Profile headline<input value={form.headline} onChange={(event) => setField("headline", event.target.value)} /></label>
          <label>Location<input value={form.location} onChange={(event) => setField("location", event.target.value)} /></label>
          <label>Reason for change *<textarea rows="2" value={form.reason} onChange={(event) => setField("reason", event.target.value)} /></label>
          {error && <p className="form-error" role="alert">{error}</p>}
          <div className="modal-actions">
            <button className="button secondary" onClick={close}>Cancel</button>
            <button className="button primary" onClick={() => runAction(() => {
              if (!form.name.trim() || !form.email.trim() || !form.mobile.trim()) {
                throw new Error("Name, email, and mobile are required.");
              }
              onUpdateUser(user.id, {
                name: form.name.trim(),
                email: form.email.trim(),
                mobile: form.mobile.trim(),
                area: form.area,
                profile: { ...user.profile, headline: form.headline.trim(), location: form.location.trim() },
              }, form.reason);
              close();
            })}>Save changes</button>
          </div>
        </div>
      </ModalShell>
    );
  }

  if (type?.type === "change-plan") {
    return (
      <ModalShell title="Change plan" close={close}>
        <div className="modal-form">
          <p className="modal-description">Change the plan for <strong>{type.user.name}</strong>.</p>
          <label>Plan
            <select value={plan} onChange={(event) => setPlan(event.target.value)}>
              {PLAN_OPTIONS.map((option) => <option key={option}>{option}</option>)}
            </select>
          </label>
          <label>Account status
            <select value={status} onChange={(event) => setStatus(event.target.value)}>
              {USER_STATUS_OPTIONS.map((option) => <option key={option}>{option}</option>)}
            </select>
          </label>
          <label>Reason *<textarea rows="3" value={form.reason} onChange={(event) => setField("reason", event.target.value)} /></label>
          {error && <p className="form-error" role="alert">{error}</p>}
          <div className="modal-actions">
            <button className="button secondary" onClick={close}>Cancel</button>
            <button className="button primary" onClick={() => runAction(() => {
              onChangePlan(type.user.id, plan, status, form.reason);
              close();
            })}>Save plan</button>
          </div>
        </div>
      </ModalShell>
    );
  }

  if (type?.type === "refund") {
    const payment = type.payment;
    const remaining = payment.amount - (payment.refundedAmount || 0);
    return (
      <ModalShell title={refundReviewed ? "Confirm refund" : "Refund payment"} close={close}>
        <div className="modal-form">
          <p className="modal-description">
            {refundReviewed ? "Please confirm this refund:" : <>Refund payment <strong>{payment.id}</strong>. Remaining refundable amount: <strong>{formatMoney(remaining)}</strong>.</>}
          </p>
          {!refundReviewed ? (
            <>
              <label>Refund amount
                <input type="number" min="0.01" max={remaining} step="0.01" value={form.amount}
                  onChange={(event) => setField("amount", event.target.value)} />
              </label>
              <label>Refund reason *<textarea rows="3" value={form.reason} onChange={(event) => setField("reason", event.target.value)} /></label>
            </>
          ) : (
            <div className="refund-confirmation">
              <p><strong>{formatMoney(Number(form.amount))}</strong> to {payment.user}</p>
              <p>Reason: {form.reason}</p>
            </div>
          )}
          {error && <p className="form-error" role="alert">{error}</p>}
          <div className="modal-actions">
            <button className="button secondary" onClick={() => refundReviewed ? setRefundReviewed(false) : close()}>
              {refundReviewed ? "Back" : "Cancel"}
            </button>
            {!refundReviewed ? (
              <button className="button danger" onClick={() => {
                const amount = Number(form.amount);
                if (!form.reason.trim()) return setError("A refund reason is required.");
                if (!Number.isFinite(amount) || amount <= 0 || amount > remaining || Math.round(amount * 100) !== amount * 100) {
                  return setError(`Enter a valid amount up to ${formatMoney(remaining)} with no more than two decimal places.`);
                }
                setError("");
                setRefundReviewed(true);
              }}>Review refund</button>
            ) : (
              <button className="button danger" onClick={() => runAction(() => {
                onRefund(payment.id, Number(form.amount), form.reason);
                close();
              })}>Confirm refund</button>
            )}
          </div>
        </div>
      </ModalShell>
    );
  }

  if (type?.type === "reminder") {
    const isRenewalReminder = type.reminderType === "renewal";
    return (
      <ModalShell title={isRenewalReminder ? "Send renewal reminder" : "Send payment follow-up"} close={close}>
        <div className="modal-form">
          <p className="modal-description">Prepare a {isRenewalReminder ? "renewal reminder" : "follow-up"} for <strong>{type.user}</strong>.</p>
          <label>Message<textarea rows="5" defaultValue={isRenewalReminder
            ? "Your AIFAGen subscription is coming up for renewal. Review your plan and payment details to continue enjoying your benefits."
            : "We noticed your recent payment did not go through. Please update your payment method or retry your subscription."} /></label>
          <div className="modal-actions">
            <button className="button secondary" onClick={close}>Cancel</button>
            <button className="button primary" onClick={() => { notify(`${isRenewalReminder ? "Renewal reminder" : "Follow-up"} prepared for ${type.user}.`, "info"); close(); }}>Prepare {isRenewalReminder ? "reminder" : "follow-up"}</button>
          </div>
        </div>
      </ModalShell>
    );
  }

  if (type?.type === "edit-job") {
    return (
      <ModalShell title={`Edit ${type.job.title}`} close={close}>
        <div className="modal-form">
          <label>Job title *<input value={form.title} onChange={(event) => setField("title", event.target.value)} /></label>
          <label>Department<input value={form.department} onChange={(event) => setField("department", event.target.value)} /></label>
          <label>Location<input value={form.jobLocation} onChange={(event) => setField("jobLocation", event.target.value)} /></label>
          <label>Employment type
            <select value={form.type} onChange={(event) => setField("type", event.target.value)}>
              {["Full-time", "Part-time", "Internship", "Contract"].map((value) => <option key={value}>{value}</option>)}
            </select>
          </label>
          <label>Skills<input value={form.skills} onChange={(event) => setField("skills", event.target.value)} /></label>
          <label>Apply link<input value={form.applyLink} onChange={(event) => setField("applyLink", event.target.value)} placeholder="https://... or mailto:..." /></label>
          <label>Description<textarea rows="4" value={form.description} onChange={(event) => setField("description", event.target.value)} /></label>
          <label>Reason for change *<textarea rows="2" value={form.reason} onChange={(event) => setField("reason", event.target.value)} /></label>
          {error && <p className="form-error" role="alert">{error}</p>}
          <div className="modal-actions">
            <button className="button secondary" onClick={close}>Cancel</button>
            <button className="button primary" onClick={() => runAction(() => {
              if (!form.title.trim()) throw new Error("A job title is required.");
              if (!isSafeApplyLink(form.applyLink)) throw new Error("Apply links must use https:// or mailto:.");
              if (!form.reason.trim()) throw new Error("A reason for the change is required.");
              type.onSave({
                title: form.title.trim(), department: form.department.trim(),
                location: form.jobLocation.trim(), type: form.type, skills: form.skills.trim(),
                applyLink: form.applyLink.trim(), description: form.description.trim(),
              }, form.reason);
              close();
            })}>Save changes</button>
          </div>
        </div>
      </ModalShell>
    );
  }

  return null;
}

function ModalShell({
  title,
  close,
  children,
}) {
  return (
    <div className="modal-overlay">

      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">

        <div className="modal-header">

          <h2 id="modal-title">{title}</h2>

          <button
            className="close-button"
            onClick={close}
          >
            ×
          </button>

        </div>

        {children}

      </div>

    </div>
  );
}

function buildCopilotContext({ page, users, payments, jobs, internalJobs, sources, sourceRuns, aiTasks, auditLogs }) {
  const countBy = (records, getKey) => records.reduce((counts, record) => {
    const key = getKey(record) || "Unknown";
    counts[key] = (counts[key] || 0) + 1;
    return counts;
  }, {});
  const moneyByStatus = payments.reduce((totals, payment) => {
    const status = payment.status || "Unknown";
    totals[status] = (totals[status] || 0) + Number(payment.amount || 0);
    return totals;
  }, {});

  return {
    page,
    dataNote: "These are local prototype records and illustrative estimates, not live production totals.",
    users: {
      total: users.length,
      byStatus: countBy(users, (user) => user.status),
      byPlan: countBy(users, (user) => user.plan),
      aiCallsTotal: users.reduce((sum, user) => sum + (Number(user.ai) || 0), 0),
      includedAccounts: Math.min(users.length, 100),
      anonymizedAccounts: users.slice(0, 100).map((user, index) => ({
        account: `Account ${index + 1}`,
        plan: user.plan,
        status: user.status,
        aiCalls: Number(user.ai) || 0,
        inactiveDays: daysSinceLastActive(user),
      })),
    },
    payments: {
      total: payments.length,
      byStatus: countBy(payments, (payment) => payment.status),
      grossAmountByStatus: moneyByStatus,
      totalRefunded: payments.reduce((sum, payment) => sum + Number(payment.refundedAmount || (payment.status === "Refunded" ? payment.amount : 0)), 0),
    },
    jobs: {
      total: jobs.length,
      visible: jobs.filter((job) => job.visible).length,
      hidden: jobs.filter((job) => !job.visible).length,
      bySource: countBy(jobs, (job) => job.source),
      includedListings: Math.min(jobs.length, 100),
      listings: jobs.slice(0, 100).map((job) => ({
        title: job.title,
        company: job.company,
        source: job.source,
        status: job.status,
        visible: Boolean(job.visible),
      })),
    },
    internalJobs: {
      total: internalJobs.length,
      byStatus: countBy(internalJobs, (job) => job.status || (job.visible ? "Published" : "Hidden")),
    },
    jobSources: {
      total: sources.length,
      byStatus: countBy(sources, (source) => source.status),
      recentRunsByStatus: countBy(sourceRuns.slice(0, 100), (run) => run.status),
    },
    aiTasks: {
      total: aiTasks.length,
      byStatus: countBy(aiTasks, (task) => task.status),
      byType: countBy(aiTasks, (task) => task.type),
      estimatedCost: aiTasks.reduce((sum, task) => sum + (Number(task.cost) || 0), 0),
    },
    aiUsageEstimates: {
      calls: 48420,
      estimatedCost: 18420,
      successRatePercent: 98.7,
      averageLatencySeconds: 2.4,
      providers: [
        { name: "OpenAI", calls: 27100, estimatedCost: 9200, successRatePercent: 99.1, averageLatencySeconds: 1.8 },
        { name: "Gemini", calls: 14000, estimatedCost: 5400, successRatePercent: 98.4, averageLatencySeconds: 2.1 },
        { name: "HuggingFace", calls: 7300, estimatedCost: 3800, successRatePercent: 97.9, averageLatencySeconds: 3.4 },
      ],
      features: featureAdoption.map(({ feature, users: featureUsers, costPerUse, monthlyChange }) => ({
        feature,
        users: featureUsers,
        estimatedCost: featureUsers * costPerUse,
        estimatedCostPerUse: costPerUse,
        monthlyChangePercent: monthlyChange,
      })),
    },
    recentAdminActivity: auditLogs.slice(0, 12).map((entry) => ({
      when: entry.when,
      action: entry.action,
    })),
  };
}

function AdminCopilot({
  open,
  setOpen,
  page,
  users,
  payments,
  jobs,
  setJobs,
  sources,
  sourceRuns,
  aiTasks,
  internalJobs,
  auditLogs,
  setPage,
  setModal,
  setSidePanel,
  notify,
  recordAudit,
}) {
  const [messages, setMessages] = useState([]);
  const [draft, setDraft] = useState("");
  const [typing, setTyping] = useState(false);
  const [apiStatus, setApiStatus] = useState("checking");

  useEffect(() => {
    if (!open) return undefined;
    let active = true;
    const checkApi = () => fetch("/api/health")
      .then((response) => response.ok ? response.json() : Promise.reject(new Error("API unavailable")))
      .then((result) => {
        if (active) setApiStatus(result.ready ? "ready" : "setup");
      })
      .catch(() => {
        if (active) setApiStatus("offline");
      });
    checkApi();
    const healthInterval = window.setInterval(checkApi, 10000);
    return () => {
      active = false;
      window.clearInterval(healthInterval);
    };
  }, [open]);
  const suggestions = [
    { icon: BarChart3, text: "Give me today's platform summary" },
    { icon: IndianRupee, text: "Why did revenue change this month?" },
    { icon: Users, text: "Find inactive Premium users" },
    { icon: AlertCircle, text: "What needs my attention?" },
  ];

  const currentPagePrompts = {
    Payments: ["Show failed payments", "Why did revenue drop this week?", "Which payments need follow-up?"],
    Users: ["Find inactive Premium users", "Who are my most active users?", "Show users at risk"],
    "Job Sources": ["Which job sources are having problems?", "Show recent failed runs", "Hide jobs from failed sources"],
    "AI Usage": ["Which AI feature costs the most?", "Summarize AI usage", "Show AI processing failures"],
    "Revenue Overview": ["Summarize this month's revenue", "Show subscription health", "Why did revenue change this month?"],
  };
  const promptList = currentPagePrompts[page] || suggestions.map((item) => item.text);
  const sourceProblems = sources.filter((source) => ["Failed", "Blocked", "Stalled", "No jobs"].includes(source.status));
  const failedPayments = payments.filter((payment) => payment.status === "Failed");
  const atRiskPremiumUsers = users.filter((user) =>
    user.plan === "Premium" && daysSinceLastActive(user) >= 14
  );
  const paidRevenue = payments.filter((payment) => payment.status === "Paid")
    .reduce((sum, payment) => sum + payment.amount, 0);
  const totalAiCalls = users.reduce((sum, user) => sum + (Number(user.ai) || 0), 0);
  const topAiFeature = [...featureAdoption]
    .map((item) => ({ ...item, estimatedCost: item.users * item.costPerUse }))
    .sort((first, second) => second.estimatedCost - first.estimatedCost)[0];
  const failedSourceJobs = jobs.filter((job) =>
    job.visible && sourceProblems.some((source) =>
      ["Failed", "Blocked", "Stalled"].includes(source.status) &&
      source.name.toLowerCase() === String(job.source).toLowerCase()
    )
  );

  function makeResponse(question) {
    const query = question.toLowerCase();
    if (/hide|remove|unpublish/.test(query) && /job/.test(query) && /source|failed|problem/.test(query)) {
      if (!failedSourceJobs.length) {
        return { text: `I couldn't find visible jobs attached to a failed source in the current sample. **${sourceProblems.length} sources** have a status that needs attention.`, actions: [{ label: "View Job Sources", kind: "sources" }] };
      }
      return {
        text: `I found **${failedSourceJobs.length} visible job${failedSourceJobs.length === 1 ? "" : "s"}** from sources needing attention. Review the affected listings before hiding them; hiding removes them from user job matching.`,
        reviewJobs: failedSourceJobs,
      };
    }

    if (/inactive|haven't been active|not active|at risk/.test(query) && /premium/.test(query)) {
      const value = atRiskPremiumUsers.length * 999;
      return {
        text: `I found **${atRiskPremiumUsers.length} Premium user${atRiskPremiumUsers.length === 1 ? "" : "s"}** who have not been active for 14+ days in the current sample.\n\nEstimated subscription value at ₹999 each: **${formatMoney(value)}**.\n\nThese counts reflect the local sample, not live account totals.`,
        actions: atRiskPremiumUsers.length
          ? [{ label: "Inspect a matching user", kind: "inactive-premium" }]
          : [{ label: "Open Users", kind: "users" }],
      };
    }

    if (/which.*(source|job source)|source.*(problem|fail|attention|worst)|job sources.*(problem|attention)/.test(query)) {
      const sourceList = sourceProblems.length
        ? sourceProblems.map((source) => `• **${source.name}** — ${source.status}${source.note ? ` (${source.note})` : ""}`).join("\n")
        : "All listed sources are currently marked working.";
      const failedSource = sourceProblems.find((source) => source.status === "Failed");
      const recentRuns = failedSource
        ? sourceRuns.filter((run) => run.source === failedSource.name).slice(0, 5)
        : [];
      const consecutiveFailures = recentRuns.length
        ? recentRuns.slice(0, recentRuns.findIndex((run) => run.status !== "Failed") < 0
          ? recentRuns.length
          : recentRuns.findIndex((run) => run.status !== "Failed"))
          .filter((run) => run.status === "Failed").length
        : 0;
      return {
        text: `**${sourceProblems.length} source${sourceProblems.length === 1 ? "" : "s"} need attention** in the current sample:\n\n${sourceList}${failedSource && consecutiveFailures ? `\n\n${failedSource.name} has **${consecutiveFailures} consecutive failed run${consecutiveFailures === 1 ? "" : "s"}** in the available run history.` : ""}`,
        actions: [{ label: "View Job Sources", kind: "sources" }],
      };
    }

    if (/ai feature|ai.*cost|cost.*ai|most.*expensive/.test(query)) {
      const share = featureAdoption.reduce((sum, item) => sum + item.users * item.costPerUse, 0);
      const featureShare = share ? Math.round((topAiFeature.estimatedCost / share) * 100) : 0;
      return {
        text: `**${topAiFeature.feature}** has the highest estimated AI feature cost in the current sample.\n\nEstimated calls: **${topAiFeature.users.toLocaleString()}**\n\nEstimated cost: **${formatMoney(topAiFeature.estimatedCost)}**\n\nEstimated cost per call: **${formatMoney(topAiFeature.costPerUse)}**\n\nShare of listed feature estimates: **${featureShare}%**. These are planning estimates, not provider invoices.`,
        actions: [{ label: "Open AI Usage", kind: "ai-usage" }],
      };
    }

    if (/failed payment|payment.*fail/.test(query)) {
      const totalAtRisk = failedPayments.reduce((sum, payment) => sum + payment.amount, 0);
      return {
        text: failedPayments.length
          ? `There ${failedPayments.length === 1 ? "is" : "are"} **${failedPayments.length} failed payment${failedPayments.length === 1 ? "" : "s"}** in the current sample, totaling **${formatMoney(totalAtRisk)}**. These records are sample payment activity, not necessarily from today.`
          : "There are no failed payments in the current sample.",
        actions: [
          { label: "View Payments", kind: "payments" },
          ...(failedPayments.length ? [{ label: "Prepare reminders", kind: "payment-reminders" }] : []),
        ],
      };
    }

    if (/revenue|mrr|subscription income/.test(query)) {
      const refunds = payments.reduce(
        (sum, payment) => sum + (payment.refundedAmount || (payment.status === "Refunded" ? payment.amount : 0)),
        0
      );
      const activePremium = users.filter((user) => user.plan === "Premium" && user.status === "Active").length;
      return {
        text: `From the current sample records, **${formatMoney(paidRevenue)}** in payments are marked paid and **${formatMoney(refunds)}** has been refunded. There are **${activePremium} active Premium accounts** in the user sample.\n\nThe portal does not contain historical revenue snapshots, so it cannot reliably calculate a real week-over-week or month-over-month change. Overview KPIs are illustrative.`,
        actions: [{ label: "Open Revenue Overview", kind: "revenue" }, { label: "View Payments", kind: "payments" }],
      };
    }

    if (/summary|happening|attention|today|platform health/.test(query)) {
      return {
        text: `Here's a summary from the available local sample:\n\n🟢 **${users.length.toLocaleString()} users**\n\n💰 **${formatMoney(paidRevenue)}** in successful payments\n\n🤖 **${totalAiCalls.toLocaleString()} AI calls** recorded across sample users\n\n⚠️ **${sourceProblems.length} job sources** need attention\n\n🔴 **${failedPayments.length} failed payments** (${formatMoney(failedPayments.reduce((sum, payment) => sum + payment.amount, 0))})\n\nThese are sample totals, not live "today" metrics.`,
        actions: [{ label: "Open Dashboard", kind: "dashboard" }],
      };
    }

    if (/most active|active users/.test(query)) {
      const active = [...users].sort((first, second) => (Number(second.ai) || 0) - (Number(first.ai) || 0)).slice(0, 3);
      return {
        text: `The most AI-active users in the local sample are:\n\n${active.map((user, index) => `${index + 1}. **${user.name}** — ${user.ai} AI calls`).join("\n")}\n\nAI calls are used as a simple activity proxy here.`,
        actions: active.length ? [{ label: `View ${active[0].name}`, kind: "view-user", user: active[0] }] : [],
      };
    }

    if (/ai|processing/.test(query) && /fail|error|problem/.test(query)) {
      const failedTasks = aiTasks.filter((task) => task.status === "Failed");
      return {
        text: failedTasks.length
          ? `There are **${failedTasks.length} failed AI task${failedTasks.length === 1 ? "" : "s"}** in the sample:\n\n${failedTasks.slice(0, 4).map((task) => `• **${task.type}** — ${task.error || task.id}`).join("\n")}`
          : "No failed AI processing tasks are recorded in the current sample.",
        actions: [{ label: "Open AI Processing", kind: "ai-processing" }],
      };
    }

    const contextualHint = {
      Dashboard: "Try asking for today's platform summary or what needs attention.",
      Users: "Try asking for inactive Premium users or your most active users.",
      Payments: "Try asking to show failed payments or summarize revenue.",
      "Revenue Overview": "Try asking about revenue, subscriptions, or failed payments.",
      Subscriptions: "Try asking for inactive Premium users or a revenue summary.",
      "Job Sources": "Try asking which sources need attention or to review jobs from a failed source.",
      "AI Usage": "Try asking which AI feature costs the most or about processing failures.",
    }[page] || "Try asking for a platform summary, failed payments, or job-source issues.";
    return { text: `I can help analyze the portal's sample data, but I couldn't match that question yet.\n\n${contextualHint}` };
  }

  function submitQuestion(question = draft) {
    const text = question.trim();
    if (!text || typing) return;
    const messageIndex = messages.length;
    const userMessage = { id: `${messageIndex}-user`, role: "user", text };
    const nextMessages = [...messages, userMessage];
    setMessages(nextMessages);
    setDraft("");
    setTyping(true);

    const normalizedText = text.toLowerCase();
    const asksToHideJobs = /hide|remove|unpublish/.test(normalizedText) &&
      /job/.test(normalizedText) && /source|failed|problem/.test(normalizedText);
    if (asksToHideJobs) {
      window.setTimeout(() => {
        setMessages((current) => [...current, {
          id: `${messageIndex + 1}-assistant`,
          role: "assistant",
          ...makeResponse(text),
        }]);
        setTyping(false);
      }, 280);
      return;
    }

    fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        page,
        messages: nextMessages.slice(-12).map(({ role, text: content }) => ({ role, content })),
        context: buildCopilotContext({ users, payments, jobs, internalJobs, sources, sourceRuns, aiTasks, auditLogs }),
      }),
    })
      .then(async (response) => {
        const result = await response.json().catch(() => ({}));
        if (!response.ok) throw new Error(result.error || "The assistant is unavailable right now.");
        return result;
      })
      .then((result) => {
        setApiStatus("ready");
        setMessages((current) => [...current, {
          id: `${messageIndex + 1}-assistant`,
          role: "assistant",
          text: result.reply || "I couldn't form a response. Try asking in another way.",
        }]);
      })
      .catch((error) => {
        const detail = error instanceof TypeError
          ? "Copilot API is offline. Stop any old dev server, then restart with npm run dev from the frontend folder."
          : error.message || "I couldn't connect to the assistant. Check the local API server and try again.";
        setMessages((current) => [...current, {
          id: `${messageIndex + 1}-assistant-error`,
          role: "assistant",
          text: detail,
        }]);
        setApiStatus(error.message?.includes("GROQ_API_KEY") ? "setup" : "offline");
      })
      .finally(() => setTyping(false));
  }

  function executeAction(action) {
    if (action.kind === "review-jobs") {
      setModal({
        type: "confirm-action",
        title: `Hide ${action.jobs.length} reviewed job${action.jobs.length === 1 ? "" : "s"}?`,
        message: "These listings will be hidden from users and excluded from job matching. They can be shown again from the Jobs page.",
        confirmLabel: "Hide selected jobs",
        danger: true,
        requiresReason: true,
        reasonLabel: "Reason for hiding jobs",
        successMessage: `${action.jobs.length} job${action.jobs.length === 1 ? "" : "s"} hidden.`,
        onConfirm: (reason) => {
          if (!reason.trim()) throw new Error("A reason is required to hide jobs.");
          const jobIds = new Set(action.jobs.map((job) => job.id));
          setJobs((current) => current.map((job) => jobIds.has(job.id) ? { ...job, visible: false } : job));
          action.jobs.forEach((job) => recordAudit("Hid job from Copilot review", job.title, { visible: true }, { visible: false }, reason.trim()));
          notify(`${action.jobs.length} reviewed job${action.jobs.length === 1 ? "" : "s"} hidden.`);
        },
      });
      return;
    }
    if (action.kind === "payments" || action.kind === "payment-reminders") {
      setPage("Payments");
      if (action.kind === "payment-reminders") {
        setModal({ type: "reminder", user: `${failedPayments.length} failed payment customer${failedPayments.length === 1 ? "" : "s"}` });
      } else if (failedPayments[0]) {
        setSidePanel({ type: "payment", payment: failedPayments[0] });
      }
      setOpen(false);
      return;
    }
    if (action.kind === "sources") {
      setPage("Job Sources");
      const source = sourceProblems[0];
      if (source) setSidePanel({ type: "source", source });
      setOpen(false);
      return;
    }
    if (action.kind === "inactive-premium") {
      setPage("Users");
      if (atRiskPremiumUsers[0]) setSidePanel({
        type: "user",
        user: atRiskPremiumUsers[0],
        lastPayment: payments.find((payment) => payment.id === atRiskPremiumUsers[0].lastPaymentId),
      });
      setOpen(false);
      return;
    }
    if (action.kind === "view-user") {
      setPage("Users");
      setSidePanel({ type: "user", user: action.user, lastPayment: payments.find((payment) => payment.id === action.user.lastPaymentId) });
      setOpen(false);
      return;
    }
    const pages = {
      users: "Users",
      "ai-usage": "AI Usage",
      "ai-processing": "AI Processing",
      revenue: "Revenue Overview",
      dashboard: "Dashboard",
    };
    if (pages[action.kind]) {
      setPage(pages[action.kind]);
      setOpen(false);
    }
  }

  function renderMessageText(text) {
    return text.split(/(\*\*[^*]+\*\*)/g).map((part, index) =>
      part.startsWith("**") && part.endsWith("**")
        ? <strong key={index}>{part.slice(2, -2)}</strong>
        : <span key={index}>{part}</span>
    );
  }

  return (
    <div className="admin-copilot-root">
      {open && (
        <section className="copilot-panel" role="dialog" aria-modal="false" aria-labelledby="copilot-title">
          <header className="copilot-header">
            <div className="copilot-brand-icon"><Sparkles size={19} aria-hidden="true" /></div>
            <div className="copilot-heading">
              <strong id="copilot-title">AIFAGen Copilot</strong>
              <span><i className={apiStatus === "ready" ? "connected" : apiStatus === "offline" ? "offline" : ""} />{apiStatus === "ready" ? "Groq assistant · workspace context" : apiStatus === "checking" ? "Connecting to assistant…" : apiStatus === "setup" ? "Set GROQ_API_KEY in .env.local" : "API offline · restart npm run dev"}</span>
            </div>
            <button type="button" className="copilot-close" aria-label="Close AIFAGen Copilot" onClick={() => setOpen(false)}><X size={18} aria-hidden="true" /></button>
          </header>

          <div className="copilot-messages" aria-live="polite">
            {!messages.length && (
              <div className="copilot-welcome">
                <span className="copilot-welcome-icon"><Sparkles size={21} aria-hidden="true" /></span>
                <h2>What would you like to know?</h2>
                <p>Hi there! Ask me about {page === "Dashboard" ? "your platform" : page.toLowerCase()}, or choose a prompt to get started.</p>
                <div className="copilot-suggestions">
                  {promptList.map((prompt, index) => {
                    const IconComponent = suggestions[index % suggestions.length].icon;
                    return <button key={prompt} onClick={() => submitQuestion(prompt)}><IconComponent size={17} aria-hidden="true" /><span>{prompt}</span><ArrowRight size={15} aria-hidden="true" /></button>;
                  })}
                </div>
              </div>
            )}
            {messages.map((message) => (
              <article className={`copilot-message ${message.role}`} key={message.id}>
                {message.role === "assistant" && <span className="copilot-message-icon"><Sparkles size={13} aria-hidden="true" /></span>}
                <div className="copilot-message-body">
                  <div className="copilot-message-text">{renderMessageText(message.text)}</div>
                  {message.reviewJobs && (
                    <div className="copilot-review-jobs">
                      <strong>Review affected listings</strong>
                      {message.reviewJobs.map((job) => <span key={job.id}><i />{job.title}<small>{job.company} · {job.source}</small></span>)}
                      <button className="copilot-danger-action" onClick={() => executeAction({ kind: "review-jobs", jobs: message.reviewJobs })}>Review and confirm hide</button>
                    </div>
                  )}
                  {message.actions?.length > 0 && (
                    <div className="copilot-message-actions">
                      {message.actions.map((action) => <button key={action.kind} onClick={() => executeAction(action)}>{action.label}<ArrowRight size={14} aria-hidden="true" /></button>)}
                    </div>
                  )}
                </div>
              </article>
            ))}
            {typing && <div className="copilot-typing"><i /><i /><i /><span>Thinking through the workspace data…</span></div>}
          </div>

          <form className="copilot-composer" onSubmit={(event) => { event.preventDefault(); submitQuestion(); }}>
            <input
              aria-label="Ask AIFAGen Copilot"
              placeholder={`Ask anything about ${page.toLowerCase()}…`}
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
            />
            <button type="submit" disabled={!draft.trim() || typing} aria-label="Send message"><Send size={17} aria-hidden="true" /></button>
          </form>
          <p className="copilot-disclaimer">Workspace summaries sent to Groq omit contact details. Avoid entering personal information.</p>
        </section>
      )}
      <button
        type="button"
        className={`copilot-launcher ${open ? "active" : ""}`}
        aria-label={open ? "Close AIFAGen Copilot" : "Open AIFAGen Copilot"}
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        {open ? <X size={20} aria-hidden="true" /> : <><Sparkles size={20} aria-hidden="true" /><span>Copilot</span></>}
      </button>
    </div>
  );
}

function Toast({ toast, close }) {
  const IconComponent = toast.variant === "error"
    ? AlertCircle
    : toast.variant === "info"
      ? Info
      : CheckCircle2;

  return (
    <div
      className={`toast toast-${toast.variant}`}
      role={toast.variant === "error" ? "alert" : "status"}
      aria-live={toast.variant === "error" ? "assertive" : "polite"}
    >
      <span className="toast-icon"><IconComponent size={19} aria-hidden="true" /></span>
      <span className="toast-copy">{toast.message}</span>
      <button type="button" className="toast-close" onClick={close} aria-label="Dismiss notification">
        <X size={16} aria-hidden="true" />
      </button>
    </div>
  );
}
