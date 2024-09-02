"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[70697],{77852:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>m,data:()=>v});var n=o(86904);const i=(0,n.Lk)("h1",{id:"iluminize-5144-01",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#iluminize-5144-01"},[(0,n.Lk)("span",null,"Iluminize 5144.01")])],-1),a=(0,n.Lk)("thead",null,[(0,n.Lk)("tr",null,[(0,n.Lk)("th"),(0,n.Lk)("th")])],-1),s=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Model"),(0,n.Lk)("td",null,"5144.01")],-1),l=(0,n.Lk)("td",null,"Vendor",-1),d=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Description"),(0,n.Lk)("td",null,"RGB CCT 3 in 1 Remote Controller")],-1),c=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Exposes"),(0,n.Lk)("td",null,"battery, identify, action, linkquality")],-1),u=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Picture"),(0,n.Lk)("td",null,[(0,n.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/5144.01.png",alt:"Iluminize 5144.01"})])],-1),r=(0,n.Lk)("h2",{id:"options",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#options"},[(0,n.Lk)("span",null,"Options")])],-1),p=(0,n.Fv)('<ul><li><p><code>identify_timeout</code>: Sets the duration of the identification procedure in seconds (i.e., how long the device would flash).The value ranges from 1 to 30 seconds (default: 3). The value must be a number with a minimum value of <code>1</code> and with a with a maximum value of <code>30</code></p></li><li><p><code>simulated_brightness</code>: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. The action_brightness_delta indicates the delta for each interval. Example:</p></li></ul><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">simulated_brightness</span><span class="token punctuation">:</span></span>\n<span class="line">  <span class="token key atrule">delta</span><span class="token punctuation">:</span> <span class="token number">20</span> <span class="token comment"># delta per interval, default = 20</span></span>\n<span class="line">  <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">200</span> <span class="token comment"># interval in milliseconds, default = 200</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;battery&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="identify-enum" tabindex="-1"><a class="header-anchor" href="#identify-enum"><span>Identify (enum)</span></a></h3><p>Initiate device identification. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;identify&quot;: NEW_VALUE}</code>. The possible values are: <code>identify</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>on</code>, <code>off</code>, <code>toggle</code>, <code>brightness_move_to_level</code>, <code>brightness_move_up</code>, <code>brightness_move_down</code>, <code>brightness_step_up</code>, <code>brightness_step_down</code>, <code>brightness_stop</code>, <code>color_temperature_move_stop</code>, <code>color_temperature_move_up</code>, <code>color_temperature_move_down</code>, <code>color_temperature_step_up</code>, <code>color_temperature_step_down</code>, <code>enhanced_move_to_hue_and_saturation</code>, <code>move_to_hue_and_saturation</code>, <code>color_hue_step_up</code>, <code>color_hue_step_down</code>, <code>color_saturation_step_up</code>, <code>color_saturation_step_down</code>, <code>color_loop_set</code>, <code>color_temperature_move</code>, <code>color_move</code>, <code>hue_move</code>, <code>hue_stop</code>, <code>move_to_saturation</code>, <code>move_to_hue</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',11),h={},m=(0,o(22652).A)(h,[["render",function(e,t){const o=(0,n.g2)("RouteLink");return(0,n.uX)(),(0,n.CE)("div",null,[i,(0,n.Lk)("table",null,[a,(0,n.Lk)("tbody",null,[s,(0,n.Lk)("tr",null,[l,(0,n.Lk)("td",null,[(0,n.bF)(o,{to:"/supported-devices/#v=Iluminize"},{default:(0,n.k6)((()=>[(0,n.eW)("Iluminize")])),_:1})])]),d,c,u])]),r,(0,n.Lk)("p",null,[(0,n.Lk)("em",null,[(0,n.bF)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,n.k6)((()=>[(0,n.eW)("How to use device type specific configuration")])),_:1})])]),p])}]]),v=JSON.parse('{"path":"/devices/5144.01.html","title":"Iluminize 5144.01 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Iluminize 5144.01 control via MQTT","description":"Integrate your Iluminize 5144.01 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2024-09-01T12:39:25.000Z"},"headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Identify (enum)","slug":"identify-enum","link":"#identify-enum","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1725308268000},"filePathRelative":"devices/5144.01.md"}')}}]);