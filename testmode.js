const TestMode = (function(){
    const KEY = "roomieduty.testing";
    const STATE_KEY = "roomieduty.testing.state";
  
    function isEnabled(){
      return localStorage.getItem(KEY) === "on";
    }
  
    function setEnabled(v){
      localStorage.setItem(KEY, v ? "on" : "off");
    }
  
    function toggle(){
      setEnabled(!isEnabled());
    }
  
    function loadState(){
      try{
        const s = JSON.parse(localStorage.getItem(STATE_KEY) || "{}");
        return {
          firstDay: s.firstDay || null,
          firstDay4pmAttempts: Number(s.firstDay4pmAttempts || 0),
          acceptedOnSecondDay: Boolean(s.acceptedOnSecondDay || false)
        };
      }catch(e){
        return {
          firstDay: null,
          firstDay4pmAttempts: 0,
          acceptedOnSecondDay: false
        };
      }
    }
  
    function saveState(st){
      localStorage.setItem(STATE_KEY, JSON.stringify({
        firstDay: st.firstDay,
        firstDay4pmAttempts: st.firstDay4pmAttempts,
        acceptedOnSecondDay: st.acceptedOnSecondDay
      }));
    }
  
    function partsFromISO(iso){
      const p = iso.split("-");
      const y = Number(p[0]);
      const m = Number(p[1]);
      const d = Number(p[2]);
      return {
        y: y,
        m: m,
        d: d
      };
    }
  
    function isTargetDay(iso){
      const d = partsFromISO(iso).d;
      return d === 21 || d === 24;
    }
  
    function dayNumber(iso){
      return partsFromISO(iso).d;
    }
  
    function maybeSimulateProposal(args){
      const p = args.proposal;
      const cfg = args.cfg;
      const onChange = args.onChange;
  
      if(!isEnabled()){
        return;
      }
      if(!isTargetDay(p.proposedDate)){
        return;
      }
  
      const st = loadState();
      const dNum = dayNumber(p.proposedDate);
      const is4pm = (p.proposedTime || "").slice(0, 5) === "16:00";
  
      if(!is4pm){
        setTimeout(function(){
          if(p.status !== "pending"){
            return;
          }
          p.status = "rejected";
          p.moderationNote = "Emma: no, this can only be done at 4 due to our landlords rules";
          onChange();
        }, 7000);
        return;
      }
  
      if(st.firstDay === null){
        st.firstDay = dNum;
        st.firstDay4pmAttempts = 0;
        saveState(st);
      }
  
      if(dNum === st.firstDay){
        if(st.firstDay4pmAttempts === 0){
          setTimeout(function(){
            if(p.status !== "pending"){
              return;
            }
            p.status = "rejected";
            p.moderationNote = "Emma: sorry, i am really busy on this day";
            st.firstDay4pmAttempts = 1;
            saveState(st);
            onChange();
          }, 7000);
          return;
        }else{
          setTimeout(function(){
            if(p.status !== "pending"){
              return;
            }
            p.status = "rejected";
            p.moderationNote = "Emma: sorry, i really cant do it at that time.";
            st.firstDay4pmAttempts = st.firstDay4pmAttempts + 1;
            saveState(st);
            onChange();
          }, 7000);
          return;
        }
      }else{
        if(st.firstDay4pmAttempts >= 1 && !st.acceptedOnSecondDay){
          setTimeout(function(){
            if(p.status !== "pending"){
              return;
            }
            p.status = "active";
            p.moderationNote = "Emma: sounds good, see you then!";
            const assignee = (p.members || []).join(" & ");
            cfg.tasks.push({
              date: p.proposedDate,
              title: p.title + " " + (p.proposedTime || "16:00"),
              assignee: assignee
            });
            st.acceptedOnSecondDay = true;
            saveState(st);
            onChange();
          }, 10000);
          return;
        }
      }
    }
  
    return {
      isEnabled: isEnabled,
      setEnabled: setEnabled,
      toggle: toggle,
      maybeSimulateProposal: maybeSimulateProposal
    };
  })();
  