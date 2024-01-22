import "./About.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Services from "../../components/services/Services";

function About() {
	return (
		<>
			<Header />
			<main className="about">
				<div className="container">
					<div className="aboutContent">
						<h1 className="aboutTitle">Haqqımızda</h1>
						<p className="aboutText">
							Stul.az mağazasına xoş gəlmisiniz! Biz stulların
							keyfiyyətli seçimi və müştərilərimizin təmənnasını
							qarşılamağa olan fokusumuzla tanınırıq. Bizim
							haqqımızda daha ətraflı məlumat almaq üçün aşağıdakı
							məlumatları oxuyun: Biz kimik: Biz Stul.az, möhtəşəm
							və rahat stulların ən geniş çeşidlərini təqdim edən
							bir internet mağazasıyıq. İstifadəçilərə bir çox
							stul variantını təklif edir və istənilən interyer
							stili və zövqə uyğun olmağı hədəfləyirik. Stul
							seçimi: Stul.az-da, məşhur və tanınmış markaların
							stullarını və yenilikçi dizaynları təklif edirik.
							Həm ofis, həm də ev təhlükəsizlik və rahatlıq
							mərkəzində olsun, müştərilərimizə seçimlərini
							dəstəkləmək üçün müxtəlif stillərdə stullar sunuruq.
							Keyfiyyətli məhsullar: Bizim üçün məhsullarımızın
							keyfiyyəti ən vacib prioritetdir. Yalnız etibarlı və
							sərt materiallardan istifadə edərək stullarımızı
							hazırlayırıq. Müştərilərimizin konforunu və
							rahatlığını təmin etmək üçün dərini və ümumi
							quruluşu ilə əlaqədar detallara diqqət edirik. Rahat
							alış-veriş təcrübəsi: İnternet mağazamızı istifadə
							etmək çox asandır. Müştərilərimiz istədikləri
							stulları seçə bilər, əlavə məlumatlar əldə edə bilər
							və sifariş prosesini asanlıqla tamamlaya bilərlər.
							Müştərilərimizin məlumatları gizlilik
							prinsiplərimizə uyğun şəkildə təchiz edilir. Müştəri
							dəstəyi: Müştəri xoşbəxtliyi və memnuniyyəti bizim
							üçün ən vacib prioritetdir. Bizim dost və
							profesionallığından ibarət olan müştəri dəstək
							komandamız, müştərilərimizin suallarını və
							məsələlərini dəqiq və etibarlı şəkildə
							cavablandırmaq üçün daim hazırdır. Əgər sizinlə
							birlikdə istənilən sualınızı həll etmək üçün
							çalışırıq. Təşəkkürlər: Bizim internet mağazamızı
							seçdiyiniz və bizə güvəndiyiniz üçün təşəkkür
							edirik. Sizin keyfiyyətli stullarımızı seçməniz və
							bizə olan dəyərli dəstəyiniz bizim üçün çox
							vacibdir. Əgər daha çox məlumat və ya məsləhətə
							ehtiyacınız varsa, bizimlə əlaqə saxlamaqdan
							çəkinməyin. Sizə kömək etmək üçün buradayıq! Sağ
							olun və bizimlə alış-veriş etdiyiniz üçün təşəkkür
							edirik! Stul.az Dəstək Komandası
						</p>
					</div>
				</div>
			</main>
			<Services />
			<Footer />
		</>
	);
}

export default About;
