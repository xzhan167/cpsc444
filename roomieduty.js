const RoomieDuty = (function(){
    function parseISO(s){
      return new Date(s + "T00:00:00");
    }
  
    function todayFromStorage(){
      return localStorage.getItem("roomieduty.today") || null;
    }
  
    function setTodayStorage(v){
      localStorage.setItem("roomieduty.today", v);
    }
  
    function getTodayDate(cfg){
      const s = todayFromStorage();
      if(s){
        return parseISO(s);
      }
      if(cfg && cfg.today){
        return parseISO(cfg.today);
      }
      const d = new Date();
      d.setHours(0, 0, 0, 0);
      return d;
    }
  
    function fmtDate(d){
      return d.toLocaleDateString(undefined, {
        weekday: "short",
        month: "short",
        day: "numeric"
      });
    }
  
    function weekBinRange(today){
      const y = today.getFullYear();
      const m = today.getMonth();
      const day = today.getDate();
      const bins = [
        [1, 4],
        [5, 11],
        [12, 18],
        [19, 25],
        [26, 31]
      ];
      let picked = bins[0];
      for(const b of bins){
        if(day >= b[0] && day <= b[1]){
          picked = b;
          break;
        }
      }
      const startISO = `${y}-${String(m + 1).padStart(2, "0")}-${String(picked[0]).padStart(2, "0")}`;
      const endISO = `${y}-${String(m + 1).padStart(2, "0")}-${String(picked[1]).padStart(2, "0")}`;
      return {
        start: parseISO(startISO),
        end: parseISO(endISO)
      };
    }
  
    function showToast(msg){
      const el = document.getElementById("toast");
      if(!el){
        return;
      }
      el.textContent = msg;
      el.classList.add("show");
      setTimeout(function(){
        el.classList.remove("show");
      }, 1200);
    }
  
    async function loadConfig(){
      const url = "tasks.json?ts=" + Date.now();
      const res = await fetch(url, {
        cache: "no-store"
      });
      if(!res.ok){
        throw new Error("Failed to fetch tasks.json");
      }
      const data = await res.json();
      return ensureArrays(data);
    }
  
    function downloadUpdatedJson(cfg){
      const storedToday = localStorage.getItem("roomieduty.today");
      const data = {
        ...cfg,
        today: storedToday || cfg.today || null
      };
      const blob = new Blob([JSON.stringify(data, null, 2)], {
        type: "application/json"
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "tasks.json";
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    }
  
    function setupFooterControls(cfg, renderFn){
      document.getElementById("setTodayBtn").addEventListener("click", function(){
        const v = document.getElementById("todayInput").value;
        if(!v){
          return;
        }
        setTodayStorage(v);
        renderFn();
        showToast("Today set to " + v);
      });
      document.getElementById("downloadJsonBtn").addEventListener("click", function(){
        downloadUpdatedJson(cfg);
      });
    }
  
    function ensureArrays(cfg){
      if(!cfg.tasks){
        cfg.tasks = [];
      }
      if(!cfg.notes){
        cfg.notes = [];
      }
      if(!cfg.proposals){
        cfg.proposals = [];
      }
      if(!cfg.notificationsDismissed){
        cfg.notificationsDismissed = [];
      }
      if(!cfg.rules){
        cfg.rules = [];
      }
      return cfg;
    }
  
    function uid(){
      return String(Date.now()) + "_" + Math.random().toString(36).slice(2, 8);
    }
  
    function assigneeKey(name){
      const n = (name || "").toLowerCase();
      if(n.includes("you") || n === "me" || n === "a"){
        return "you";
      }
      if(n.includes("sarah")){
        return "sarah";
      }
      if(n.includes("emma")){
        return "emma";
      }
      return "other";
    }
  
    function classForAssignee(name){
      const k = assigneeKey(name);
      if(k === "you"){
        return "color-you";
      }
      if(k === "sarah"){
        return "color-sarah";
      }
      if(k === "emma"){
        return "color-emma";
      }
      return "color-other";
    }
  
    function renderMonthGrid(container, year, month){
      container.innerHTML = "";
      const first = new Date(year, month, 1);
      const firstDow = first.getDay();
      const daysInMonth = new Date(year, month + 1, 0).getDate();
      for(let i = 0; i < firstDow; i++){
        const e = document.createElement("div");
        e.className = "day empty";
        container.appendChild(e);
      }
      for(let d = 1; d <= daysInMonth; d++){
        const box = document.createElement("div");
        box.className = "day";
        const iso = `${year}-${String(month + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
        box.dataset.date = iso;
        const num = document.createElement("div");
        num.className = "num";
        num.textContent = String(d);
        box.appendChild(num);
        container.appendChild(box);
      }
    }
  
    return {
      parseISO: parseISO,
      todayFromStorage: todayFromStorage,
      setTodayStorage: setTodayStorage,
      getTodayDate: getTodayDate,
      fmtDate: fmtDate,
      weekBinRange: weekBinRange,
      showToast: showToast,
      loadConfig: loadConfig,
      downloadUpdatedJson: downloadUpdatedJson,
      setupFooterControls: setupFooterControls,
      ensureArrays: ensureArrays,
      uid: uid,
      assigneeKey: assigneeKey,
      classForAssignee: classForAssignee,
      renderMonthGrid: renderMonthGrid
    };
  })();
  
  