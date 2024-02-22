import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_b14c6678.mjs';
import 'clsx';
import 'html-escaper';

const html = "<p>Trzy lata temu, Joasia, pełna nadziei i determinacji, zdecydowała się opuścić etat i założyć własną firmę. Początki były trudne - brak klientów i dochodów sprawił, że każdy dzień był walką o przetrwanie. Nie miała łatwo. Dom, dzieci, ( Joasia samotnie wychowuje dwie córki ) kredyt hipoteczny. Wątpliwości i strach były jej codziennością. Jednak Joasia nie poddawała się!\r\nWiedziała, że musi znaleźć sposób, aby odmienić swoją sytuację</p>\n<p>Przez niemal 3 lata, bardzo trudne trzy lata Joasia poświęciła każdą chwilę, aby nauczyć się tajników marketingu i sprzedaży, komunikacji z klientami i budowania marki. “Wdychała” każdą książkę o marketingu, uczestniczyła w szkoleniach i warsztatach. To wtedy trafiła na mnie na Linkedin. Odezwała się na Whatsapp i wtedy poznała znaczenie tajemniczego słowa <strong>#strategiamarketingu</strong>.</p>\n<p>Wspólnie pochyliliśmy nad strategią dla niej - dla jej firmy i dla jej marki osobistej. Udało się opracować strategię marki i komunikacji, która zmieniła jej życie. Wdrożyła ją krok po kroku, dzień po dniu. Była mega zdeterminowana i zdyscyplinowana. Po ok 10 miesiącach konsekwentnej pracy zgodnie z wytycznymi strategii…stała się magia, a następnie magia stała się rzeczywistością 🚀</p>\n<p>Jej firma, jej marka zaczęła przyciągać klientów. Joasia budowała relacje, tworzyła wartość i oferowała rozwiązania, na które rynek czekał. Jej przychody rosły, a strach i wątpliwości zostały zastąpione pewnością siebie i sukcesem 💰.</p>\n<p>Dziś Joasia zarabia kilkadziesiąt tysięcy złotych miesięcznie. Jej firma prosperuje, a ona jest dowodem na to, że z determinacją, wiedzą i odpowiednią strategią, wszystko jest możliwe.</p>\n<p>Jej historia może być inspiracją dla Wszystkich, którzy uwierzą, że marketing to nie czary mary tylko wiedza, umiejętności, psychologia i ciężka regularna i konsekwetna praca. Przypomina mi, że nawet w najtrudniejszych chwilach, zawsze jest nadzieja i możliwość odmiany. Joasia pokazała, że każdy z nas może być bohaterem swojej własnej historii.</p>\n<p>Czy znasz kogoś, kto ma podobną historię sukcesu?</p>\n<p>Od zera do z Bohatera ✌️</p>";

				const frontmatter = {"title":"Od Zera do Bohaterki Biznesu","slug":"post-3","excerpt":"Historia przemiany Joasi, która pełna nadziei i determinacji, zdecydowała się opuścić etat i założyć własną firmę - brzmi znajomo?","date":"2023-09-20T00:00:00.000Z","image":"./images/blog-image2.png","author":"Agata"};
				const file = "C:/Users/Kaze/Desktop/IT/Astro/Beauty/src/content/posts/post-03.md";
				const url = undefined;
				function rawContent() {
					return "\r\nTrzy lata temu, Joasia, pełna nadziei i determinacji, zdecydowała się opuścić etat i założyć własną firmę. Początki były trudne - brak klientów i dochodów sprawił, że każdy dzień był walką o przetrwanie. Nie miała łatwo. Dom, dzieci, ( Joasia samotnie wychowuje dwie córki ) kredyt hipoteczny. Wątpliwości i strach były jej codziennością. Jednak Joasia nie poddawała się!\r\nWiedziała, że musi znaleźć sposób, aby odmienić swoją sytuację\r\n\r\n\r\nPrzez niemal 3 lata, bardzo trudne trzy lata Joasia poświęciła każdą chwilę, aby nauczyć się tajników marketingu i sprzedaży, komunikacji z klientami i budowania marki. \"Wdychała\" każdą książkę o marketingu, uczestniczyła w szkoleniach i warsztatach. To wtedy trafiła na mnie na Linkedin. Odezwała się na Whatsapp i wtedy poznała znaczenie tajemniczego słowa **#strategiamarketingu**.\r\n\r\n\r\nWspólnie pochyliliśmy nad strategią dla niej - dla jej firmy i dla jej marki osobistej. Udało się opracować strategię marki i komunikacji, która zmieniła jej życie. Wdrożyła ją krok po kroku, dzień po dniu. Była mega zdeterminowana i zdyscyplinowana. Po ok 10 miesiącach konsekwentnej pracy zgodnie z wytycznymi strategii...stała się magia, a następnie magia stała się rzeczywistością 🚀 \r\n\r\n\r\nJej firma, jej marka zaczęła przyciągać klientów. Joasia budowała relacje, tworzyła wartość i oferowała rozwiązania, na które rynek czekał. Jej przychody rosły, a strach i wątpliwości zostały zastąpione pewnością siebie i sukcesem 💰. \r\n\r\n\r\nDziś Joasia zarabia kilkadziesiąt tysięcy złotych miesięcznie. Jej firma prosperuje, a ona jest dowodem na to, że z determinacją, wiedzą i odpowiednią strategią, wszystko jest możliwe.\r\n\r\n\r\nJej historia może być inspiracją dla Wszystkich, którzy uwierzą, że marketing to nie czary mary tylko wiedza, umiejętności, psychologia i ciężka regularna i konsekwetna praca. Przypomina mi, że nawet w najtrudniejszych chwilach, zawsze jest nadzieja i możliwość odmiany. Joasia pokazała, że każdy z nas może być bohaterem swojej własnej historii.\r\n\r\n\r\n\r\nCzy znasz kogoś, kto ma podobną historię sukcesu?\r\n\r\nOd zera do z Bohatera ✌️\r\n\r\n";
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
