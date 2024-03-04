import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_b14c6678.mjs';
import 'clsx';
import 'html-escaper';

const html = "<p>Dlaczego większość zabiegów wykonujemy w serii?</p>\n<p>🤔. 🤔. 🤔. 🤔. 🤔. 🤔</p>\n<p>Odpowiedź jest bardzo prosta ! 💁‍♀️</p>\n<p>Nasza skóra starzeje się całe nasze dotychczasowe życie 🤭</p>\n<p>Przez wiele lat narażamy ją na szkodliwe czynniki takie jak: 🥴🆘</p>\n<p>✅ słońce</p>\n<p>✅ zanieczyszczone powietrze</p>\n<p>✅ spaliny</p>\n<p>✅ stres</p>\n<p>✅ niedobór snu</p>\n<p>✅ czasem niewłaściwie dobrana pielęgnacja\r\ndomowa</p>\n<p>✅ niesystematyczna pielęgnacja domowa</p>\n<p>✅ niedokładny demakijaż</p>\n<p>Jeden zabieg nawet top of the top jest w stanie poprawić kondycję naszej skóry ale aby efekt był zadawalający i trwały potrzebne jest systematyczne jej stymulowanie. 👩‍🔬⏱</p>\n<p>✨Skóra potrzebuje czasu aby uruchomiły się w niej procesy naprawcze i aby indywidualnie od jej stanu i możliwości odzyskała witalność. ⌛️⏱✨</p>\n<p>Każdy kolejny zabieg w serii podkręca efekt oraz wydłuża jego utrzymywanie się… troszke podobnie jak z treningami sportowymi👇</p>\n<p>Przez 3 miesiące ćwiczeń zauważymy różnice w naszym ciele ale żeby efekty były znaczące i trwałe musimy wykonywać go systematycznie przez cały rok 💁‍♀️</p>\n<p>Ile tych zabiegów i jakie należy wykonać???…to oczywiście sprawa bardzo indywidualna 👩‍🦰🧑‍🦰👩‍🦳🧓</p>\n<p>Dlatego w naszej klinice dobieramy spersonalizowane terapie specjalnie dla potrzeb Twojej skóry !💫</p>\n<p>💡Terapie łączone z wielu uzupełniających się zabiegów to optymalne rozwiązanie dla potrzeb i problemów Twojej skóry 💡</p>\n<p>Uwielbiam moją beauty przestrzeń💜</p>\n<p>mgr Agata Ambroziak vel Buba 🌸\r\ndyplomowany kosmetolog</p>\n<p>oraz team Aloha BeautyLogic Clinic</p>";

				const frontmatter = {"title":"Dlaczego większość zabiegów wykonujemy w serii?","slug":"post-5","excerpt":"Odpowiedź jest bardzo prosta ! 💁‍♀️ Nasza skóra starzeje się całe nasze dotychczasowe życie 🤭","date":"2024-02-02T00:00:00.000Z","image":"./images/blog-img5.webp","author":"Agata"};
				const file = "C:/Users/Kaze/Desktop/IT/Astro/Beauty/src/content/posts/post-05.md";
				const url = undefined;
				function rawContent() {
					return "\r\nDlaczego większość zabiegów wykonujemy w serii?\r\n\r\n🤔. 🤔. 🤔. 🤔. 🤔. 🤔\r\n\r\nOdpowiedź jest bardzo prosta ! 💁‍♀️\r\n\r\nNasza skóra starzeje się całe nasze dotychczasowe życie 🤭\r\n\r\nPrzez wiele lat narażamy ją na szkodliwe czynniki takie jak: 🥴🆘\r\n\r\n✅ słońce \r\n\r\n✅ zanieczyszczone powietrze\r\n\r\n✅ spaliny\r\n\r\n✅ stres\r\n\r\n✅ niedobór snu\r\n\r\n✅ czasem niewłaściwie dobrana pielęgnacja \r\ndomowa\r\n\r\n✅ niesystematyczna pielęgnacja domowa\r\n\r\n✅ niedokładny demakijaż \r\n\r\nJeden zabieg nawet top of the top jest w stanie poprawić kondycję naszej skóry ale aby efekt był zadawalający i trwały potrzebne jest systematyczne jej stymulowanie. 👩‍🔬⏱\r\n\r\n✨Skóra potrzebuje czasu aby uruchomiły się w niej procesy naprawcze i aby indywidualnie od jej stanu i możliwości odzyskała witalność. ⌛️⏱✨\r\n\r\nKażdy kolejny zabieg w serii podkręca efekt oraz wydłuża jego utrzymywanie się… troszke podobnie jak z treningami sportowymi👇\r\n\r\nPrzez 3 miesiące ćwiczeń zauważymy różnice w naszym ciele ale żeby efekty były znaczące i trwałe musimy wykonywać go systematycznie przez cały rok 💁‍♀️\r\n\r\nIle tych zabiegów i jakie należy wykonać???…to oczywiście sprawa bardzo indywidualna 👩‍🦰🧑‍🦰👩‍🦳🧓\r\n\r\nDlatego w naszej klinice dobieramy spersonalizowane terapie specjalnie dla potrzeb Twojej skóry !💫\r\n\r\n💡Terapie łączone z wielu uzupełniających się zabiegów to optymalne rozwiązanie dla potrzeb i problemów Twojej skóry 💡\r\n\r\n\r\nUwielbiam moją beauty przestrzeń💜\r\n\r\nmgr Agata Ambroziak vel Buba 🌸\r\ndyplomowany kosmetolog \r\n\r\noraz team Aloha BeautyLogic Clinic";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
