import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Paginate from "../components/Paginate";
import { listProducts } from "../actions/productActions";
import ProductCarousel from "../components/ProductCarousel";
import Meta from "../components/Meta";

const HomeScreen = ({ match }) => {
	const keyword = match.params.keyword;

	const pageNumber = match.params.pageNumber || 1;

	const dispatch = useDispatch();

	const productList = useSelector((state) => state.productList);
	const { loading, error, products, page, pages } = productList;

	useEffect(() => {
		dispatch(listProducts(keyword, pageNumber));
	}, [dispatch, keyword, pageNumber]);

	return (
		<>
			<Meta />
			{!keyword ? (
				// <ProductCarousel />
				<div className="hero">
					<svg width="609" height="634" viewBox="0 0 609 634" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M376.841 543.5C423.859 539.089 469.481 525.105 562.842 493L573.842 499.5L380.341 589C326.119 607.575 293.38 617.913 161.342 634C126.237 624.819 131.742 613.64 152.842 591C179.736 556.787 181.953 539.652 139.342 516.5L222.342 464L279.341 444.5L286.841 456L204.342 481.5L260.342 475.5L399.342 439L402.842 446.5L267.841 484L306.841 480.5V488L223.342 506.5C298.867 529.703 339.085 541.518 376.841 543.5Z" fill="url(#paint0_linear_217_85)"/>
<rect x="333" width="101" height="337" fill="#929BBC"/>
<rect x="230" width="101" height="337" fill="url(#paint1_linear_217_85)"/>
<rect x="113" width="115" height="337" fill="url(#paint2_linear_217_85)"/>
<rect width="111" height="337" fill="url(#paint3_linear_217_85)"/>
<path d="M434 0H571C427.336 79.02 440.642 227.942 593.5 337H434V0Z" fill="url(#paint4_linear_217_85)"/>
<rect x="331" width="3" height="337" fill="#585171"/>
<rect x="227" width="3" height="337" fill="#969AB8"/>
<rect x="111" width="3" height="337" fill="#929ABD"/>
<path d="M462.5 233.5L370 225L0.5 418V492L462.5 233.5Z" fill="url(#paint5_linear_217_85)"/>
<path d="M355.5 214.5V70L247.5 118.5V271.5L355.5 214.5Z" fill="#FFBCBC"/>
<path d="M123.5 174.5L250 118V270.5L123.5 333V174.5Z" fill="#FFB7B7"/>
<path d="M0 229L126 173.5V332L0 396.5V229Z" fill="#FBB3B0"/>
<path d="M351.5 62.5L328.5 61L0 200V221.5L351.5 62.5Z" fill="white"/>
<path d="M0 229L355.5 70.5L352 62L0 221V229Z" fill="url(#paint6_linear_217_85)"/>
<path d="M75 356.5L355 215L370.5 225L83.5 374.5L75 356.5Z" fill="url(#paint7_linear_217_85)"/>
<path d="M42.5 303.064C22.8592 305.586 14.1652 308.947 0 316.064V421.064C5.34485 423.186 8.0537 424.058 11 423.564C25.1509 420.66 33.7018 417.772 50.5 409.564C79.3921 393.053 90.0788 385.487 89 378.564C83.5209 343.427 76.9569 328.204 59 309.064C53.8588 304.941 51.0184 302.572 42.5 303.064Z" fill="white"/>
<path d="M0 418.564V344.564L10 365.064C18.2887 392.646 17.6036 403.804 10 418.564C4.90563 421.192 2.61229 421.402 0 418.564Z" fill="#FF961A"/>
<path d="M0 510V492L462.5 234V246.5L0 510Z" fill="#FBB3B0"/>
<path d="M448 255L0.5 511V603L448 321.5V255Z" fill="url(#paint8_linear_217_85)"/>
<ellipse cx="320" cy="447" rx="53" ry="16" fill="#929BBC"/>
<path d="M311.5 442V278H320V444.5L311.5 442Z" fill="#1E123D"/>
<path d="M328 278H319.5V444.5L328 442.5V278Z" fill="url(#paint9_linear_217_85)"/>
<ellipse cx="319.5" cy="276.5" rx="8.5" ry="4.5" fill="#EFEFEF"/>
<g filter="url(#filter0_d_217_85)">
<ellipse cx="320" cy="272.5" rx="114" ry="24.5" fill="url(#paint10_linear_217_85)" fill-opacity="0.9" shape-rendering="crispEdges"/>
</g>
<path d="M393 442.743C394.87 432.614 396.613 426.406 400.5 414.743L537.999 379.5C539.891 379.174 549.626 404.369 576.499 498C571.475 499.483 568.972 499.443 564.999 498C559.323 484.143 555.607 474.693 547.499 453C536.013 422.893 529.47 409.891 517.499 396C474.527 399.645 450.72 403.501 409.999 421.5C406.792 433.969 404.727 440.094 399.499 446C396.714 446.216 396.032 444.909 393 442.743Z" fill="#413555"/>
<path d="M301 486C316.403 430.059 325.436 403.126 343.5 376.5L446.5 409.5C453.69 417.087 461.993 439.348 491.5 541C487.484 543.626 485.021 544.253 480 543C467.087 509.49 459.858 490.584 446.5 461.5C434.414 437.894 426.918 424.89 384.5 411C364.346 404.44 354.211 402.432 343.5 409.5C337.027 416.367 333 424.015 325 446C320.255 465.702 316.815 475.267 309 489.5C305.446 489.229 303.72 488.422 301 486Z" fill="#1E123D"/>
<path d="M425 310C440.372 308.295 450.659 309.074 470 311.5C463.673 331.441 446.849 333.122 402 325.5C410.264 318.123 415.118 314.384 425 310Z" fill="#FF961A"/>
<path d="M413 322.5C374.487 331.076 358.454 337.736 335.5 351.5C394.869 359.312 422.554 355.763 455 325.5C436.623 321.571 426.995 320.317 413 322.5Z" fill="#FFBB74"/>
<path d="M534 384.5C508.077 403.707 488.602 408.155 449.5 410.5C534.919 283.387 577.464 226.525 608.5 246C581.063 313.325 564.896 344.735 534 384.5Z" fill="#FE961A"/>
<path d="M454.5 325C521.329 264.416 549.859 240.479 572.5 229.5C585.678 223.248 591.212 223.32 599.5 226.5C608.699 230.425 609.618 235.145 608 245.5C572.975 241.142 548.664 271.716 503 342.5C477.93 384.037 464.596 404.472 448.5 410.5C438.761 414.655 397.35 399.557 304.5 362.5C318.78 352.15 332.943 350.287 364.5 351C405.329 353.241 424.598 346.596 454.5 325Z" fill="#FF4252"/>
<defs>
<filter id="filter0_d_217_85" x="206" y="248" width="228" height="55" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="6"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.254902 0 0 0 0 0.207843 0 0 0 0 0.341176 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_217_85"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_217_85" result="shape"/>
</filter>
<linearGradient id="paint0_linear_217_85" x1="573.842" y1="492" x2="136" y2="614" gradientUnits="userSpaceOnUse">
<stop stop-color="#FECDC7"/>
<stop offset="0.850489" stop-color="#FFFBFB"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint1_linear_217_85" x1="230" y1="62" x2="329.5" y2="62" gradientUnits="userSpaceOnUse">
<stop stop-color="#D9DCDA"/>
<stop offset="1" stop-color="#ABAFC0"/>
</linearGradient>
<linearGradient id="paint2_linear_217_85" x1="113" y1="62" x2="226.292" y2="62" gradientUnits="userSpaceOnUse">
<stop stop-color="#FEFFF8"/>
<stop offset="1" stop-color="#E3E5DB"/>
</linearGradient>
<linearGradient id="paint3_linear_217_85" x1="109" y1="52" x2="-2.36904e-06" y2="50.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFFFF4"/>
<stop offset="1" stop-color="#FFFEF7"/>
</linearGradient>
<linearGradient id="paint4_linear_217_85" x1="434" y1="36" x2="576" y2="37.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFCCD4"/>
<stop offset="1" stop-color="#FDF6F6"/>
</linearGradient>
<linearGradient id="paint5_linear_217_85" x1="1" y1="455" x2="450.5" y2="236" gradientUnits="userSpaceOnUse">
<stop offset="0.516749" stop-color="#FFCDC5"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint6_linear_217_85" x1="353" y1="67.5" x2="-1.17483e-05" y2="225.5" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="#FFD0C9"/>
</linearGradient>
<linearGradient id="paint7_linear_217_85" x1="79.5" y1="365" x2="361" y2="220.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#FEEAE8"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint8_linear_217_85" x1="1" y1="514" x2="452" y2="323.5" gradientUnits="userSpaceOnUse">
<stop offset="0.678431" stop-color="#413557"/>
<stop offset="1" stop-color="#765C73"/>
</linearGradient>
<linearGradient id="paint9_linear_217_85" x1="319.5" y1="361" x2="328" y2="361" gradientUnits="userSpaceOnUse">
<stop stop-color="#FDF8FC"/>
<stop offset="1" stop-color="#D2CDBE" stop-opacity="0.84"/>
</linearGradient>
<linearGradient id="paint10_linear_217_85" x1="209" y1="272" x2="431" y2="272" gradientUnits="userSpaceOnUse">
<stop offset="0.696875" stop-color="#9396CA"/>
<stop offset="1" stop-color="#CBC8D7"/>
</linearGradient>
</defs>
</svg>
				</div>
			) : (
				<Link to="/" className="btn btn-light">
					Go Back
				</Link>
			)}
			<h1>Latest products</h1>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant="danger">{error}</Message>
			) : (
				<>
					<Row>
						{products.map((product) => (
							<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
								<Product product={product} />
							</Col>
						))}
					</Row>
					<Paginate
						pages={pages}
						page={page}
						keyword={keyword ? keyword : ""}
					/>
				</>
			)}
			
		</>
	);
};

export default HomeScreen;
