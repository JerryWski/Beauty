import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_b14c6678.mjs';
import 'clsx';
import 'html-escaper';

const html = "<p>PANOWIE 📣📣📣</p>\n<p>Jest ktoś kto o Was pomyślał 😁</p>\n<p>My -czyli ekipa beauty specjalistek, która zadba o Waszą urodę oraz samopoczucie ponieważ u nas panuje przyjazna atmosfera 🤩</p>\n<p>Jeśli chcesz zadbać o swoją skórę twarzy, dłonie i stopy to Aloha Beautylogic Clinic jest idealną propozycją dla Ciebie 💁‍♀️</p>\n<p>Nie zawahaj się skorzystać z naszej oferty, którą znajdziesz poniżej ⬇️⬇️⬇️</p>\n<p>📍Znajdujemy się na Kotanskiego 4 w Olsztynie</p>\n<p>Koszary Park w cudownych loftowych wnętrzach 👌😄</p>";

				const frontmatter = {"title":"PANOWIE 📣📣📣 - Jest ktoś kto o Was pomyślał 😁","slug":"post-4","excerpt":"My -czyli ekipa beauty specjalistek, która zadba o Waszą urodę oraz samopoczucie ponieważ u nas panuje przyjazna atmosfera 🤩...","date":"2023-11-22T00:00:00.000Z","image":"./images/men-offer.webp","author":"Agata"};
				const file = "C:/Users/Kaze/Desktop/IT/Astro/Beauty/src/content/posts/post-04.md";
				const url = undefined;
				function rawContent() {
					return "\r\nPANOWIE 📣📣📣\r\n\r\nJest ktoś kto o Was pomyślał 😁 \r\n\r\nMy -czyli ekipa beauty specjalistek, która zadba o Waszą urodę oraz samopoczucie ponieważ u nas panuje przyjazna atmosfera 🤩\r\n\r\nJeśli chcesz zadbać o swoją skórę twarzy, dłonie i stopy to Aloha Beautylogic Clinic jest idealną propozycją dla Ciebie 💁‍♀️ \r\n\r\nNie zawahaj się skorzystać z naszej oferty, którą znajdziesz poniżej ⬇️⬇️⬇️\r\n\r\n📍Znajdujemy się na Kotanskiego 4 w Olsztynie \r\n\r\nKoszary Park w cudownych loftowych wnętrzach 👌😄";
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
