app.get('/src/apiImage.html', (req, res) => {

    var randomID = Math.floor(Math.random() * 1);

    switch (randomID) {
        case 0:
            countryName = 'Andorra'
            res.sendFile(__dirname + '/Images/ad.png');
            break;

        case 1:
            countryName = 'Vereinigte Arabische Emirate'
            res.sendFile(__dirname + '/Images/ae.png');
            break;

        case 2:
            countryName = 'Afghanistan'
            res.sendFile(__dirname + '/Images/af.png');
            break;

        case 3:
            countryName = 'Antigua und Barbuda'
            res.sendFile(__dirname + '/Images/ag.png');
            break;

        case 4:
            countryName = 'Anguillas'
            res.sendFile(__dirname + '/Images/ai.png');
            break;

        case 5:
            countryName = 'Albanien'
            res.sendFile(__dirname + '/Images/al.png');
            break;

        case 6:
            countryName = 'Armenien'
            res.sendFile(__dirname + '/Images/am.png');
            break;

        case 7:
            countryName = 'Angola'
            res.sendFile(__dirname + '/Images/ao.png');
            break;

        case 8:
            countryName = 'Antarktis'
            res.sendFile(__dirname + '/Images/aq.png');
            break;

        case 9:
            countryName = 'Argentinien'
            res.sendFile(__dirname + '/Images/ar.png');
            break;

        case 10:
            countryName = 'Amerikanisch-Samoa'
            res.sendFile(__dirname + '/Images/as.png');
            break;

        case 11:
            countryName = 'Österreich'
            res.sendFile(__dirname + '/Images/at.png');
            break;

        case 12:
            countryName = 'Australien'
            res.sendFile(__dirname + '/Images/au.png');
            break;

        case 13:
            countryName = 'Aruba'
            res.sendFile(__dirname + '/Images/aw.png');
            break;

        case 14:
            countryName = 'Aserbaidschan'
            res.sendFile(__dirname + '/Images/az.png');
            break;

        case 15:
            countryName = 'Bosnien und Herzegowina'
            res.sendFile(__dirname + '/Images/ba.png');
            break;

        case 16:
            countryName = 'Barbados'
            res.sendFile(__dirname + '/Images/bb.png');
            break;

        case 17:
            countryName = 'Bangladesch'
            res.sendFile(__dirname + '/Images/bd.png');
            break;

        case 18:
            countryName = 'Belgien'
            res.sendFile(__dirname + '/Images/be.png');
            break;

        case 19:
            countryName = 'Burkina Faso'
            res.sendFile(__dirname + '/Images/bf.png');
            break;

        case 20:
            countryName = 'Bulgarien'
            res.sendFile(__dirname + '/Images/bg.png');
            break;

        case 21:
            countryName = 'Bahrain'
            res.sendFile(__dirname + '/Images/bh.png');
            break;

        case 22:
            countryName = 'Burundi'
            res.sendFile(__dirname + '/Images/bi.png');
            break;

        case 23:
            countryName = 'Benin'
            res.sendFile(__dirname + '/Images/bj.png');
            break;

        case 24:
            countryName = 'Saint Barthelemy'
            res.sendFile(__dirname + '/Images/bl.png');
            break;

        case 25:
            countryName = 'Bermuda'
            res.sendFile(__dirname + '/Images/bm.png');
            break;

        case 26:
            countryName = 'Brunei'
            res.sendFile(__dirname + '/Images/bn.png');
            break;

        case 27:
            countryName = 'Bolivien'
            res.sendFile(__dirname + '/Images/bo.png');
            break;

        case 28:
            countryName = 'Boneires'
            res.sendFile(__dirname + '/Images/bq.png');
            break;

        case 29:
            countryName = 'Brasilien'
            res.sendFile(__dirname + '/Images/br.png');
            break;

        case 30:
            countryName = 'Bahamas'
            res.sendFile(__dirname + '/Images/bs.png');
            break;

        case 31:
            countryName = 'Bhutan'
            res.sendFile(__dirname + '/Images/bt.png');
            break;

        case 32:
            countryName = 'Norwegen'
            res.sendFile(__dirname + '/Images/bv.png');
            break;

        case 33:
            countryName = 'Botswana'
            res.sendFile(__dirname + '/Images/bw.png');
            break;

        case 34:
            countryName = 'Belarus'
            res.sendFile(__dirname + '/Images/by.png');
            break;

        case 35:
            countryName = 'Belize'
            res.sendFile(__dirname + '/Images/bz.png');
            break;

        case 36:
            countryName = 'Kanada'
            res.sendFile(__dirname + '/Images/ca.png');
            break;

        case 37:
            countryName = 'Kokosinseln'
            res.sendFile(__dirname + '/Images/cc.png');
            break;

        case 38:
            countryName = 'Demokratische Republik Kongo'
            res.sendFile(__dirname + '/Images/cd.png');
            break;

        case 39:
            countryName = 'Zentralafrikanische Republik'
            res.sendFile(__dirname + '/Images/cf.png');
            break;

        case 40:
            countryName = 'Kongo'
            res.sendFile(__dirname + '/Images/cg.png');
            break;

        case 41:
            countryName = 'Schweiz'
            res.sendFile(__dirname + '/Images/ch.png');
            break;

        case 42:
            countryName = 'Elfenbeinküste'
            res.sendFile(__dirname + '/Images/ci.png');
            break;

        case 43:
            countryName = 'Cookinseln'
            res.sendFile(__dirname + '/Images/ck.png');
            break;

        case 44:
            countryName = 'Chile'
            res.sendFile(__dirname + '/Images/cl.png');
            break;

        case 45:
            countryName = 'Kamerun'
            res.sendFile(__dirname + '/Images/cm.png');
            break;

        case 46:
            countryName = 'China'
            res.sendFile(__dirname + '/Images/cn.png');
            break;

        case 47:
            countryName = 'Kolumbien'
            res.sendFile(__dirname + '/Images/co.png');
            break;

        case 48:
            countryName = 'Costa Rica'
            res.sendFile(__dirname + '/Images/cr.png');
            break;

        case 49:
            countryName = 'Kuba'
            res.sendFile(__dirname + '/Images/cu.png');
            break;

        case 50:
            countryName = 'Kap Verde'
            res.sendFile(__dirname + '/Images/cv.png');
            break;

        case 51:
            countryName = 'Curacao'
            res.sendFile(__dirname + '/Images/cw.png');
            break;

        case 52:
            countryName = 'Weihnachtsinsel'
            res.sendFile(__dirname + '/Images/cx.png');
            break;

        case 53:
            countryName = 'Zypern'
            res.sendFile(__dirname + '/Images/cy.png');
            break;

        case 54:
            countryName = 'Tschechien'
            res.sendFile(__dirname + '/Images/cz.png');
            break;

        case 55:
            countryName = 'Deutschland'
            res.sendFile(__dirname + '/Images/de.png');
            break;

        case 56:
            countryName = 'Dschibuti'
            res.sendFile(__dirname + '/Images/dj.png');
            break;

        case 57:
            countryName = 'Dänemark'
            res.sendFile(__dirname + '/Images/dk.png');
            break;

        case 58:
            countryName = 'Dominica'
            res.sendFile(__dirname + '/Images/dm.png');
            break;

        case 59:
            countryName = 'Dominikanische Republik'
            res.sendFile(__dirname + '/Images/do.png');
            break;

        case 60:
            countryName = 'Algerien'
            res.sendFile(__dirname + '/Images/dz.png');
            break;

        case 61:
            countryName = 'Ecuador'
            res.sendFile(__dirname + '/Images/ec.png');
            break;

        case 62:
            countryName = 'Estland'
            res.sendFile(__dirname + '/Images/ee.png');
            break;

        case 63:
            countryName = 'Ägypten'
            res.sendFile(__dirname + '/Images/eg.png');
            break;

        case 64:
            countryName = 'Demokratische Republik Sahara'
            res.sendFile(__dirname + '/Images/eh.png');
            break;

        case 65:
            countryName = 'Eritrea'
            res.sendFile(__dirname + '/Images/er.png');
            break;

        case 66:
            countryName = 'Spanien'
            res.sendFile(__dirname + '/Images/es.png');
            break;

        case 67:
            countryName = 'Äthiopien'
            res.sendFile(__dirname + '/Images/et.png');
            break;

        case 68:
            countryName = 'Finnland'
            res.sendFile(__dirname + '/Images/fi.png');
            break;

        case 69:
            countryName = 'Fidschi'
            res.sendFile(__dirname + '/Images/fj.png');
            break;

        case 70:
            countryName = 'Falklandinseln'
            res.sendFile(__dirname + '/Images/fk.png');
            break;

        case 71:
            countryName = 'Mikronesien'
            res.sendFile(__dirname + '/Images/fm.png');
            break;

        case 72:
            countryName = 'Färöer'
            res.sendFile(__dirname + '/Images/fo.png');
            break;

        case 73:
            countryName = 'Frankreich'
            res.sendFile(__dirname + '/Images/fr.png');
            break;

        case 74:
            countryName = 'Gabun'
            res.sendFile(__dirname + '/Images/ga.png');
            break;

        case 75:
            countryName = 'Großbritannien'
            res.sendFile(__dirname + '/Images/gb.png');
            break;

        case 76:
            countryName = 'England'
            res.sendFile(__dirname + '/Images/gb-eng.png');
            break;

        case 77:
            countryName = 'Nordirland'
            res.sendFile(__dirname + '/Images/gb-nir.png');
            break;

        case 78:
            countryName = 'Schottland'
            res.sendFile(__dirname + '/Images/gb-sct.png');
            break;

        case 79:
            countryName = 'Wales'
            res.sendFile(__dirname + '/Images/gb-wls.png');
            break;

        case 80:
            countryName = 'Granada'
            res.sendFile(__dirname + '/Images/gd.png');
            break;

        case 81:
            countryName = 'Georgien'
            res.sendFile(__dirname + '/Images/ge.png');
            break;

        case 82:
            countryName = 'Fränzösisch-Guayana'
            res.sendFile(__dirname + '/Images/gf.png');
            break;

        case 83:
            countryName = 'Guernsey'
            res.sendFile(__dirname + '/Images/gg.png');
            break;

        case 84:
            countryName = 'Ghana'
            res.sendFile(__dirname + '/Images/gh.png');
            break;

        case 85:
            countryName = 'Gibraltar'
            res.sendFile(__dirname + '/Images/gi.png');
            break;

        case 86:
            countryName = 'Grönland'
            res.sendFile(__dirname + '/Images/gl.png');
            break;

        case 87:
            countryName = 'Gambia'
            res.sendFile(__dirname + '/Images/gm.png');
            break;

        case 88:
            countryName = 'Guinea'
            res.sendFile(__dirname + '/Images/gn.png');
            break;

        case 89:
            countryName = 'Guadeloupe'
            res.sendFile(__dirname + '/Images/gp.png');
            break;

        case 90:
            countryName = 'Äquatorialguinea'
            res.sendFile(__dirname + '/Images/gq.png');
            break;

        case 91:
            countryName = 'Griechenland'
            res.sendFile(__dirname + '/Images/gr.png');
            break;

        case 92:
            countryName = 'Südgeorgien und die Südichen Sandwichinseln'
            res.sendFile(__dirname + '/Images/gs.png');
            break;

        case 93:
            countryName = 'Guatemala'
            res.sendFile(__dirname + '/Images/gt.png');
            break;

        case 94:
            countryName = 'Guinea-Bissau'
            res.sendFile(__dirname + '/Images/gw.png');
            break;

        case 95:
            countryName = 'Guayana'
            res.sendFile(__dirname + '/Images/gy.png');
            break;

        case 96:
            countryName = 'Hong Kong'
            res.sendFile(__dirname + '/Images/hk.png');
            break;

        case 97:
            countryName = 'Honduras'
            res.sendFile(__dirname + '/Images/hn.png');
            break;

        case 98:
            countryName = 'Kroatien'
            res.sendFile(__dirname + '/Images/hr.png');
            break;

        case 99:
            countryName = 'Haiti'
            res.sendFile(__dirname + '/Images/ht.png');
            break;

        case 100:
            countryName = 'Ungarn'
            res.sendFile(__dirname + '/Images/hu.png');
            break;

        case 101:
            countryName = 'Indonesien'
            res.sendFile(__dirname + '/Images/id.png');
            break;

        case 102:
            countryName = 'Irland'
            res.sendFile(__dirname + '/Images/ie.png');
            break;

        case 103:
            countryName = 'Israel'
            res.sendFile(__dirname + '/Images/il.png');
            break;

        case 104:
            countryName = 'Insel Man'
            res.sendFile(__dirname + '/Images/im.png');
            break;

        case 105:
            countryName = 'Indien'
            res.sendFile(__dirname + '/Images/in.png');
            break;

        case 106:
            countryName = 'Irak'
            res.sendFile(__dirname + '/Images/iq.png');
            break;

        case 107:
            countryName = 'Iran'
            res.sendFile(__dirname + '/Images/ir.png');
            break;

        case 108:
            countryName = 'Island'
            res.sendFile(__dirname + '/Images/is.png');
            break;

        case 109:
            countryName = 'Italien'
            res.sendFile(__dirname + '/Images/it.png');
            break;

        case 110:
            countryName = 'Jersey'
            res.sendFile(__dirname + '/Images/je.png');
            break;

        case 111:
            countryName = 'Jamaika'
            res.sendFile(__dirname + '/Images/jm.png');
            break;

        case 112:
            countryName = 'Jordanien'
            res.sendFile(__dirname + '/Images/jo.png');
            break;

        case 113:
            countryName = 'Japan'
            res.sendFile(__dirname + '/Images/jp.png');
            break;

        case 114:
            countryName = 'Kenia'
            res.sendFile(__dirname + '/Images/ke.png');
            break;

        case 115:
            countryName = 'Kirgistan'
            res.sendFile(__dirname + '/Images/kg.png');
            break;

        case 116:
            countryName = 'Kambodscha'
            res.sendFile(__dirname + '/Images/kh.png');
            break;

        case 117:
            countryName = 'Kiribati'
            res.sendFile(__dirname + '/Images/ki.png');
            break;

        case 118:
            countryName = 'Komoren'
            res.sendFile(__dirname + '/Images/km.png');
            break;

        case 119:
            countryName = 'Saint Kitts und Nevis'
            res.sendFile(__dirname + '/Images/kn.png');
            break;

        case 120:
            countryName = 'Nord Korea'
            res.sendFile(__dirname + '/Images/kp.png');
            break;

        case 121:
            countryName = 'Süd Korea'
            res.sendFile(__dirname + '/Images/kr.png');
            break;

        case 122:
            countryName = 'Kuweit'
            res.sendFile(__dirname + '/Images/kw.png');
            break;

        case 123:
            countryName = 'Kaimaninseln'
            res.sendFile(__dirname + '/Images/ky.png');
            break;

        case 124:
            countryName = 'Kasachstan'
            res.sendFile(__dirname + '/Images/kz.png');
            break;

        case 125:
            countryName = 'Laos'
            res.sendFile(__dirname + '/Images/la.png');
            break;

        case 126:
            countryName = 'Libanon'
            res.sendFile(__dirname + '/Images/lb.png');
            break;

        case 127:
            countryName = 'Saint Lucia'
            res.sendFile(__dirname + '/Images/lc.png');
            break;

        case 128:
            countryName = 'Liechtenstein'
            res.sendFile(__dirname + '/Images/li.png');
            break;

        case 129:
            countryName = 'Sri Lanka'
            res.sendFile(__dirname + '/Images/lk.png');
            break;

        case 130:
            countryName = 'Liberia'
            res.sendFile(__dirname + '/Images/lr.png');
            break

        case 131:
            countryName = 'Lesotho'
            res.sendFile(__dirname + '/Images/ls.png');
            break;

        case 132:
            countryName = 'Litauen'
            res.sendFile(__dirname + '/Images/lt.png');
            break;

        case 133:
            countryName = 'Luxemburg'
            res.sendFile(__dirname + '/Images/lu.png');
            break;

        case 134:
            countryName = 'Lettland'
            res.sendFile(__dirname + '/Images/lv.png');
            break;

        case 135:
            countryName = 'Libyen'
            res.sendFile(__dirname + '/Images/ly.png');
            break;

        case 136:
            countryName = 'Marokko'
            res.sendFile(__dirname + '/Images/ma.png');
            break;

        case 137:
            countryName = 'Monaco'
            res.sendFile(__dirname + '/Images/mc.png');
            break;

        case 138:
            countryName = 'Moldau'
            res.sendFile(__dirname + '/Images/md.png');
            break;

        case 139:
            countryName = 'Montenegro'
            res.sendFile(__dirname + '/Images/me.png');
            break;

        case 140:
            countryName = 'Madagaskar'
            res.sendFile(__dirname + '/Images/mg.png');
            break;

        case 141:
            countryName = 'Marshallinseln'
            res.sendFile(__dirname + '/Images/mh.png');
            break;

        case 142:
            countryName = 'Nordmazedonien'
            res.sendFile(__dirname + '/Images/mk.png');
            break;

        case 143:
            countryName = 'Mali'
            res.sendFile(__dirname + '/Images/ml.png');
            break;

        case 144:
            countryName = 'Myanmar'
            res.sendFile(__dirname + '/Images/mm.png');
            break;

        case 145:
            countryName = 'Mongolei'
            res.sendFile(__dirname + '/Images/mn.png');
            break;

        case 146:
            countryName = 'Macaus'
            res.sendFile(__dirname + '/Images/mo.png');
            break;

        case 147:
            countryName = 'Nördliche Marianen'
            res.sendFile(__dirname + '/Images/mp.png');
            break;

        case 148:
            countryName = 'Mariniques'
            res.sendFile(__dirname + '/Images/mq.png');
            break;

        case 149:
            countryName = 'Mauretanien'
            res.sendFile(__dirname + '/Images/mr.png');
            break;

        case 150:
            countryName = 'Montserrat'
            res.sendFile(__dirname + '/Images/ms.png');
            break;

        case 151:
            countryName = 'Malta'
            res.sendFile(__dirname + '/Images/mt.png');
            break;

        case 152:
            countryName = 'Mauritius'
            res.sendFile(__dirname + '/Images/mu.png');
            break;

        case 153:
            countryName = 'Malediven'
            res.sendFile(__dirname + '/Images/mv.png');
            break;

        case 154:
            countryName = 'Malawi'
            res.sendFile(__dirname + '/Images/mw.png');
            break;

        case 155:
            countryName = 'Mexiko'
            res.sendFile(__dirname + '/Images/mx.png');
            break;

        case 156:
            countryName = 'Malaysia'
            res.sendFile(__dirname + '/Images/my.png');
            break;

        case 157:
            countryName = 'Mosambik'
            res.sendFile(__dirname + '/Images/mz.png');
            break;

        case 158:
            countryName = 'Namibia'
            res.sendFile(__dirname + '/Images/na.png');
            break;

        case 159:
            countryName = 'Niger'
            res.sendFile(__dirname + '/Images/ne.png');
            break;

        case 160:
            countryName = 'Nigeria'
            res.sendFile(__dirname + '/Images/ng.png');
            break;

        case 161:
            countryName = 'Nicaragua'
            res.sendFile(__dirname + '/Images/ni.png');
            break;

        case 162:
            countryName = 'Niederlande'
            res.sendFile(__dirname + '/Images/nl.png');
            break;

        case 163:
            countryName = 'Nepal'
            res.sendFile(__dirname + '/Images/np.png');
            break;

        case 164:
            countryName = 'Nauru'
            res.sendFile(__dirname + '/Images/nr.png');
            break;

        case 165:
            countryName = 'Niues'
            res.sendFile(__dirname + '/Images/nu.png');
            break;

        case 166:
            countryName = 'Neuseeland'
            res.sendFile(__dirname + '/Images/nz.png');
            break;

        case 167:
            countryName = 'Oman'
            res.sendFile(__dirname + '/Images/om.png');
            break;

        case 168:
            countryName = 'Panama'
            res.sendFile(__dirname + '/Images/pa.png');
            break;

        case 169:
            countryName = 'Peru'
            res.sendFile(__dirname + '/Images/pe.png');
            break;

        case 170:
            countryName = 'Französisch Polynesien'
            res.sendFile(__dirname + '/Images/pf.png');
            break;

        case 171:
            countryName = 'Papua-Neuguinea'
            res.sendFile(__dirname + '/Images/pg.png');
            break;

        case 172:
            countryName = 'Philippinen'
            res.sendFile(__dirname + '/Images/ph.png');
            break;

        case 173:
            countryName = 'Pakistan'
            res.sendFile(__dirname + '/Images/pk.png');
            break;

        case 174:
            countryName = 'Polen'
            res.sendFile(__dirname + '/Images/pl.png');
            break;

        case 175:
            countryName = 'Saint-Pierre und Miquelon'
            res.sendFile(__dirname + '/Images/pm.png');
            break;

        case 176:
            countryName = 'Pitcairninseln'
            res.sendFile(__dirname + '/Images/pn.png');
            break;

        case 177:
            countryName = 'Puerto Rico'
            res.sendFile(__dirname + '/Images/pr.png');
            break;

        case 178:
            countryName = 'Palestina'
            res.sendFile(__dirname + '/Images/ps.png');
            break;

        case 179:
            countryName = 'Portugal'
            res.sendFile(__dirname + '/Images/pt.png');
            break;

        case 180:
            countryName = 'Palaus'
            res.sendFile(__dirname + '/Images/pw.png');
            break;

        case 181:
            countryName = 'Paraguay'
            res.sendFile(__dirname + '/Images/py.png');
            break;

        case 182:
            countryName = 'Katar'
            res.sendFile(__dirname + '/Images/qa.png');
            break;

        case 183:
            countryName = 'Reunion'
            res.sendFile(__dirname + '/Images/re.png');
            break;

        case 184:
            countryName = 'Rumänien'
            res.sendFile(__dirname + '/Images/ro.png');
            break;

        case 185:
            countryName = 'Serbien'
            res.sendFile(__dirname + '/Images/rs.png');
            break;

        case 186:
            countryName = 'Russland'
            res.sendFile(__dirname + '/Images/ru.png');
            break;

        case 187:
            countryName = 'Rwanda'
            res.sendFile(__dirname + '/Images/rw.png');
            break;

        case 188:
            countryName = 'Saudi Arabien'
            res.sendFile(__dirname + '/Images/sa.png');
            break;

        case 189:
            countryName = 'Salomonen'
            res.sendFile(__dirname + '/Images/sb.png');
            break;

        case 190:
            countryName = 'Seychellen'
            res.sendFile(__dirname + '/Images/sc.png');
            break;

        case 191:
            countryName = 'Sudan'
            res.sendFile(__dirname + '/Images/sd.png');
            break;

        case 192:
            countryName = 'Schweden'
            res.sendFile(__dirname + '/Images/se.png');
            break;

        case 193:
            countryName = 'Singapur'
            res.sendFile(__dirname + '/Images/sg.png');
            break;

        case 194:
            countryName = 'Saint Helena'
            res.sendFile(__dirname + '/Images/sh.png');
            break;

        case 195:
            countryName = 'Slowenien'
            res.sendFile(__dirname + '/Images/si.png');
            break;

        case 196:
            countryName = 'Slowakei'
            res.sendFile(__dirname + '/Images/sk.png');
            break;

        case 197:
            countryName = 'Sierra Leone'
            res.sendFile(__dirname + '/Images/sl.png');
            break;

        case 198:
            countryName = 'San Marino'
            res.sendFile(__dirname + '/Images/sm.png');
            break;

        case 199:
            countryName = 'Senegal'
            res.sendFile(__dirname + '/Images/sn.png');
            break;

        case 200:
            countryName = 'Somalia'
            res.sendFile(__dirname + '/Images/so.png');
            break;

        case 201:
            countryName = 'Suriname'
            res.sendFile(__dirname + '/Images/sr.png');
            break;

        case 202:
            countryName = 'Süd Sudan'
            res.sendFile(__dirname + '/Images/ss.png');
            break;

        case 203:
            countryName = 'Sao Tome und Principe'
            res.sendFile(__dirname + '/Images/st.png');
            break;

        case 204:
            countryName = 'El Salvator'
            res.sendFile(__dirname + '/Images/sv.png');
            break;

        case 205:
            countryName = 'Saint-Martins'
            res.sendFile(__dirname + '/Images/sx.png');
            break;

        case 206:
            countryName = 'Syrien'
            res.sendFile(__dirname + '/Images/sy.png');
            break;

        case 207:
            countryName = 'Eswatini'
            res.sendFile(__dirname + '/Images/sz.png');
            break;

        case 208:
            countryName = 'Turks- und Caicosinseln'
            res.sendFile(__dirname + '/Images/tc.png');
            break;

        case 209:
            countryName = 'Tschad'
            res.sendFile(__dirname + '/Images/td.png');
            break;

        case 210:
            countryName = 'Togo'
            res.sendFile(__dirname + '/Images/tg.png');
            break;

        case 211:
            countryName = 'Thailand'
            res.sendFile(__dirname + '/Images/th.png');
            break;

        case 212:
            countryName = 'Tadschikistan'
            res.sendFile(__dirname + '/Images/tj.png');
            break;

        case 213:
            countryName = 'Tokelau'
            res.sendFile(__dirname + '/Images/tk.png');
            break;

        case 214:
            countryName = 'Osttimor'
            res.sendFile(__dirname + '/Images/tl.png');
            break;

        case 215:
            countryName = 'Turkmenistan'
            res.sendFile(__dirname + '/Images/tm.png');
            break;

        case 216:
            countryName = 'Tunesien'
            res.sendFile(__dirname + '/Images/tn.png');
            break;

        case 217:
            countryName = 'Tonga'
            res.sendFile(__dirname + '/Images/to.png');
            break;

        case 218:
            countryName = 'Türkei'
            res.sendFile(__dirname + '/Images/tr.png');
            break;

        case 219:
            countryName = 'Trinidad und Tobago'
            res.sendFile(__dirname + '/Images/tt.png');
            break;

        case 220:
            countryName = 'Tuvalu'
            res.sendFile(__dirname + '/Images/tv.png');
            break;

        case 221:
            countryName = 'Taiwan'
            res.sendFile(__dirname + '/Images/tw.png');
            break;

        case 222:
            countryName = 'Tansania'
            res.sendFile(__dirname + '/Images/tz.png');
            break;

        case 223:
            countryName = 'Ukraine'
            res.sendFile(__dirname + '/Images/ua.png');
            break;

        case 224:
            countryName = 'Uganda'
            res.sendFile(__dirname + '/Images/ug.png');
            break;

        case 225:
            countryName = 'USA'
            res.sendFile(__dirname + '/Images/us.png');
            break;

        case 226:
            countryName = 'Uruguay'
            res.sendFile(__dirname + '/Images/uy.png');
            break;

        case 227:
            countryName = 'Usbekistan'
            res.sendFile(__dirname + '/Images/uz.png');
            break;

        case 228:
            countryName = 'Vatikanstadt'
            res.sendFile(__dirname + '/Images/va.png');
            break;

        case 229:
            countryName = 'Staint Vincent und Granadien'
            res.sendFile(__dirname + '/Images/vc.png');
            break;

        case 230:
            countryName = 'Venezuela'
            res.sendFile(__dirname + '/Images/ve.png');
            break;

        case 231:
            countryName = 'Britische Jungferninseln'
            res.sendFile(__dirname + '/Images/vg.png');
            break;

        case 232:
            countryName = 'Amerikanische Jungferninseln'
            res.sendFile(__dirname + '/Images/vi.png');
            break;

        case 233:
            countryName = 'Vietnam'
            res.sendFile(__dirname + '/Images/vn.png');
            break;

        case 234:
            countryName = 'Vanuatus'
            res.sendFile(__dirname + '/Images/vu.png');
            break;

        case 235:
            countryName = 'Wallis und Futana'
            res.sendFile(__dirname + '/Images/wf.png');
            break;

        case 236:
            countryName = 'Samoa'
            res.sendFile(__dirname + '/Images/ws.png');
            break;

        case 237:
            countryName = 'Kosovo'
            res.sendFile(__dirname + '/Images/xk.png');
            break;

        case 238:
            countryName = 'Jemen'
            res.sendFile(__dirname + '/Images/ye.png');
            break;

        case 239:
            countryName = 'Mayotte'
            res.sendFile(__dirname + '/Images/yt.png');
            break;

        case 240:
            countryName = 'Süd Afrika'
            res.sendFile(__dirname + '/Images/za.png');
            break;

        case 241:
            countryName = 'Sambia'
            res.sendFile(__dirname + '/Images/zm.png');
            break;

        case 242:
            countryName = 'Simbabwe'
            res.sendFile(__dirname + '/Images/zw.png');
            break;

    }

});