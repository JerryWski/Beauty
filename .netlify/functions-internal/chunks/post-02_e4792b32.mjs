import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_b14c6678.mjs';
import 'clsx';
import 'html-escaper';

const html = "<p>Jedyną stałą rzeczą w życiu są zmiany 🌊😃</p>\n<p>My zmieniamy się dla Was aby ugościć Was w niezwykle wyjątkowym miejscu, z niesamowitym klimatem i pięknym przesłaniem..☘️💚</p>\n<p>Tworzymy miejsce, w którym piękno spotyka się z radością. 🌸😄</p>\n<p>Zadbamy o to aby wizyta w naszej beauty klinice była nie tylko profesjonalną usługą ale również ucztą dobrego samopoczucia. 💁‍♀️🧖‍♀️💆💆‍♀️🙋‍♀️</p>\n<p>Nasza nowa lokalizacja urzekła mnie od pierwszego wejrzenia więc nie mogłam wybrać inaczej..</p>\n<p>📍Koszary Park 💘</p>\n<p>Ul. Marka Kotańskiego 4</p>\n<p>Olsztyn</p>\n<p>🏛klimatyczne lofty, oryginalne wnętrza, urokliwa przestrzeń oraz ogromny parking 😉👌</p>\n<p>Do nowego miejsca zapraszamy w listopadzie, dokładną datę podamy jak tylko będziemy gotowe Was ugościć ☕️🧁🍰</p>\n<p>Dlaczego Aloha ?</p>\n<p>Zdradzimy w następnym poście 😃😉</p>\n<p>Pięknego dnia ❤️😘</p>";

				const frontmatter = {"title":"Jedyną stałą rzeczą w życiu są zmiany","slug":"post-2","excerpt":"My zmieniamy się dla Was aby ugościć Was w niezwykle wyjątkowym miejscu, z niesamowitym klimatem i pięknym przesłaniem..☘️💚","date":"2023-10-26T00:00:00.000Z","image":"./images/logo-img.webp","author":"Agata"};
				const file = "C:/Users/Kaze/Desktop/IT/Astro/Beauty/src/content/posts/post-02.md";
				const url = undefined;
				function rawContent() {
					return "Jedyną stałą rzeczą w życiu są zmiany 🌊😃 \r\n\r\nMy zmieniamy się dla Was aby ugościć Was w niezwykle wyjątkowym miejscu, z niesamowitym klimatem i pięknym przesłaniem..☘️💚\r\n\r\nTworzymy miejsce, w którym piękno spotyka się z radością. 🌸😄\r\n\r\nZadbamy o to aby wizyta w naszej beauty klinice była nie tylko profesjonalną usługą ale również ucztą dobrego samopoczucia. 💁‍♀️🧖‍♀️💆💆‍♀️🙋‍♀️\r\n \r\nNasza nowa lokalizacja urzekła mnie od pierwszego wejrzenia więc nie mogłam wybrać inaczej..\r\n\r\n📍Koszary Park 💘\r\n\r\nUl. Marka Kotańskiego 4 \r\n\r\nOlsztyn\r\n\r\n🏛klimatyczne lofty, oryginalne wnętrza, urokliwa przestrzeń oraz ogromny parking 😉👌\r\n\r\nDo nowego miejsca zapraszamy w listopadzie, dokładną datę podamy jak tylko będziemy gotowe Was ugościć ☕️🧁🍰\r\n\r\nDlaczego Aloha ?\r\n\r\nZdradzimy w następnym poście 😃😉\r\n\r\nPięknego dnia ❤️😘";
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
