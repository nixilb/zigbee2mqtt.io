"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[8892],{79392:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>p,data:()=>m});var a=o(86904);const d=(0,a.Lk)("h1",{id:"neo-nas-ab02b2",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#neo-nas-ab02b2"},[(0,a.Lk)("span",null,"Neo NAS-AB02B2")])],-1),l=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th"),(0,a.Lk)("th")])],-1),i=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Model"),(0,a.Lk)("td",null,"NAS-AB02B2")],-1),n=(0,a.Lk)("td",null,"Vendor",-1),c=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Description"),(0,a.Lk)("td",null,"Alarm")],-1),s=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Exposes"),(0,a.Lk)("td",null,"battery_low, alarm, melody, duration, volume, battpercentage, linkquality")],-1),r=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Picture"),(0,a.Lk)("td",null,[(0,a.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/NAS-AB02B2.png",alt:"Neo NAS-AB02B2"})])],-1),u=(0,a.Fv)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="battery-low-binary" tabindex="-1"><a class="header-anchor" href="#battery-low-binary"><span>Battery low (binary)</span></a></h3><p>Indicates if the battery of this device is almost empty. Value can be found in the published state on the <code>battery_low</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> battery low is ON, if <code>false</code> OFF.</p><h3 id="alarm-binary" tabindex="-1"><a class="header-anchor" href="#alarm-binary"><span>Alarm (binary)</span></a></h3><p>Value can be found in the published state on the <code>alarm</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;alarm&quot;: NEW_VALUE}</code>. If value equals <code>true</code> alarm is ON, if <code>false</code> OFF.</p><h3 id="melody-enum" tabindex="-1"><a class="header-anchor" href="#melody-enum"><span>Melody (enum)</span></a></h3><p>Value can be found in the published state on the <code>melody</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;melody&quot;: NEW_VALUE}</code>. The possible values are: <code>1</code>, <code>2</code>, <code>3</code>, <code>4</code>, <code>5</code>, <code>6</code>, <code>7</code>, <code>8</code>, <code>9</code>, <code>10</code>, <code>11</code>, <code>12</code>, <code>13</code>, <code>14</code>, <code>15</code>, <code>16</code>, <code>17</code>, <code>18</code>.</p><h3 id="duration-numeric" tabindex="-1"><a class="header-anchor" href="#duration-numeric"><span>Duration (numeric)</span></a></h3><p>Value can be found in the published state on the <code>duration</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;duration&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>1800</code>. The unit of this value is <code>s</code>.</p><h3 id="volume-enum" tabindex="-1"><a class="header-anchor" href="#volume-enum"><span>Volume (enum)</span></a></h3><p>Value can be found in the published state on the <code>volume</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;volume&quot;: NEW_VALUE}</code>. The possible values are: <code>low</code>, <code>medium</code>, <code>high</code>.</p><h3 id="battpercentage-numeric" tabindex="-1"><a class="header-anchor" href="#battpercentage-numeric"><span>Battpercentage (numeric)</span></a></h3><p>Value can be found in the published state on the <code>battpercentage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',15),h={},p=(0,o(22652).A)(h,[["render",function(e,t){const o=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[d,(0,a.Lk)("table",null,[l,(0,a.Lk)("tbody",null,[i,(0,a.Lk)("tr",null,[n,(0,a.Lk)("td",null,[(0,a.bF)(o,{to:"/supported-devices/#v=Neo"},{default:(0,a.k6)((()=>[(0,a.eW)("Neo")])),_:1})])]),c,s,r])]),u])}]]),m=JSON.parse('{"path":"/devices/NAS-AB02B2.html","title":"Neo NAS-AB02B2 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Neo NAS-AB02B2 control via MQTT","description":"Integrate your Neo NAS-AB02B2 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2022-01-31T17:42:44.000Z"},"headers":[{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery low (binary)","slug":"battery-low-binary","link":"#battery-low-binary","children":[]},{"level":3,"title":"Alarm (binary)","slug":"alarm-binary","link":"#alarm-binary","children":[]},{"level":3,"title":"Melody (enum)","slug":"melody-enum","link":"#melody-enum","children":[]},{"level":3,"title":"Duration (numeric)","slug":"duration-numeric","link":"#duration-numeric","children":[]},{"level":3,"title":"Volume (enum)","slug":"volume-enum","link":"#volume-enum","children":[]},{"level":3,"title":"Battpercentage (numeric)","slug":"battpercentage-numeric","link":"#battpercentage-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1725308268000},"filePathRelative":"devices/NAS-AB02B2.md"}')}}]);