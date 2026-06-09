const { useState, useEffect, useMemo, useRef } = React;

// 1. SVG COMPONENTS
const LogoGDT = ({ className }) => (
    <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 678.2 437.6" className={className}>
        <g id="d"><path fill="currentColor" d="M580.57,405.99c-18.54,0-32-16.25-32-38.63v-.28c0-22.87,13.34-39.48,31.71-39.48,11.56,0,17.75,5.15,22.27,10.19l2.07,2.31v-32.14c0-2.49,2.02-4.51,4.51-4.51h20.66c2.49,0,4.51,2.02,4.51,4.51v91.68c0,2.49-2.02,4.51-4.51,4.51h-20.66c-2.49,0-4.51-2.02-4.51-4.51v-6.79l-2.06,2.22c-5.32,5.75-11.01,10.91-22,10.91ZM591.3,351.64c-7.87,0-14.03,6.6-14.03,15.02v.28c0,8.42,6.16,15.02,14.03,15.02s14.03-6.6,14.03-15.02v-.28c0-8.42-6.17-15.02-14.03-15.02Z"/></g>
        <g id="i"><rect fill="currentColor" x="510.93" y="329.44" width="29.68" height="74.72" rx="4.51" ry="4.51"/></g>
        <g id="_." data-name="."><path fill="currentColor" d="M487.67,405.85c-8.38,0-15.19-6.82-15.19-15.19s6.82-15.19,15.19-15.19,15.19,6.82,15.19,15.19-6.82,15.19-15.19,15.19Z"/></g>
        <g id="b"><path fill="currentColor" d="M436.48,405.99c-11.56,0-17.75-5.15-22.27-10.19l-2.07-2.31v6.16c0,2.49-2.02,4.51-4.51,4.51h-20.66c-2.49,0-4.51-2.02-4.51-4.51v-91.68c0-2.49,2.02-4.51,4.51-4.51h20.66c2.49,0,4.51,2.02,4.51,4.51v32.78l2.06-2.22c5.32-5.75,11-10.91,22-10.91,18.54,0,31.99,16.25,31.99,38.63v.28c0,22.87-13.34,39.48-31.71,39.48ZM425.47,351.64c-7.87,0-14.04,6.6-14.04,15.02v.28c0,8.42,6.17,15.02,14.04,15.02s14.03-6.6,14.03-15.02v-.28c0-8.42-6.16-15.02-14.03-15.02Z"/></g>
        <g id="a"><path fill="currentColor" d="M319.75,405.99c-18.54,0-32-16.25-32-38.63v-.28c0-22.87,13.34-39.48,31.71-39.48,11.57,0,17.75,5.15,22.27,10.19l2.07,2.31v-6.16c0-2.49,2.02-4.51,4.51-4.51h20.66c2.49,0,4.51,2.02,4.51,4.51v65.7c0,2.49-2.02,4.51-4.51,4.51h-20.66c-2.49,0-4.51-2.02-4.51-4.51v-6.79l-2.06,2.22c-5.32,5.75-11.01,10.91-22,10.91ZM330.48,351.64c-7.87,0-14.03,6.6-14.03,15.02v.28c0,8.42,6.16,15.02,14.03,15.02s14.03-6.6,14.03-15.02v-.28c0-8.42-6.17-15.02-14.03-15.02Z"/></g>
        <g id="l"><rect fill="currentColor" x="250.81" y="303.46" width="29.68" height="100.7" rx="4.51" ry="4.51"/></g>
        <g id="t"><path fill="currentColor" d="M222.22,405.85c-18.77,0-27.9-8.62-27.9-26.35v-22.03c0-3.16-2.59-5.67-5.75-5.7-1.82-.02-3.29-1.51-3.29-3.33v-11.34c0-2,1.35-3.7,3.25-4.31,5.75-1.86,5.79-8.56,5.79-8.56v-9.62c0-2.49,2.02-4.51,4.51-4.51h20.66c2.49,0,4.51,2.02,4.51,4.51v14.84h13.28c2.49,0,4.51,2.02,4.51,4.51v13.32c0,2.49-2.02,4.51-4.51,4.51h-13.28v20.67c0,6.12,2.93,9.09,8.95,9.09,1.41,0,2.93-.18,4.49-.53.25-.06.5-.08.74-.08,1.83,0,3.32,1.49,3.32,3.33v15.51c0,1.38-.85,2.61-2.16,3.12-4.82,1.89-11.07,2.97-17.13,2.97Z"/></g>
        <g id="d-2" data-name="d"><path fill="currentColor" d="M124.73,405.99c-18.54,0-32-16.25-32-38.63v-.28c0-22.87,13.34-39.48,31.71-39.48,11.57,0,17.75,5.15,22.27,10.19l2.07,2.31v-32.14c0-2.49,2.02-4.51,4.51-4.51h20.66c2.49,0,4.51,2.02,4.51,4.51v91.68c0,2.49-2.02,4.51-4.51,4.51h-20.66c-2.49,0-4.51-2.02-4.51-4.51v-6.79l-2.06,2.22c-5.32,5.75-11.01,10.91-22,10.91ZM135.46,351.64c-7.87,0-14.03,6.6-14.03,15.02v.28c0,8.42,6.16,15.02,14.03,15.02s14.03-6.6,14.03-15.02v-.28c0-8.42-6.17-15.02-14.03-15.02Z"/></g>
        <g id="g"><path fill="currentColor" d="M42.16,437.6c-13.85,0-25.55-2.21-36.82-6.97-1.14-.48-2-1.39-2.43-2.57-.43-1.18-.35-2.5.22-3.62l4.67-9.15c.76-1.49,2.28-2.41,3.97-2.41.64,0,1.27.13,1.86.4,7.84,3.47,15.29,5.09,23.44,5.09,10.38,0,17.13-4.62,18.99-13.01.22-1.11.35-2.25.4-3.44.04-1.04-.32-2.01-1.02-2.75-.72-.75-1.73-1.18-2.77-1.18-.94,0-1.85.35-2.56,1-3.59,3.26-8.89,7-18.13,7-18.54,0-32-16.25-32-38.63v-.28c0-22.87,13.34-39.48,31.71-39.48,11.57,0,17.75,5.15,22.27,10.19l2.07,2.31v-6.16c0-2.49,2.02-4.51,4.51-4.51h20.66c2.49,0,4.51,2.02,4.51,4.51v62.48c0,14.21-2.99,23.53-9.68,30.22-7.37,7.37-18.45,10.95-33.89,10.95ZM42.72,351.64c-7.87,0-14.03,6.6-14.03,15.02v.28c0,8.42,6.16,15.02,14.03,15.02s14.03-6.6,14.03-15.02v-.28c0-8.42-6.17-15.02-14.03-15.02Z"/></g>
        <g id="_7" data-name="7"><path fill="currentColor" d="M525.55,305.3c-8.8,0-15.93-7.13-15.93-15.93v-45.57c0-8.8,7.13-15.93,15.93-15.93s15.93,7.13,15.93,15.93v45.57c0,8.8-7.13,15.93-15.93,15.93Z"/></g>
        <g id="_6" data-name="6"><path fill="currentColor" d="M622.23,265.25c-4.08,0-8.15-1.55-11.26-4.67l-32.23-32.23c-6.22-6.22-6.22-16.3,0-22.52s16.3-6.22,22.52,0l32.23,32.23c6.22,6.22,6.22,16.3,0,22.52-3.11,3.11-7.19,4.67-11.26,4.67Z"/></g>
        <g id="_5" data-name="5"><path fill="currentColor" d="M662.27,168.58h-45.57c-8.8,0-15.93-7.13-15.93-15.93s7.13-15.93,15.93-15.93h45.57c8.8,0,15.93,7.13,15.93,15.93s-7.13,15.93-15.93,15.93Z"/></g>
        <g id="_4" data-name="4"><path fill="currentColor" d="M590,104.12c-4.08,0-8.15-1.55-11.26-4.66-6.22-6.22-6.22-16.3,0-22.52l32.23-32.23c6.22-6.22,16.3-6.22,22.52,0,6.22,6.22,6.22,16.3,0,22.52l-32.23,32.23c-3.11,3.11-7.19,4.67-11.26,4.67Z"/></g>
        <g id="_3" data-name="3"><path fill="currentColor" d="M525.55,77.43c-8.8,0-15.93-7.13-15.93-15.93V15.93c0-8.8,7.13-15.93,15.93-15.93s15.93,7.13,15.93,15.93v45.57c0,8.8-7.13,15.93-15.93,15.93Z"/></g>
        <g id="_2" data-name="2"><path fill="currentColor" d="M461.1,104.12c-4.08,0-8.15-1.55-11.26-4.66l-32.23-32.23c-6.22-6.22-6.22-16.3,0-22.52,6.22-6.22,16.3-6.22,22.52,0l32.23,32.23c6.22,6.22,6.22,16.3,0,22.52-3.11,3.11-7.19,4.67-11.26,4.67Z"/></g>
        <g id="_1" data-name="1"><path fill="currentColor" d="M434.4,168.58h-45.57c-8.8,0-15.93-7.13-15.93-15.93s7.13-15.93,15.93-15.93h45.57c8.8,0,15.93,7.13,15.93,15.93s-7.13,15.93-15.93,15.93Z"/></g>
        <g id="tongkat"><path fill="currentColor" d="M428.87,265.25c-4.08,0-8.15-1.55-11.26-4.67-6.22-6.22-6.22-16.3,0-22.52l96.68-96.68c6.22-6.22,16.3-6.22,22.52,0,6.22,6.22,6.22,16.3,0,22.52l-96.68,96.68c-3.11,3.11-7.19,4.67-11.26,4.67Z"/></g>
    </svg>
);

const IconHome = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>;
const IconMaximize = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>;
const IconMirror = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"/></svg>;
const IconLock = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>;
const IconUnlock = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/></svg>;
const IconFileText = () => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>;
const IconCalendar = () => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>;
const IconDatabase = () => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>;
const IconShare2 = () => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>;
const IconSun = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="M4.93 4.93l1.41 1.41"/><path d="M17.66 17.66l1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="M6.34 17.66l-1.41 1.41"/><path d="M19.07 4.93l-1.41 1.41"/></svg>;
const IconMoon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>;
const IconTable = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v18"/><path d="M3 12h18"/><rect x="3" y="3" width="18" height="18" rx="2"/></svg>;
const IconExternalLink = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>;
const IconSettings = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>;
const IconTrash = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>;
const IconUserPlus = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>;
const IconClock = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;

// 2. MAIN APP COMPONENT
const App = () => {
    const [loading, setLoading] = useState(true);
    const [view, setView] = useState('dashboard'); 
    const [systemTime, setSystemTime] = useState(new Date());
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [timerScale, setTimerScale] = useState(1.0);
    const [darkMode, setDarkMode] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [sortBy, setSortBy] = useState("name-asc");

    // State Input Tambah Peserta Baru
    const [newNama, setNewNama] = useState("");
    const [newLink, setNewLink] = useState("");

    // State Admin & Dynamic Duration Offset (Menit Pemotong)
    const [timeOffset, setTimeOffset] = useState(0); 
    
    const [config, setConfig] = useState({ headline: "", docLink: "", submissionLink: "" });
    const [modules, setModules] = useState([]);
    const [schedule, setSchedule] = useState([]);
    const [pesertaList, setPesertaList] = useState([]);

    const timerRef = useRef(null);
    const spreadsheetEmbedUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRFr1dH2Y34-ZSSxN-Ycasseqx4a_kU8Pja9dQeShIA6la4X5BVQo-JiSCcdZ3k7X8SXxJ8OhVr48d0/pubhtml?gid=0&single=true";

    // Load Awal Data
    useEffect(() => {
        const savedOffset = localStorage.getItem('gdt_time_offset_live');
        if (savedOffset) setTimeOffset(parseInt(savedOffset));

        const savedDarkMode = localStorage.getItem('gdt_dark_mode');
        if (savedDarkMode) setDarkMode(savedDarkMode === 'true');

        fetch('data.json')
            .then(response => response.json())
            .then(data => {
                const savedModuleLinks = localStorage.getItem('gdt_custom_module_links');
                let localLinks = savedModuleLinks ? JSON.parse(savedModuleLinks) : null;

                const processedModules = data.modules.map((modul, idx) => ({
                    ...modul,
                    releaseTime: new Date(modul.releaseTime),
                    link: (localLinks && localLinks[idx]) ? localLinks[idx] : modul.link
                })).sort((a, b) => a.releaseTime - b.releaseTime);

                const processedSchedule = data.schedule.map(item => ({
                    ...item,
                    start: new Date(item.start),
                    end: new Date(item.end)
                })).sort((a, b) => a.start - b.start);

                setConfig(data.config);
                setModules(processedModules);
                setSchedule(processedSchedule);

                const savedPeserta = localStorage.getItem('gdt_custom_peserta_list_babel');
                if (savedPeserta) {
                    setPesertaList(JSON.parse(savedPeserta));
                } else if (window.DATA_PESERTA) {
                    setPesertaList(window.DATA_PESERTA);
                }

                setLoading(false);
            })
            .catch(error => {
                console.error("Gagal menarik data:", error);
                setLoading(false);
            });
    }, []);

    // Real-time Clock Server Internal (Selalu Akurat Sesuai Waktu Laptop Asli)
    useEffect(() => {
        const timer = setInterval(() => {
            setSystemTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    // Deteksi Pintu Masuk Admin Room
    useEffect(() => {
        if (searchQuery.toLowerCase() === 'admin123') {
            setView('admin');
            setSearchQuery(''); 
        }
    }, [searchQuery]);

    // Fullscreen Detector
    useEffect(() => {
        const handleFsChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
            if (!document.fullscreenElement) setTimerScale(1.0);
        };
        document.addEventListener('fullscreenchange', handleFsChange);
        return () => document.removeEventListener('fullscreenchange', handleFsChange);
    }, []);

    // Dark Mode Theme Handler
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('gdt_dark_mode', darkMode);
    }, [darkMode]);

    const toggleFullScreen = () => {
        if (!document.fullscreenElement) {
            timerRef.current.requestFullscreen().catch(err => console.error(err));
        } else {
            document.exitFullscreen();
        }
    };

    const toggleDarkMode = () => setDarkMode(!darkMode);
    const zoomIn = () => setTimerScale(prev => Math.min(prev + 0.1, 2.0));
    const zoomOut = () => setTimerScale(prev => Math.max(prev - 0.1, 0.6));

    // Tambah Peserta Baru Area
    const handleAddPeserta = (e) => {
        e.preventDefault();
        if (!newNama || !newLink) {
            alert("Harap isi nama dan link folder drive peserta!");
            return;
        }
        const newPeserta = { nama: newNama, link: newLink };
        const updatedList = [...pesertaList, newPeserta];
        setPesertaList(updatedList);
        localStorage.setItem('gdt_custom_peserta_list_babel', JSON.stringify(updatedList));
        setNewNama("");
        setNewLink("");
        alert(`Peserta "${newNama}" sukses ditambahkan!`);
    };

    // Hapus Peserta Lomba Area
    const handleDeletePeserta = (namaPeserta) => {
        if (confirm(`Apakah Anda yakin ingin menghapus peserta bernama "${namaPeserta}"?`)) {
            const updatedList = pesertaList.filter(p => p.nama !== namaPeserta);
            setPesertaList(updatedList);
            localStorage.setItem('gdt_custom_peserta_list_babel', JSON.stringify(updatedList));
        }
    };

    // Simpan Pengaturan Control Admin
    const saveAdminSettings = (e) => {
        e.preventDefault();
        localStorage.setItem('gdt_time_offset_live', timeOffset);
        
        const customLinks = modules.map(m => m.link);
        localStorage.setItem('gdt_custom_module_links', JSON.stringify(customLinks));
        
        alert("Konfigurasi Berhasil Disimpan!");
        setView('dashboard');
    };

    // Fungsi klik tombol Quick Button (+ / - Menit) instan di Admin Room
    const adjustOffsetInstantly = (amount) => {
        const newOffset = timeOffset + amount;
        setTimeOffset(newOffset);
        localStorage.setItem('gdt_time_offset_live', newOffset);
    };

    const resetAdminSettings = () => {
        if (confirm("Apakah Anda yakin ingin menghapus semua modifikasi waktu & mengembalikan ke timeline normal?")) {
            localStorage.removeItem('gdt_time_offset_live');
            localStorage.removeItem('gdt_custom_module_links');
            localStorage.removeItem('gdt_custom_peserta_list_babel');
            setTimeOffset(0);
            window.location.reload();
        }
    };

    // Format String Jam Utama (WIB)
    const liveTimeString = useMemo(() => {
        return systemTime.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' }) + " WIB";
    }, [systemTime]);

    const liveFullDateString = useMemo(() => {
        return systemTime.toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
    }, [systemTime]);

    // REVISI LOGIKA UTAMA: DINAMIS MENGHITUNG OFFSET AGENDA YANG SEDANG BERJALAN AKTIF
    const { activeEvent, nextEvent, countdownMinutesLeft } = useMemo(() => {
        let active = null;
        let next = null;

        for (let i = 0; i < schedule.length; i++) {
            const s = schedule[i];
            if (systemTime >= s.start && systemTime <= s.end) {
                active = s;
                break;
            }
            if (systemTime < s.start && !next) {
                next = s;
            }
        }

        let finalDiffMs = 0;

        if (active) {
            const originalEnd = active.end.getTime();
            const modifiedEnd = originalEnd + (timeOffset * 60 * 1000);
            finalDiffMs = modifiedEnd - systemTime.getTime();
        } else if (next) {
            finalDiffMs = next.start.getTime() - systemTime.getTime();
        }

        return { 
            activeEvent: active, 
            nextEvent: next, 
            countdownMinutesLeft: finalDiffMs > 0 ? finalDiffMs : 0 
        };
    }, [systemTime, schedule, timeOffset]);

    // Memecah milidetik sisa hitung mundur dinamis menjadi Jam, Menit, Detik
    const { displayHours, displayMinutes, displaySeconds } = useMemo(() => {
        const totalSecs = Math.floor(countdownMinutesLeft / 1000);
        return {
            displayHours: Math.floor(totalSecs / 3600),
            displayMinutes: Math.floor((totalSecs % 3600) / 60),
            displaySeconds: totalSecs % 60
        };
    }, [countdownMinutesLeft]);

    const isFinished = !activeEvent && !nextEvent && schedule.length > 0;
    const pad = (num) => String(num).padStart(2, '0');

    // Filter & Pengurutan nama
    const processedPesertaTable = useMemo(() => {
        let result = pesertaList.filter(p => 
            p.nama.toLowerCase().includes(searchQuery.toLowerCase())
        );
        return result.sort((a, b) => {
            if (sortBy === 'name-asc') return a.nama.localeCompare(b.nama);
            if (sortBy === 'name-desc') return b.nama.localeCompare(a.nama);
            return 0;
        });
    }, [pesertaList, searchQuery, sortBy]);

    return (
        <div className="app-container">
            {/* HEADER */}
            <header className="sticky top-0 z-50 brand-red shadow-lg w-full">
                <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
                    <div className="flex items-center">
                        <button onClick={() => setView('dashboard')} className="hover:opacity-90 transition-opacity focus:outline-none">
                            <LogoGDT className="h-14 sm:h-16 w-auto text-white" />
                        </button>
                    </div>
                    
                    <div className="flex items-center gap-3">
                        <div className="hidden sm:flex items-center gap-1.5 bg-white bg-opacity-15 text-white font-mono font-bold px-3 py-1.5 rounded-xl text-xs border border-white border-opacity-10 shadow-sm mr-1">
                            <IconClock />
                            <span>{liveTimeString}</span>
                        </div>
                        <button onClick={toggleDarkMode} className="p-2.5 bg-white bg-opacity-10 hover:bg-opacity-20 text-white rounded-xl transition-all border border-white border-opacity-10">
                            {darkMode ? <IconSun /> : <IconMoon />}
                        </button>
                        <button onClick={() => setView('dashboard')} className="p-2.5 bg-white bg-opacity-10 hover:bg-opacity-20 text-white rounded-xl transition-all flex items-center gap-2 font-bold text-sm uppercase tracking-wider border border-white border-opacity-10">
                            <IconHome />
                            <span className="hidden md:inline">Home</span>
                        </button>
                    </div>
                </div>
            </header>

            {/* MAIN CONTENT CONTAINER */}
            <main className="flex-grow max-w-6xl w-full mx-auto px-6 py-10 pb-16">
                
                {view !== 'admin' && (
                    <div className="text-center mb-8">
                        <h1 className="text-2xl sm:text-4xl font-black tracking-wider uppercase text-gray-800 dark:text-white">{config.headline || "Portal Utama LKS"}</h1>
                        {timeOffset !== 0 && (
                            <span className="inline-block mt-2 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase animate-pulse">
                                Modifikasi Durasi Countdown Aktif: ({timeOffset > 0 ? `+${timeOffset}` : timeOffset} Menit)
                            </span>
                        )}
                    </div>
                )}

                {/* VIEW: DASHBOARD */}
                {view === 'dashboard' && (
                    <div className="space-y-12 animate-fade-in">
                        <div className="text-center max-w-xl mx-auto bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-md rounded-2xl py-4 px-6 flex flex-col items-center justify-center gap-1">
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1"><IconClock /> Waktu Sekarang (Lokal)</span>
                            <h2 className="text-2xl sm:text-3xl font-black text-gray-800 dark:text-white font-mono tracking-wide">{liveTimeString}</h2>
                            <p className="text-xs font-semibold text-gray-400">{liveFullDateString}</p>
                        </div>

                        {/* KOTAK TIMER */}
                        <div ref={timerRef} className={`bg-white dark:bg-gray-900 shadow-xl max-w-4xl mx-auto text-center border border-gray-100 dark:border-gray-800 relative transition-all duration-300 ${isFullscreen ? 'flex flex-col items-center justify-center w-full h-full p-12 m-0 max-w-none rounded-none' : 'rounded-3xl p-8'}`}>
                            <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-gray-50 dark:bg-gray-800 p-1 rounded-xl border border-gray-200 dark:border-gray-700 z-10">
                                <button onClick={zoomOut} className="w-8 h-8 font-black text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg flex items-center justify-center text-lg focus:outline-none">-</button>
                                <span className="text-xs text-gray-400 font-bold px-1">{Math.round(timerScale * 100)}%</span>
                                <button onClick={zoomIn} className="w-8 h-8 font-black text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg flex items-center justify-center text-lg focus:outline-none">+</button>
                                <div className="w-[1px] h-5 bg-gray-300 dark:bg-gray-600 mx-1"></div>
                                <button onClick={toggleFullScreen} className="w-8 h-8 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg flex items-center justify-center focus:outline-none">{isFullscreen ? <IconMirror /> : <IconMaximize />}</button>
                            </div>

                            <div style={{ transform: `scale(${timerScale})`, transformOrigin: 'center' }} className="transition-transform duration-200 my-4">
                                {isFinished ? (
                                    <div className="inline-flex items-center gap-2 px-6 py-2 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full font-bold mb-6">Seluruh Agenda Selesai</div>
                                ) : (
                                    <div className={`inline-flex items-center gap-2 px-6 py-2 rounded-full font-bold mb-8 shadow-sm ${activeEvent ? "bg-green-100 text-green-700 dark:bg-green-950/50 dark:text-green-400 border border-green-200 dark:border-green-900 shadow-sm animate-pulse-fast" : "bg-blue-100 text-blue-700 dark:bg-blue-950/50 dark:text-blue-400 border border-blue-200 dark:border-blue-900"}`}>
                                        <span className="w-3 h-3 rounded-full bg-current"></span>
                                        {activeEvent ? `SEDANG BERLANGSUNG: ${activeEvent.title}` : `Agenda Berikutnya: ${nextEvent?.title || 'Menunggu Jadwal'}`}
                                    </div>
                                )}

                                <div className="flex justify-center items-center gap-4 sm:gap-6">
                                    <div className="flex flex-col items-center">
                                        <div className="bg-gray-900 dark:bg-gray-950 text-white w-20 h-24 sm:w-28 sm:h-32 flex items-center justify-center rounded-xl text-4xl sm:text-6xl font-black shadow-inner">{pad(displayHours)}</div>
                                        <span className="text-gray-500 dark:text-gray-400 font-bold mt-3 text-xs uppercase tracking-widest">Jam</span>
                                    </div>
                                    <div className="text-4xl sm:text-6xl font-black text-gray-300 dark:text-gray-700 -mt-8">:</div>
                                    <div className="flex flex-col items-center">
                                        <div className="brand-red w-20 h-24 sm:w-28 sm:h-32 flex items-center justify-center rounded-xl text-4xl sm:text-6xl font-black shadow-lg ring-4 ring-red-100 dark:ring-red-950">{pad(displayMinutes)}</div>
                                        <span className="text-gray-500 dark:text-gray-400 font-bold mt-3 text-xs uppercase tracking-widest">Menit</span>
                                    </div>
                                    <div className="text-4xl sm:text-6xl font-black text-gray-300 dark:text-gray-700 -mt-8">:</div>
                                    <div className="flex flex-col items-center">
                                        <div className="bg-gray-900 dark:bg-gray-950 text-white w-20 h-24 sm:w-28 sm:h-32 flex items-center justify-center rounded-xl text-4xl sm:text-6xl font-black shadow-inner">{pad(displaySeconds)}</div>
                                        <span className="text-gray-500 dark:text-gray-400 font-bold mt-3 text-xs uppercase tracking-widest">Detik</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Menu Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
                            <button onClick={() => setView('modules')} className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col items-center justify-center gap-4 border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900">
                                <div className="w-16 h-16 rounded-full bg-red-50 dark:bg-red-950/30 text-brand-red flex items-center justify-center group-hover:scale-110 transition-transform"><IconFileText /></div>
                                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">Akses Modul</h3>
                            </button>
                            <button onClick={() => setView('schedule')} className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col items-center justify-center gap-4 border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900">
                                <div className="w-16 h-16 rounded-full bg-red-50 dark:bg-red-950/30 text-brand-red flex items-center justify-center group-hover:scale-110 transition-transform"><IconCalendar /></div>
                                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">Jadwal Kompetisi</h3>
                            </button>
                            <button onClick={() => setView('submission')} className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col items-center justify-center gap-4 border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 text-center">
                                <div className="w-16 h-16 rounded-full bg-red-50 dark:bg-red-950/30 text-brand-red flex items-center justify-center group-hover:scale-110 transition-transform"><IconShare2 /></div>
                                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">Folder Pengumpulan</h3>
                            </button>
                            <a href={config.docLink} target="_blank" rel="noreferrer" className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col items-center justify-center gap-4 border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 text-center">
                                <div className="w-16 h-16 rounded-full bg-red-50 dark:bg-red-950/30 text-brand-red flex items-center justify-center group-hover:scale-110 transition-transform"><IconDatabase /></div>
                                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">Dokumentasi</h3>
                            </a>
                        </div>
                    </div>
                )}

                {/* VIEW: CONTROL PANEL RAHASIA ADMIN */}
                {view === 'admin' && (
                    <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 animate-fade-in">
                        {/* Lajur Kiri: Setting Jam, Modul & LIVE COUNTDOWN PANEL */}
                        <div className="lg:col-span-1 space-y-6">
                            {/* LIVE MONITORING TIMER PANEL */}
                            <div className="bg-gray-900 text-white p-6 rounded-3xl shadow-xl border border-gray-800 text-center space-y-4">
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center justify-center gap-1">
                                    <IconClock /> Live Status Sesi
                                </span>
                                <div className="text-xs font-bold text-amber-400 bg-amber-500/10 px-3 py-1.5 rounded-xl border border-amber-500/20 truncate">
                                    {activeEvent ? `AKTIF: ${activeEvent.title}` : (nextEvent ? `TENGGANG JEDA: Menuju ${nextEvent.title}` : "Agenda Selesai")}
                                </div>
                                
                                {/* Countdown Digital Raksasa di Room Admin */}
                                <div className="text-4xl font-black font-mono tracking-wider text-red-400 py-2 bg-black bg-opacity-30 rounded-2xl shadow-inner">
                                    {pad(displayHours)}:{pad(displayMinutes)}:{pad(displaySeconds)}
                                </div>

                                {/* QUICK CONTROLLER BUTTONS (Sesuai Request: -10 -5 +5 +10) */}
                                <div className="space-y-2">
                                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wide block">Quick Adjustment (Menit)</span>
                                    <div className="grid grid-cols-4 gap-1.5">
                                        <button type="button" onClick={() => adjustOffsetInstantly(-10)} className="bg-gray-800 hover:bg-red-900/50 text-red-400 font-mono font-bold py-2 rounded-xl text-xs border border-gray-700 transition-colors">-10</button>
                                        <button type="button" onClick={() => adjustOffsetInstantly(-5)} className="bg-gray-800 hover:bg-red-900/50 text-red-400 font-mono font-bold py-2 rounded-xl text-xs border border-gray-700 transition-colors">-5</button>
                                        <button type="button" onClick={() => adjustOffsetInstantly(5)} className="bg-gray-800 hover:bg-green-900/50 text-green-400 font-mono font-bold py-2 rounded-xl text-xs border border-gray-700 transition-colors">+5</button>
                                        <button type="button" onClick={() => adjustOffsetInstantly(10)} className="bg-gray-800 hover:bg-green-900/50 text-green-400 font-mono font-bold py-2 rounded-xl text-xs border border-gray-700 transition-colors">+10</button>
                                    </div>
                                </div>
                            </div>

                            {/* Form Input Custom Manual */}
                            <div className="bg-white dark:bg-gray-900 p-6 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800">
                                <div className="flex items-center gap-3 border-b border-gray-100 dark:border-gray-800 pb-3 mb-4">
                                    <div className="text-brand-red"><IconSettings /></div>
                                    <h2 className="text-sm font-black text-gray-900 dark:text-white uppercase">Input Custom Manual</h2>
                                </div>
                                <form onSubmit={saveAdminSettings} className="space-y-4">
                                    <div className="space-y-1">
                                        <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase">Akurasi Offset Kumulatif (Menit):</label>
                                        <input type="number" value={timeOffset} onChange={(e) => setTimeOffset(parseInt(e.target.value) || 0)} className="w-full px-4 py-2 text-sm rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 font-bold focus:ring-1 focus:ring-red-500 focus:outline-none"/>
                                    </div>
                                    <div className="space-y-2 pt-2 border-t border-gray-100 dark:border-gray-800">
                                        <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase">Override Link Modul Soal:</label>
                                        {modules.map((modul, idx) => (
                                            <div key={idx} className="space-y-1">
                                                <span className="text-[11px] font-bold text-gray-400">Modul {idx + 1}:</span>
                                                <input type="text" value={modul.link} onChange={(e) => {
                                                    const u = [...modules]; u[idx].link = e.target.value; setModules(u);
                                                }} className="w-full px-3 py-1 text-xs rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"/>
                                            </div>
                                        ))}
                                    </div>
                                    <button type="submit" className="w-full brand-red py-2.5 rounded-xl font-bold shadow-md hover:bg-red-600 text-xs uppercase tracking-wider">Simpan Semua Konfigurasi</button>
                                    <button type="button" onClick={resetAdminSettings} className="w-full py-2 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-xl text-xs font-bold uppercase hover:bg-gray-200">Reset Semua Global</button>
                                </form>
                            </div>
                        </div>

                        {/* Lajur Kanan: Ruang Tambah & Hapus Folder Peserta */}
                        <div className="lg:col-span-2 space-y-6">
                            <div className="bg-white dark:bg-gray-900 p-6 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800">
                                <div className="flex items-center gap-3 border-b border-gray-100 dark:border-gray-800 pb-3 mb-4">
                                    <div className="text-brand-red"><IconUserPlus /></div>
                                    <h2 className="text-lg font-black text-gray-900 dark:text-white uppercase">Tambah Peserta Lomba Baru</h2>
                                </div>
                                <form onSubmit={handleAddPeserta} className="space-y-4">
                                    <div className="space-y-1">
                                        <span className="text-xs font-bold text-gray-400 uppercase">Nama Lengkap Peserta</span>
                                        <input type="text" placeholder="Nama Peserta Baru" value={newNama} onChange={(e) => setNewNama(e.target.value)} className="w-full px-3 py-2 text-sm rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none"/>
                                    </div>
                                    <div className="space-y-1">
                                        <span className="text-xs font-bold text-gray-400 uppercase">Link Folder Google Drive Tugas</span>
                                        <input type="text" placeholder="https://drive.google.com/drive/folders/..." value={newLink} onChange={(e) => setNewLink(e.target.value)} className="w-full px-3 py-2 text-sm rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none"/>
                                    </div>
                                    <button type="submit" className="w-full sm:w-auto px-6 py-2.5 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl text-xs uppercase tracking-wider shadow-md transition-colors">Simpan Peserta Baru</button>
                                </form>
                            </div>

                            <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800 overflow-hidden">
                                <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center">
                                    <h3 className="font-bold text-sm text-gray-700 dark:text-gray-300 uppercase tracking-wide">Daftar Manajemen Folder Peserta ({pesertaList.length})</h3>
                                </div>
                                <div className="max-h-96 overflow-y-auto divide-y divide-gray-100 dark:divide-gray-800">
                                    {pesertaList.map((p, idx) => (
                                        <div key={idx} className="p-4 flex items-center justify-between gap-4 text-sm hover:bg-gray-50 dark:hover:bg-gray-800/40">
                                            <div className="flex items-center gap-4 truncate">
                                                <div className="truncate">
                                                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">{p.nama}</h4>
                                                    <p className="text-xs text-gray-400 truncate max-w-xs sm:max-w-md">{p.link}</p>
                                                </div>
                                            </div>
                                            <button type="button" onClick={() => handleDeletePeserta(p.nama)} className="p-2 text-gray-400 hover:text-red-500 transition-colors" title="Hapus Peserta">
                                                <IconTrash />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* VIEW: FOLDER PENGUMPULAN */}
                {view === 'submission' && (
                    <div className="max-w-4xl mx-auto animate-fade-in space-y-12">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl brand-red flex items-center justify-center shadow-md"><IconShare2 /></div>
                                <div>
                                    <h2 className="text-3xl font-extrabold text-gray-800 dark:text-gray-100">Folder Pengumpulan & Live Data</h2>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Silakan kumpulkan tugas dan pantau data rekap nilai di bawah.</p>
                                </div>
                            </div>
                            
                            <div className="flex flex-wrap items-center gap-3">
                                <div className="flex items-center gap-1.5 bg-white dark:bg-gray-800 px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-700">
                                    <span className="text-xs font-bold text-gray-400 uppercase">Urutan:</span>
                                    <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="text-xs font-bold text-gray-700 dark:text-gray-300 bg-transparent focus:outline-none cursor-pointer">
                                        <option value="name-asc" className="dark:bg-gray-800">Nama (A-Z)</option>
                                        <option value="name-desc" className="dark:bg-gray-800">Nama (Z-A)</option>
                                    </select>
                                </div>

                                <input type="text" placeholder="Cari Nama Peserta..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm w-full sm:w-48"/>
                                <a href="#live-monitoring-sheet" className="bg-gray-800 dark:bg-gray-700 text-white px-4 py-2 rounded-xl text-sm font-bold shadow-sm hover:bg-gray-700 flex items-center gap-2 transition-all"><IconTable /><span>Lihat Live Sheet</span></a>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-gray-50 dark:bg-gray-800 border-b border-gray-100 dark:border-gray-800 text-gray-600 dark:text-gray-400 font-bold text-sm tracking-wider uppercase">
                                            <th className="px-8 py-4">Nama Lengkap Peserta</th>
                                            <th className="px-8 py-4 text-right">Aksi Folder Pengumpulan</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                                        {processedPesertaTable.length > 0 ? (
                                            processedPesertaTable.map((peserta, idx) => (
                                                <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-800/40 transition-colors text-gray-700 dark:text-gray-300">
                                                    <td className="px-8 py-5 font-semibold text-gray-900 dark:text-white text-base">{peserta.nama}</td>
                                                    <td className="px-8 py-5 text-right">
                                                        <a href={peserta.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 brand-red px-4 py-2 rounded-xl text-sm font-bold shadow-md hover:bg-red-600 transition-all transform hover:-translate-y-0.5">
                                                            <span>{peserta.nama}_LKS BABEL 2026</span><IconExternalLink />
                                                        </a>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="2" className="px-8 py-12 text-center text-gray-400 dark:text-gray-500 font-medium">Data peserta tidak ditemukan.</td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* LIVE MONITORING SHEET */}
                        <div id="live-monitoring-sheet" className="pt-6 border-t border-gray-200 dark:border-gray-800">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-green-500/10 text-green-500 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">Live Monitoring Sheet</h3>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">Sinkronisasi otomatis real-time dari pusat data utama.</p>
                                </div>
                            </div>
                            <div className="bg-white dark:bg-gray-900 p-2 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 overflow-hidden w-full h-[600px]">
                                <iframe src={spreadsheetEmbedUrl} className="w-full h-full border-0 rounded-xl bg-white" allowFullScreen loading="lazy"></iframe>
                            </div>
                        </div>
                    </div>
                )}

                {/* VIEW: ACCESS MODULES */}
                {view === 'modules' && (
                    <div className="max-w-4xl mx-auto animate-fade-in">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-xl brand-red flex items-center justify-center"><IconFileText /></div>
                            <h2 className="text-3xl font-extrabold text-gray-800 dark:text-gray-100">Modul Kompetisi</h2>
                        </div>
                        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 overflow-hidden">
                            <div className="divide-y divide-gray-100 dark:divide-gray-800">
                                {modules.map((modul) => {
                                    const isUnlocked = systemTime >= modul.releaseTime;
                                    return (
                                        <div key={modul.id} className="p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 hover:bg-gray-50 dark:hover:bg-gray-800/40 transition-colors">
                                            <div className="space-y-2 flex-1">
                                                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">{modul.title}</h3>
                                                <div className="flex flex-wrap gap-4 text-sm font-medium text-gray-500 dark:text-gray-400">
                                                    <span>Rilis Sesi: {modul.releaseTime.toLocaleString('id-ID', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' })}</span>
                                                    {modul.pic && <span className="bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded-md text-gray-700 dark:text-gray-300">PIC: {modul.pic}</span>}
                                                </div>
                                            </div>
                                            <div>
                                                {isUnlocked ? (
                                                    <a href={modul.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 brand-red px-6 py-3 rounded-xl font-bold shadow-md hover:bg-red-600 transition-colors">
                                                        <IconUnlock /> Buka Modul
                                                    </a>
                                                ) : (
                                                    <button disabled className="inline-flex items-center gap-2 bg-gray-200 dark:bg-gray-800 text-gray-500 px-6 py-3 rounded-xl font-bold cursor-not-allowed">
                                                        <IconLock /> Terkunci
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                )}

                {/* VIEW: SCHEDULE */}
                {view === 'schedule' && (
                    <div className="max-w-4xl mx-auto animate-fade-in">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-xl brand-red flex items-center justify-center"><IconCalendar /></div>
                            <h2 className="text-3xl font-extrabold text-gray-800 dark:text-gray-100">Jadwal Kompetisi</h2>
                        </div>
                        <div className="space-y-8">
                            {Object.entries(
                                schedule.reduce((acc, curr) => {
                                    const dateStr = curr.start.toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
                                    if (!acc[dateStr]) acc[dateStr] = [];
                                    acc[dateStr].push(curr);
                                    return acc;
                                }, {})
                            ).map(([dateLabel, items], idx) => (
                                <div key={idx} className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 overflow-hidden">
                                    <div className="bg-gray-50 dark:bg-gray-800/60 px-6 py-4 border-b border-gray-100 dark:border-gray-800"><h3 className="font-bold text-lg text-gray-700 dark:text-gray-300">{dateLabel}</h3></div>
                                    <div className="divide-y divide-gray-100 dark:divide-gray-800">
                                        {items.map((item) => {
                                            const isPast = systemTime > item.end;
                                            const isNow = systemTime >= item.start && systemTime <= item.end;
                                            return (
                                                <div key={item.id} className={`p-6 flex flex-col sm:flex-row gap-4 sm:gap-8 border-l-4 transition-all duration-300 ${
                                                    isNow ? 'schedule-highlight border-l-red-500' : 'hover:bg-gray-50 dark:hover:bg-gray-800/20 border-l-transparent'
                                                }`}>
                                                    <div className="min-w-[140px] text-brand-red dark:text-red-400 font-bold flex flex-col justify-center">
                                                        <div className="text-lg">{item.start.toLocaleTimeString('id-ID', {hour: '2-digit', minute:'2-digit'})} - {item.end.toLocaleTimeString('id-ID', {hour: '2-digit', minute:'2-digit'})}</div>
                                                        {item.duration && <div className="text-xs text-gray-400 dark:text-gray-500 mt-1 uppercase tracking-wider">{item.duration}</div>}
                                                    </div>
                                                    <div className="flex-1">
                                                        <h4 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">{item.title}</h4>
                                                        {item.pic && <span className="text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-md">PIC: {item.pic}</span>}
                                                    </div>
                                                    <div className="flex items-center justify-start sm:justify-end min-w-[120px]">
                                                        {isNow ? <span className="px-3 py-1 rounded-full bg-red-100 text-brand-red dark:bg-red-950/50 dark:text-red-400 text-sm font-bold shadow-sm animate-pulse">Berlangsung</span> 
                                                        : isPast ? <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 text-sm font-bold">Selesai</span> 
                                                        : <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/50 dark:text-blue-400 text-sm font-bold">Akan Datang</span>}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </main>

            {/* FOOTER */}
            <footer className="w-full bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-900 py-6 px-12 text-center text-sm font-medium text-gray-500 dark:text-gray-400 tracking-wide mt-auto">
                <p>Created by <span className="font-bold text-gray-800 dark:text-gray-200">Muhamad Nuri Huda</span> • Part of <span className="font-bold text-brand-red">GDTLAB Indonesia</span> • © 2026</p>
            </footer>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(App />);
