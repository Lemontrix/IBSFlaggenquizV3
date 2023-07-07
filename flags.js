module.exports = {randomFlag}

//function um flagge aus der "hardcode Datenbank" mit pfad des bildes und name zu erhalten

function randomFlag(randomID) {
    switch (randomID) {
        case 0:
            countryName = 'Andorra'
            path = (__dirname + '/Images/ad.png');
            countryNameAlternativ = null
            break;

        case 1:
            countryName = 'Vereinigte Arabische Emirate'
            countryNameAlternativ = 'VAE'
            path = (__dirname + '/Images/ae.png');
            break;

        case 2:
            countryName = 'Afghanistan'
            path = (__dirname + '/Images/af.png');
            countryNameAlternativ = null
            break;

        case 3:
            countryName = 'Antigua und Barbuda'
            path = (__dirname + '/Images/ag.png');
            countryNameAlternativ = null
            break;

        case 4:
            countryName = 'Anguillas'
            path = (__dirname + '/Images/ai.png');
            countryNameAlternativ = null
            break;

        case 5:
            countryName = 'Albanien'
            path = (__dirname + '/Images/al.png');
            countryNameAlternativ = null
            break;

        case 6:
            countryName = 'Armenien'
            path = (__dirname + '/Images/am.png');
            countryNameAlternativ = null
            break;

        case 7:
            countryName = 'Angola'
            path = (__dirname + '/Images/ao.png');
            countryNameAlternativ = null
            break;

        case 8:
            countryName = 'Antarktis'
            path = (__dirname + '/Images/aq.png');
            countryNameAlternativ = null
            break;

        case 9:
            countryName = 'Argentinien'
            path = (__dirname + '/Images/ar.png');
            countryNameAlternativ = null
            break;

        case 10:
            countryName = 'Amerikanisch-Samoa'
            countryNameAlternativ = 'Amerikanisch Samoa'
            path = (__dirname + '/Images/as.png');
            break;

        case 11:
            countryName = 'Österreich'
            path = (__dirname + '/Images/at.png');
            countryNameAlternativ = null
            break;

        case 12:
            countryName = 'Australien'
            path = (__dirname + '/Images/au.png');
            countryNameAlternativ = null
            break;

        case 13:
            countryName = 'Aruba'
            path = (__dirname + '/Images/aw.png');
            countryNameAlternativ = null
            break;

        case 14:
            countryName = 'Aserbaidschan'
            path = (__dirname + '/Images/az.png');
            countryNameAlternativ = null
            break;

        case 15:
            countryName = 'Bosnien und Herzegowina'
            countryNameAlternativ = 'Bosnien Herzegownia'
            path = (__dirname + '/Images/ba.png');
            break;

        case 16:
            countryName = 'Barbados'
            path = (__dirname + '/Images/bb.png');
            countryNameAlternativ = null
            break;

        case 17:
            countryName = 'Bangladesch'
            path = (__dirname + '/Images/bd.png');
            countryNameAlternativ = null
            break;

        case 18:
            countryName = 'Belgien'
            path = (__dirname + '/Images/be.png');
            countryNameAlternativ = null
            break;

        case 19:
            countryName = 'Burkina Faso'
            path = (__dirname + '/Images/bf.png');
            countryNameAlternativ = null
            break;

        case 20:
            countryName = 'Bulgarien'
            path = (__dirname + '/Images/bg.png');
            countryNameAlternativ = null
            break;

        case 21:
            countryName = 'Bahrain'
            path = (__dirname + '/Images/bh.png');
            countryNameAlternativ = null
            break;

        case 22:
            countryName = 'Burundi'
            path = (__dirname + '/Images/bi.png');
            countryNameAlternativ = null
            break;

        case 23:
            countryName = 'Benin'
            path = (__dirname + '/Images/bj.png');
            countryNameAlternativ = null
            break;

        case 24:
            countryName = 'Saint Barthelemy'
            countryNameAlternativ = 'St. Barthelemy'
            path = (__dirname + '/Images/bl.png');
            break;

        case 25:
            countryName = 'Bermuda'
            path = (__dirname + '/Images/bm.png');
            countryNameAlternativ = null
            break;

        case 26:
            countryName = 'Brunei'
            path = (__dirname + '/Images/bn.png');
            countryNameAlternativ = null
            break;

        case 27:
            countryName = 'Bolivien'
            path = (__dirname + '/Images/bo.png');
            countryNameAlternativ = null
            break;

        case 28:
            countryName = 'Boneires'
            path = (__dirname + '/Images/bq.png');
            countryNameAlternativ = null
            break;

        case 29:
            countryName = 'Brasilien'
            path = (__dirname + '/Images/br.png');
            countryNameAlternativ = null
            break;

        case 30:
            countryName = 'Bahamas'
            path = (__dirname + '/Images/bs.png');
            countryNameAlternativ = null
            break;

        case 31:
            countryName = 'Bhutan'
            path = (__dirname + '/Images/bt.png');
            countryNameAlternativ = null
            break;

        case 32:
            countryName = 'Norwegen'
            path = (__dirname + '/Images/bv.png');
            countryNameAlternativ = null
            break;

        case 33:
            countryName = 'Botswana'
            path = (__dirname + '/Images/bw.png');
            countryNameAlternativ = null
            break;

        case 34:
            countryName = 'Belarus'
            path = (__dirname + '/Images/by.png');
            countryNameAlternativ = 'Weißrussland'
            break;

        case 35:
            countryName = 'Belize'
            path = (__dirname + '/Images/bz.png');
            countryNameAlternativ = null
            break;

        case 36:
            countryName = 'Kanada'
            path = (__dirname + '/Images/ca.png');
            countryNameAlternativ = null
            break;

        case 37:
            countryName = 'Kokosinseln'
            path = (__dirname + '/Images/cc.png');
            countryNameAlternativ = null
            break;

        case 38:
            countryName = 'Demokratische Republik Kongo'
            path = (__dirname + '/Images/cd.png');
            countryNameAlternativ = null
            break;

        case 39:
            countryName = 'Zentralafrikanische Republik'
            path = (__dirname + '/Images/cf.png');
            countryNameAlternativ = null
            break;

        case 40:
            countryName = 'Kongo'
            path = (__dirname + '/Images/cg.png');
            countryNameAlternativ = null
            break;

        case 41:
            countryName = 'Schweiz'
            path = (__dirname + '/Images/ch.png');
            countryNameAlternativ = null
            break;

        case 42:
            countryName = 'Elfenbeinküste'
            path = (__dirname + '/Images/ci.png');
            countryNameAlternativ = null
            break;

        case 43:
            countryName = 'Cookinseln'
            path = (__dirname + '/Images/ck.png');
            countryNameAlternativ = null
            break;

        case 44:
            countryName = 'Chile'
            path = (__dirname + '/Images/cl.png');
            countryNameAlternativ = null
            break;

        case 45:
            countryName = 'Kamerun'
            path = (__dirname + '/Images/cm.png');
            countryNameAlternativ = null
            break;

        case 46:
            countryName = 'China'
            path = (__dirname + '/Images/cn.png');
            countryNameAlternativ = null
            break;

        case 47:
            countryName = 'Kolumbien'
            path = (__dirname + '/Images/co.png');
            countryNameAlternativ = null
            break;

        case 48:
            countryName = 'Costa Rica'
            path = (__dirname + '/Images/cr.png');
            countryNameAlternativ = null
            break;

        case 49:
            countryName = 'Kuba'
            path = (__dirname + '/Images/cu.png');
            countryNameAlternativ = null
            break;

        case 50:
            countryName = 'Kap Verde'
            path = (__dirname + '/Images/cv.png');
            countryNameAlternativ = null
            break;

        case 51:
            countryName = 'Curacao'
            path = (__dirname + '/Images/cw.png');
            countryNameAlternativ = null
            break;

        case 52:
            countryName = 'Weihnachtsinsel'
            path = (__dirname + '/Images/cx.png');
            countryNameAlternativ = null
            break;

        case 53:
            countryName = 'Zypern'
            path = (__dirname + '/Images/cy.png');
            countryNameAlternativ = null
            break;

        case 54:
            countryName = 'Tschechien'
            countryNameAlternativ = 'Tschechische Republik'
            path = (__dirname + '/Images/cz.png');
            break;

        case 55:
            countryName = 'Deutschland'
            path = (__dirname + '/Images/de.png');
            countryNameAlternativ = null
            break;

        case 56:
            countryName = 'Dschibuti'
            path = (__dirname + '/Images/dj.png');
            countryNameAlternativ = null
            break;

        case 57:
            countryName = 'Dänemark'
            path = (__dirname + '/Images/dk.png');
            countryNameAlternativ = null
            break;

        case 58:
            countryName = 'Dominica'
            path = (__dirname + '/Images/dm.png');
            countryNameAlternativ = null
            break;

        case 59:
            countryName = 'Dominikanische Republik'
            path = (__dirname + '/Images/do.png');
            countryNameAlternativ = null
            break;

        case 60:
            countryName = 'Algerien'
            path = (__dirname + '/Images/dz.png');
            countryNameAlternativ = null
            break;

        case 61:
            countryName = 'Ecuador'
            path = (__dirname + '/Images/ec.png');
            countryNameAlternativ = null
            break;

        case 62:
            countryName = 'Estland'
            path = (__dirname + '/Images/ee.png');
            countryNameAlternativ = null
            break;

        case 63:
            countryName = 'Ägypten'
            path = (__dirname + '/Images/eg.png');
            countryNameAlternativ = null
            break;

        case 64:
            countryName = 'Demokratische Republik Sahara'
            countryNameAlternativ = 'Sahara'
            path = (__dirname + '/Images/eh.png');
            break;

        case 65:
            countryName = 'Eritrea'
            path = (__dirname + '/Images/er.png');
            countryNameAlternativ = null
            break;

        case 66:
            countryName = 'Spanien'
            path = (__dirname + '/Images/es.png');
            countryNameAlternativ = null
            break;

        case 67:
            countryName = 'Äthiopien'
            path = (__dirname + '/Images/et.png');
            countryNameAlternativ = null
            break;

        case 68:
            countryName = 'Finnland'
            path = (__dirname + '/Images/fi.png');
            countryNameAlternativ = null
            break;

        case 69:
            countryName = 'Fidschi'
            path = (__dirname + '/Images/fj.png');
            countryNameAlternativ = 'Fidischiinseln'
            break;

        case 70:
            countryName = 'Falklandinseln'
            path = (__dirname + '/Images/fk.png');
            countryNameAlternativ = null
            break;

        case 71:
            countryName = 'Mikronesien'
            path = (__dirname + '/Images/fm.png');
            countryNameAlternativ = null
            break;

        case 72:
            countryName = 'Färöer'
            path = (__dirname + '/Images/fo.png');
            countryNameAlternativ = null
            break;

        case 73:
            countryName = 'Frankreich'
            path = (__dirname + '/Images/fr.png');
            countryNameAlternativ = null
            break;

        case 74:
            countryName = 'Gabun'
            path = (__dirname + '/Images/ga.png');
            countryNameAlternativ = null
            break;

        case 75:
            countryName = 'Großbritannien'
            path = (__dirname + '/Images/gb.png');
            countryNameAlternativ = 'Vereinigtes Königreich'
            break;

        case 76:
            countryName = 'England'
            path = (__dirname + '/Images/gb-eng.png');
            countryNameAlternativ = null
            break;

        case 77:
            countryName = 'Nordirland'
            path = (__dirname + '/Images/gb-nir.png');
            countryNameAlternativ = null
            break;

        case 78:
            countryName = 'Schottland'
            path = (__dirname + '/Images/gb-sct.png');
            countryNameAlternativ = null
            break;

        case 79:
            countryName = 'Wales'
            path = (__dirname + '/Images/gb-wls.png');
            countryNameAlternativ = null
            break;

        case 80:
            countryName = 'Granada'
            path = (__dirname + '/Images/gd.png');
            countryNameAlternativ = null
            break;

        case 81:
            countryName = 'Georgien'
            path = (__dirname + '/Images/ge.png');
            countryNameAlternativ = null
            break;

        case 82:
            countryName = 'Fränzösisch-Guayana'
            countryNameAlternativ = 'Französisch Guayana'
            path = (__dirname + '/Images/gf.png');
            countryNameAlternativ = null
            break;

        case 83:
            countryName = 'Guernsey'
            path = (__dirname + '/Images/gg.png');
            countryNameAlternativ = null
            break;

        case 84:
            countryName = 'Ghana'
            path = (__dirname + '/Images/gh.png');
            countryNameAlternativ = null
            break;

        case 85:
            countryName = 'Gibraltar'
            path = (__dirname + '/Images/gi.png');
            countryNameAlternativ = null
            break;

        case 86:
            countryName = 'Grönland'
            path = (__dirname + '/Images/gl.png');
            countryNameAlternativ = null
            break;

        case 87:
            countryName = 'Gambia'
            path = (__dirname + '/Images/gm.png');
            countryNameAlternativ = null
            break;

        case 88:
            countryName = 'Guinea'
            path = (__dirname + '/Images/gn.png');
            countryNameAlternativ = null
            break;

        case 89:
            countryName = 'Guadeloupe'
            path = (__dirname + '/Images/gp.png');
            countryNameAlternativ = null
            break;

        case 90:
            countryName = 'Äquatorialguinea'
            path = (__dirname + '/Images/gq.png');
            countryNameAlternativ = null
            break;

        case 91:
            countryName = 'Griechenland'
            path = (__dirname + '/Images/gr.png');
            countryNameAlternativ = null
            break;

        case 92:
            countryName = 'Südgeorgien und die Südichen Sandwichinseln'
            path = (__dirname + '/Images/gs.png');
            countryNameAlternativ = null
            break;

        case 93:
            countryName = 'Guatemala'
            path = (__dirname + '/Images/gt.png');
            countryNameAlternativ = null
            break;

        case 94:
            countryName = 'Guinea-Bissau'
            path = (__dirname + '/Images/gw.png');
            countryNameAlternativ = 'Guinea Bissau'
            break;

        case 95:
            countryName = 'Guayana'
            path = (__dirname + '/Images/gy.png');
            countryNameAlternativ = null
            break;

        case 96:
            countryName = 'Hong Kong'
            path = (__dirname + '/Images/hk.png');
            countryNameAlternativ = null
            break;

        case 97:
            countryName = 'Honduras'
            path = (__dirname + '/Images/hn.png');
            countryNameAlternativ = null
            break;

        case 98:
            countryName = 'Kroatien'
            path = (__dirname + '/Images/hr.png');
            countryNameAlternativ = null
            break;

        case 99:
            countryName = 'Haiti'
            path = (__dirname + '/Images/ht.png');
            countryNameAlternativ = null
            break;

        case 100:
            countryName = 'Ungarn'
            path = (__dirname + '/Images/hu.png');
            countryNameAlternativ = null
            break;

        case 101:
            countryName = 'Indonesien'
            path = (__dirname + '/Images/id.png');
            countryNameAlternativ = null
            break;

        case 102:
            countryName = 'Irland'
            path = (__dirname + '/Images/ie.png');
            countryNameAlternativ = null
            break;

        case 103:
            countryName = 'Israel'
            path = (__dirname + '/Images/il.png');
            countryNameAlternativ = null
            break;

        case 104:
            countryName = 'Insel Man'
            path = (__dirname + '/Images/im.png');
            countryNameAlternativ = 'Isle of Man'
            break;

        case 105:
            countryName = 'Indien'
            path = (__dirname + '/Images/in.png');
            countryNameAlternativ = null
            break;

        case 106:
            countryName = 'Irak'
            path = (__dirname + '/Images/iq.png');
            countryNameAlternativ = null
            break;

        case 107:
            countryName = 'Iran'
            path = (__dirname + '/Images/ir.png');
            countryNameAlternativ = null
            break;

        case 108:
            countryName = 'Island'
            path = (__dirname + '/Images/is.png');
            countryNameAlternativ = null
            break;

        case 109:
            countryName = 'Italien'
            path = (__dirname + '/Images/it.png');
            countryNameAlternativ = null
            break;

        case 110:
            countryName = 'Jersey'
            path = (__dirname + '/Images/je.png');
            countryNameAlternativ = null
            break;

        case 111:
            countryName = 'Jamaika'
            path = (__dirname + '/Images/jm.png');
            countryNameAlternativ = null
            break;

        case 112:
            countryName = 'Jordanien'
            path = (__dirname + '/Images/jo.png');
            countryNameAlternativ = null
            break;

        case 113:
            countryName = 'Japan'
            path = (__dirname + '/Images/jp.png');
            countryNameAlternativ = null
            break;

        case 114:
            countryName = 'Kenia'
            path = (__dirname + '/Images/ke.png');
            countryNameAlternativ = null
            break;

        case 115:
            countryName = 'Kirgistan'
            path = (__dirname + '/Images/kg.png');
            countryNameAlternativ = null
            break;

        case 116:
            countryName = 'Kambodscha'
            path = (__dirname + '/Images/kh.png');
            countryNameAlternativ = 'Cambodscha'
            break;

        case 117:
            countryName = 'Kiribati'
            path = (__dirname + '/Images/ki.png');
            countryNameAlternativ = null
            break;

        case 118:
            countryName = 'Komoren'
            path = (__dirname + '/Images/km.png');
            countryNameAlternativ = null
            break;

        case 119:
            countryName = 'Saint Kitts und Nevis'
            countryNameAlternativ = 'St. Kitts und Nevis'
            path = (__dirname + '/Images/kn.png');
            break;

        case 120:
            countryName = 'Nord Korea'
            path = (__dirname + '/Images/kp.png');
            countryNameAlternativ = null
            break;

        case 121:
            countryName = 'Süd Korea'
            path = (__dirname + '/Images/kr.png');
            countryNameAlternativ = null
            break;

        case 122:
            countryName = 'Kuweit'
            path = (__dirname + '/Images/kw.png');
            countryNameAlternativ = null
            break;

        case 123:
            countryName = 'Kaimaninseln'
            path = (__dirname + '/Images/ky.png');
            countryNameAlternativ = null
            break;

        case 124:
            countryName = 'Kasachstan'
            path = (__dirname + '/Images/kz.png');
            countryNameAlternativ = null
            break;

        case 125:
            countryName = 'Laos'
            path = (__dirname + '/Images/la.png');
            countryNameAlternativ = null
            break;

        case 126:
            countryName = 'Libanon'
            path = (__dirname + '/Images/lb.png');
            countryNameAlternativ = null
            break;

        case 127:
            countryName = 'Saint Lucia'
            countryNameAlternativ = 'St. Lucia'
            path = (__dirname + '/Images/lc.png');
            countryNameAlternativ = null
            break;

        case 128:
            countryName = 'Liechtenstein'
            path = (__dirname + '/Images/li.png');
            countryNameAlternativ = null
            break;

        case 129:
            countryName = 'Sri Lanka'
            path = (__dirname + '/Images/lk.png');
            countryNameAlternativ = null
            break;

        case 130:
            countryName = 'Liberia'
            path = (__dirname + '/Images/lr.png');
            countryNameAlternativ = null
            break

        case 131:
            countryName = 'Lesotho'
            path = (__dirname + '/Images/ls.png');
            countryNameAlternativ = null
            break;

        case 132:
            countryName = 'Litauen'
            path = (__dirname + '/Images/lt.png');
            countryNameAlternativ = null
            break;

        case 133:
            countryName = 'Luxemburg'
            path = (__dirname + '/Images/lu.png');
            countryNameAlternativ = null
            break;

        case 134:
            countryName = 'Lettland'
            path = (__dirname + '/Images/lv.png');
            countryNameAlternativ = null
            break;

        case 135:
            countryName = 'Libyen'
            path = (__dirname + '/Images/ly.png');
            countryNameAlternativ = null
            break;

        case 136:
            countryName = 'Marokko'
            path = (__dirname + '/Images/ma.png');
            countryNameAlternativ = null
            break;

        case 137:
            countryName = 'Monaco'
            path = (__dirname + '/Images/mc.png');
            countryNameAlternativ = null
            break;

        case 138:
            countryName = 'Moldau'
            path = (__dirname + '/Images/md.png');
            countryNameAlternativ = null
            break;

        case 139:
            countryName = 'Montenegro'
            path = (__dirname + '/Images/me.png');
            countryNameAlternativ = null
            break;

        case 140:
            countryName = 'Madagaskar'
            path = (__dirname + '/Images/mg.png');
            countryNameAlternativ = null
            break;

        case 141:
            countryName = 'Marshallinseln'
            path = (__dirname + '/Images/mh.png');
            countryNameAlternativ = 'Marschallinseln'
            break;

        case 142:
            countryName = 'Nordmazedonien'
            path = (__dirname + '/Images/mk.png');
            countryNameAlternativ = null
            break;

        case 143:
            countryName = 'Mali'
            path = (__dirname + '/Images/ml.png');
            countryNameAlternativ = null
            break;

        case 144:
            countryName = 'Myanmar'
            path = (__dirname + '/Images/mm.png');
            countryNameAlternativ = null
            break;

        case 145:
            countryName = 'Mongolei'
            path = (__dirname + '/Images/mn.png');
            countryNameAlternativ = null
            break;

        case 146:
            countryName = 'Macaus'
            path = (__dirname + '/Images/mo.png');
            countryNameAlternativ = null
            break;

        case 147:
            countryName = 'Nördliche Marianen'
            path = (__dirname + '/Images/mp.png');
            countryNameAlternativ = null
            break;

        case 148:
            countryName = 'Mariniques'
            path = (__dirname + '/Images/mq.png');
            countryNameAlternativ = null
            break;

        case 149:
            countryName = 'Mauretanien'
            path = (__dirname + '/Images/mr.png');
            countryNameAlternativ = null
            break;

        case 150:
            countryName = 'Montserrat'
            path = (__dirname + '/Images/ms.png');
            countryNameAlternativ = null
            break;

        case 151:
            countryName = 'Malta'
            path = (__dirname + '/Images/mt.png');
            countryNameAlternativ = null
            break;

        case 152:
            countryName = 'Mauritius'
            path = (__dirname + '/Images/mu.png');
            countryNameAlternativ = null
            break;

        case 153:
            countryName = 'Malediven'
            path = (__dirname + '/Images/mv.png');
            countryNameAlternativ = null
            break;

        case 154:
            countryName = 'Malawi'
            path = (__dirname + '/Images/mw.png');
            countryNameAlternativ = null
            break;

        case 155:
            countryName = 'Mexiko'
            path = (__dirname + '/Images/mx.png');
            countryNameAlternativ = null
            break;

        case 156:
            countryName = 'Malaysia'
            path = (__dirname + '/Images/my.png');
            countryNameAlternativ = null
            break;

        case 157:
            countryName = 'Mosambik'
            path = (__dirname + '/Images/mz.png');
            countryNameAlternativ = null
            break;

        case 158:
            countryName = 'Namibia'
            path = (__dirname + '/Images/na.png');
            countryNameAlternativ = null
            break;

        case 159:
            countryName = 'Niger'
            path = (__dirname + '/Images/ne.png');
            countryNameAlternativ = null
            break;

        case 160:
            countryName = 'Nigeria'
            path = (__dirname + '/Images/ng.png');
            countryNameAlternativ = null
            break;

        case 161:
            countryName = 'Nicaragua'
            path = (__dirname + '/Images/ni.png');
            countryNameAlternativ = null
            break;

        case 162:
            countryName = 'Niederlande'
            path = (__dirname + '/Images/nl.png');
            countryNameAlternativ = null
            break;

        case 163:
            countryName = 'Nepal'
            path = (__dirname + '/Images/np.png');
            countryNameAlternativ = null
            break;

        case 164:
            countryName = 'Nauru'
            path = (__dirname + '/Images/nr.png');
            countryNameAlternativ = null
            break;

        case 165:
            countryName = 'Niues'
            path = (__dirname + '/Images/nu.png');
            countryNameAlternativ = null
            break;

        case 166:
            countryName = 'Neuseeland'
            path = (__dirname + '/Images/nz.png');
            countryNameAlternativ = null
            break;

        case 167:
            countryName = 'Oman'
            path = (__dirname + '/Images/om.png');
            countryNameAlternativ = null
            break;

        case 168:
            countryName = 'Panama'
            path = (__dirname + '/Images/pa.png');
            countryNameAlternativ = null
            break;

        case 169:
            countryName = 'Peru'
            path = (__dirname + '/Images/pe.png');
            countryNameAlternativ = null
            break;

        case 170:
            countryName = 'Französisch Polynesien'
            path = (__dirname + '/Images/pf.png');
            countryNameAlternativ = null
            break;

        case 171:
            countryName = 'Papua-Neuguinea'
            countryNameAlternativ = 'Papua Neuguinea'
            path = (__dirname + '/Images/pg.png');
            break;

        case 172:
            countryName = 'Philippinen'
            path = (__dirname + '/Images/ph.png');
            countryNameAlternativ = null
            break;

        case 173:
            countryName = 'Pakistan'
            path = (__dirname + '/Images/pk.png');
            countryNameAlternativ = null
            break;

        case 174:
            countryName = 'Polen'
            path = (__dirname + '/Images/pl.png');
            countryNameAlternativ = null
            break;

        case 175:
            countryName = 'Saint-Pierre und Miquelon'
            countryNameAlternativ = 'St. Pierre und Miquelon'
            path = (__dirname + '/Images/pm.png');
            break;

        case 176:
            countryName = 'Pitcairninseln'
            path = (__dirname + '/Images/pn.png');
            countryNameAlternativ = null
            break;

        case 177:
            countryName = 'Puerto Rico'
            path = (__dirname + '/Images/pr.png');
            countryNameAlternativ = null
            break;

        case 178:
            countryName = 'Palestina'
            path = (__dirname + '/Images/ps.png');
            countryNameAlternativ = null
            break;

        case 179:
            countryName = 'Portugal'
            path = (__dirname + '/Images/pt.png');
            countryNameAlternativ = null
            break;

        case 180:
            countryName = 'Palaus'
            path = (__dirname + '/Images/pw.png');
            countryNameAlternativ = null
            break;

        case 181:
            countryName = 'Paraguay'
            path = (__dirname + '/Images/py.png');
            countryNameAlternativ = null
            break;

        case 182:
            countryName = 'Katar'
            path = (__dirname + '/Images/qa.png');
            countryNameAlternativ = null
            break;

        case 183:
            countryName = 'Reunion'
            path = (__dirname + '/Images/re.png');
            countryNameAlternativ = null
            break;

        case 184:
            countryName = 'Rumänien'
            path = (__dirname + '/Images/ro.png');
            countryNameAlternativ = null
            break;

        case 185:
            countryName = 'Serbien'
            path = (__dirname + '/Images/rs.png');
            countryNameAlternativ = null
            break;

        case 186:
            countryName = 'Russland'
            path = (__dirname + '/Images/ru.png');
            countryNameAlternativ = null
            break;

        case 187:
            countryName = 'Rwanda'
            path = (__dirname + '/Images/rw.png');
            countryNameAlternativ = null
            break;

        case 188:
            countryName = 'Saudi Arabien'
            path = (__dirname + '/Images/sa.png');
            countryNameAlternativ = null
            break;

        case 189:
            countryName = 'Salomonen'
            path = (__dirname + '/Images/sb.png');
            countryNameAlternativ = null
            break;

        case 190:
            countryName = 'Seychellen'
            path = (__dirname + '/Images/sc.png');
            countryNameAlternativ = null
            break;

        case 191:
            countryName = 'Sudan'
            path = (__dirname + '/Images/sd.png');
            countryNameAlternativ = null
            break;

        case 192:
            countryName = 'Schweden'
            path = (__dirname + '/Images/se.png');
            countryNameAlternativ = null
            break;

        case 193:
            countryName = 'Singapur'
            path = (__dirname + '/Images/sg.png');
            countryNameAlternativ = null
            break;

        case 194:
            countryName = 'Saint Helena'
            countryNameAlternativ = 'St. Helena'
            path = (__dirname + '/Images/sh.png');
            break;

        case 195:
            countryName = 'Slowenien'
            path = (__dirname + '/Images/si.png');
            countryNameAlternativ = null
            break;

        case 196:
            countryName = 'Slowakei'
            path = (__dirname + '/Images/sk.png');
            countryNameAlternativ = null
            break;

        case 197:
            countryName = 'Sierra Leone'
            path = (__dirname + '/Images/sl.png');
            countryNameAlternativ = null
            break;

        case 198:
            countryName = 'San Marino'
            path = (__dirname + '/Images/sm.png');
            countryNameAlternativ = null
            break;

        case 199:
            countryName = 'Senegal'
            path = (__dirname + '/Images/sn.png');
            countryNameAlternativ = null
            break;

        case 200:
            countryName = 'Somalia'
            path = (__dirname + '/Images/so.png');
            countryNameAlternativ = null
            break;

        case 201:
            countryName = 'Suriname'
            path = (__dirname + '/Images/sr.png');
            countryNameAlternativ = null
            break;

        case 202:
            countryName = 'Süd Sudan'
            path = (__dirname + '/Images/ss.png');
            countryNameAlternativ = null
            break;

        case 203:
            countryName = 'Sao Tome und Principe'
            path = (__dirname + '/Images/st.png');
            countryNameAlternativ = null
            break;

        case 204:
            countryName = 'El Salvator'
            path = (__dirname + '/Images/sv.png');
            countryNameAlternativ = null
            break;

        case 205:
            countryName = 'Saint-Martins'
            countryNameAlternativ = 'St Martins'
            path = (__dirname + '/Images/sx.png');
            break;

        case 206:
            countryName = 'Syrien'
            path = (__dirname + '/Images/sy.png');
            countryNameAlternativ = null
            break;

        case 207:
            countryName = 'Eswatini'
            path = (__dirname + '/Images/sz.png');
            countryNameAlternativ = 'Swasiland'
            break;

        case 208:
            countryName = 'Turks- und Caicosinseln'
            countryNameAlternativ = 'Turk und Caicosinseln'
            path = (__dirname + '/Images/tc.png');
            break;

        case 209:
            countryName = 'Tschad'
            path = (__dirname + '/Images/td.png');
            countryNameAlternativ = null
            break;

        case 210:
            countryName = 'Togo'
            path = (__dirname + '/Images/tg.png');
            countryNameAlternativ = null
            break;

        case 211:
            countryName = 'Thailand'
            path = (__dirname + '/Images/th.png');
            countryNameAlternativ = null
            break;

        case 212:
            countryName = 'Tadschikistan'
            path = (__dirname + '/Images/tj.png');
            countryNameAlternativ = null
            break;

        case 213:
            countryName = 'Tokelau'
            path = (__dirname + '/Images/tk.png');
            countryNameAlternativ = null
            break;

        case 214:
            countryName = 'Osttimor'
            path = (__dirname + '/Images/tl.png');
            countryNameAlternativ = null
            break;

        case 215:
            countryName = 'Turkmenistan'
            path = (__dirname + '/Images/tm.png');
            countryNameAlternativ = null
            break;

        case 216:
            countryName = 'Tunesien'
            path = (__dirname + '/Images/tn.png');
            countryNameAlternativ = null
            break;

        case 217:
            countryName = 'Tonga'
            path = (__dirname + '/Images/to.png');
            countryNameAlternativ = null
            break;

        case 218:
            countryName = 'Türkei'
            path = (__dirname + '/Images/tr.png');
            countryNameAlternativ = null
            break;

        case 219:
            countryName = 'Trinidad und Tobago'
            path = (__dirname + '/Images/tt.png');
            countryNameAlternativ = null
            break;

        case 220:
            countryName = 'Tuvalu'
            path = (__dirname + '/Images/tv.png');
            countryNameAlternativ = null
            break;

        case 221:
            countryName = 'Taiwan'
            path = (__dirname + '/Images/tw.png');
            countryNameAlternativ = null
            break;

        case 222:
            countryName = 'Tansania'
            path = (__dirname + '/Images/tz.png');
            countryNameAlternativ = null
            break;

        case 223:
            countryName = 'Ukraine'
            path = (__dirname + '/Images/ua.png');
            countryNameAlternativ = null
            break;

        case 224:
            countryName = 'Uganda'
            path = (__dirname + '/Images/ug.png');
            countryNameAlternativ = null
            break;

        case 225:
            countryName = 'Vereinigte Staaten von Amerika'
            countryNameAlternativ = 'USA'
            path = (__dirname + '/Images/us.png');
            break;

        case 226:
            countryName = 'Uruguay'
            path = (__dirname + '/Images/uy.png');
            countryNameAlternativ = null
            break;

        case 227:
            countryName = 'Usbekistan'
            path = (__dirname + '/Images/uz.png');
            countryNameAlternativ = null
            break;

        case 228:
            countryName = 'Vatikanstadt'
            path = (__dirname + '/Images/va.png');
            countryNameAlternativ = 'Vatikan'
            break;

        case 229:
            countryName = 'Saint Vincent und Granadien'
            countryNameAlternativ = 'St. Vincent und Granadien'
            path = (__dirname + '/Images/vc.png');
            break;

        case 230:
            countryName = 'Venezuela'
            path = (__dirname + '/Images/ve.png');
            countryNameAlternativ = null
            break;

        case 231:
            countryName = 'Britische Jungferninseln'
            path = (__dirname + '/Images/vg.png');
            countryNameAlternativ = null
            break;

        case 232:
            countryName = 'Amerikanische Jungferninseln'
            path = (__dirname + '/Images/vi.png');
            countryNameAlternativ = null
            break;

        case 233:
            countryName = 'Vietnam'
            path = (__dirname + '/Images/vn.png');
            countryNameAlternativ = null
            break;

        case 234:
            countryName = 'Vanuatus'
            path = (__dirname + '/Images/vu.png');
            countryNameAlternativ = null
            break;

        case 235:
            countryName = 'Wallis und Futana'
            path = (__dirname + '/Images/wf.png');
            countryNameAlternativ = null
            break;

        case 236:
            countryName = 'Samoa'
            path = (__dirname + '/Images/ws.png');
            countryNameAlternativ = null
            break;

        case 237:
            countryName = 'Kosovo'
            path = (__dirname + '/Images/xk.png');
            countryNameAlternativ = null
            break;

        case 238:
            countryName = 'Jemen'
            path = (__dirname + '/Images/ye.png');
            countryNameAlternativ = null
            break;

        case 239:
            countryName = 'Mayotte'
            path = (__dirname + '/Images/yt.png');
            countryNameAlternativ = null
            break;

        case 240:
            countryName = 'Süd Afrika'
            path = (__dirname + '/Images/za.png');
            countryNameAlternativ = null
            break;

        case 241:
            countryName = 'Sambia'
            path = (__dirname + '/Images/zm.png');
            countryNameAlternativ = null
            break;

        case 242:
            countryName = 'Simbabwe'
            path = (__dirname + '/Images/zw.png');
            countryNameAlternativ = null
            break;

    }

    //rückgabe als json mit Pfad, name und dem alternativen name des landes
    const country = { path: path, countryName: countryName, alternativCountryName: countryNameAlternativ }
    return country
}