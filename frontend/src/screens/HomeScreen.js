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
					<svg
						className="main-hero-svg"
						width="609"
						height="634"
						viewBox="0 0 609 634"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M376.841 543.5C423.859 539.089 469.481 525.105 562.842 493L573.842 499.5L380.341 589C326.119 607.575 293.38 617.913 161.342 634C126.237 624.819 131.742 613.64 152.842 591C179.736 556.787 181.953 539.652 139.342 516.5L222.342 464L279.341 444.5L286.841 456L204.342 481.5L260.342 475.5L399.342 439L402.842 446.5L267.841 484L306.841 480.5V488L223.342 506.5C298.867 529.703 339.085 541.518 376.841 543.5Z"
							fill="url(#paint0_linear_217_85)"
						/>
						<rect x="333" width="101" height="337" fill="#929BBC" />
						<rect
							x="230"
							width="101"
							height="337"
							fill="url(#paint1_linear_217_85)"
						/>
						<rect
							x="113"
							width="115"
							height="337"
							fill="url(#paint2_linear_217_85)"
						/>
						<rect width="111" height="337" fill="url(#paint3_linear_217_85)" />
						<path
							d="M434 0H571C427.336 79.02 440.642 227.942 593.5 337H434V0Z"
							fill="url(#paint4_linear_217_85)"
						/>
						<rect x="331" width="3" height="337" fill="#585171" />
						<rect x="227" width="3" height="337" fill="#969AB8" />
						<rect x="111" width="3" height="337" fill="#929ABD" />
						<path
							d="M462.5 233.5L370 225L0.5 418V492L462.5 233.5Z"
							fill="url(#paint5_linear_217_85)"
						/>
						<path
							d="M355.5 214.5V70L247.5 118.5V271.5L355.5 214.5Z"
							fill="#FFBCBC"
						/>
						<path
							d="M123.5 174.5L250 118V270.5L123.5 333V174.5Z"
							fill="#FFB7B7"
						/>
						<path d="M0 229L126 173.5V332L0 396.5V229Z" fill="#FBB3B0" />
						<path
							d="M351.5 62.5L328.5 61L0 200V221.5L351.5 62.5Z"
							fill="white"
						/>
						<path
							d="M0 229L355.5 70.5L352 62L0 221V229Z"
							fill="url(#paint6_linear_217_85)"
						/>
						<path
							d="M75 356.5L355 215L370.5 225L83.5 374.5L75 356.5Z"
							fill="url(#paint7_linear_217_85)"
						/>
						<path
							d="M42.5 303.064C22.8592 305.586 14.1652 308.947 0 316.064V421.064C5.34485 423.186 8.0537 424.058 11 423.564C25.1509 420.66 33.7018 417.772 50.5 409.564C79.3921 393.053 90.0788 385.487 89 378.564C83.5209 343.427 76.9569 328.204 59 309.064C53.8588 304.941 51.0184 302.572 42.5 303.064Z"
							fill="white"
						/>
						<path
							d="M0 418.564V344.564L10 365.064C18.2887 392.646 17.6036 403.804 10 418.564C4.90563 421.192 2.61229 421.402 0 418.564Z"
							fill="#FF961A"
						/>
						<path d="M0 510V492L462.5 234V246.5L0 510Z" fill="#FBB3B0" />
						<path
							d="M448 255L0.5 511V603L448 321.5V255Z"
							fill="url(#paint8_linear_217_85)"
						/>
						<ellipse cx="320" cy="447" rx="53" ry="16" fill="#929BBC" />
						<path d="M311.5 442V278H320V444.5L311.5 442Z" fill="#1E123D" />
						<path
							d="M328 278H319.5V444.5L328 442.5V278Z"
							fill="url(#paint9_linear_217_85)"
						/>
						<ellipse cx="319.5" cy="276.5" rx="8.5" ry="4.5" fill="#EFEFEF" />
						<g filter="url(#filter0_d_217_85)">
							<ellipse
								cx="320"
								cy="272.5"
								rx="114"
								ry="24.5"
								fill="url(#paint10_linear_217_85)"
								fill-opacity="0.9"
								shape-rendering="crispEdges"
							/>
						</g>
						<path
							d="M393 442.743C394.87 432.614 396.613 426.406 400.5 414.743L537.999 379.5C539.891 379.174 549.626 404.369 576.499 498C571.475 499.483 568.972 499.443 564.999 498C559.323 484.143 555.607 474.693 547.499 453C536.013 422.893 529.47 409.891 517.499 396C474.527 399.645 450.72 403.501 409.999 421.5C406.792 433.969 404.727 440.094 399.499 446C396.714 446.216 396.032 444.909 393 442.743Z"
							fill="#413555"
						/>
						<path
							d="M301 486C316.403 430.059 325.436 403.126 343.5 376.5L446.5 409.5C453.69 417.087 461.993 439.348 491.5 541C487.484 543.626 485.021 544.253 480 543C467.087 509.49 459.858 490.584 446.5 461.5C434.414 437.894 426.918 424.89 384.5 411C364.346 404.44 354.211 402.432 343.5 409.5C337.027 416.367 333 424.015 325 446C320.255 465.702 316.815 475.267 309 489.5C305.446 489.229 303.72 488.422 301 486Z"
							fill="#1E123D"
						/>
						<path
							d="M425 310C440.372 308.295 450.659 309.074 470 311.5C463.673 331.441 446.849 333.122 402 325.5C410.264 318.123 415.118 314.384 425 310Z"
							fill="#FF961A"
						/>
						<path
							d="M413 322.5C374.487 331.076 358.454 337.736 335.5 351.5C394.869 359.312 422.554 355.763 455 325.5C436.623 321.571 426.995 320.317 413 322.5Z"
							fill="#FFBB74"
						/>
						<path
							d="M534 384.5C508.077 403.707 488.602 408.155 449.5 410.5C534.919 283.387 577.464 226.525 608.5 246C581.063 313.325 564.896 344.735 534 384.5Z"
							fill="#FE961A"
						/>
						<path
							d="M454.5 325C521.329 264.416 549.859 240.479 572.5 229.5C585.678 223.248 591.212 223.32 599.5 226.5C608.699 230.425 609.618 235.145 608 245.5C572.975 241.142 548.664 271.716 503 342.5C477.93 384.037 464.596 404.472 448.5 410.5C438.761 414.655 397.35 399.557 304.5 362.5C318.78 352.15 332.943 350.287 364.5 351C405.329 353.241 424.598 346.596 454.5 325Z"
							fill="#FF4252"
						/>
						<defs>
							<filter
								id="filter0_d_217_85"
								x="206"
								y="248"
								width="228"
								height="55"
								filterUnits="userSpaceOnUse"
								color-interpolation-filters="sRGB"
							>
								<feFlood flood-opacity="0" result="BackgroundImageFix" />
								<feColorMatrix
									in="SourceAlpha"
									type="matrix"
									values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
									result="hardAlpha"
								/>
								<feOffset dy="6" />
								<feComposite in2="hardAlpha" operator="out" />
								<feColorMatrix
									type="matrix"
									values="0 0 0 0 0.254902 0 0 0 0 0.207843 0 0 0 0 0.341176 0 0 0 1 0"
								/>
								<feBlend
									mode="normal"
									in2="BackgroundImageFix"
									result="effect1_dropShadow_217_85"
								/>
								<feBlend
									mode="normal"
									in="SourceGraphic"
									in2="effect1_dropShadow_217_85"
									result="shape"
								/>
							</filter>
							<linearGradient
								id="paint0_linear_217_85"
								x1="573.842"
								y1="492"
								x2="136"
								y2="614"
								gradientUnits="userSpaceOnUse"
							>
								<stop stop-color="#FECDC7" />
								<stop offset="0.850489" stop-color="#FFFBFB" />
								<stop offset="1" stop-color="white" />
							</linearGradient>
							<linearGradient
								id="paint1_linear_217_85"
								x1="230"
								y1="62"
								x2="329.5"
								y2="62"
								gradientUnits="userSpaceOnUse"
							>
								<stop stop-color="#D9DCDA" />
								<stop offset="1" stop-color="#ABAFC0" />
							</linearGradient>
							<linearGradient
								id="paint2_linear_217_85"
								x1="113"
								y1="62"
								x2="226.292"
								y2="62"
								gradientUnits="userSpaceOnUse"
							>
								<stop stop-color="#FEFFF8" />
								<stop offset="1" stop-color="#E3E5DB" />
							</linearGradient>
							<linearGradient
								id="paint3_linear_217_85"
								x1="109"
								y1="52"
								x2="-2.36904e-06"
								y2="50.5"
								gradientUnits="userSpaceOnUse"
							>
								<stop stop-color="#FFFFF4" />
								<stop offset="1" stop-color="#FFFEF7" />
							</linearGradient>
							<linearGradient
								id="paint4_linear_217_85"
								x1="434"
								y1="36"
								x2="576"
								y2="37.5"
								gradientUnits="userSpaceOnUse"
							>
								<stop stop-color="#FFCCD4" />
								<stop offset="1" stop-color="#FDF6F6" />
							</linearGradient>
							<linearGradient
								id="paint5_linear_217_85"
								x1="1"
								y1="455"
								x2="450.5"
								y2="236"
								gradientUnits="userSpaceOnUse"
							>
								<stop offset="0.516749" stop-color="#FFCDC5" />
								<stop offset="1" stop-color="white" />
							</linearGradient>
							<linearGradient
								id="paint6_linear_217_85"
								x1="353"
								y1="67.5"
								x2="-1.17483e-05"
								y2="225.5"
								gradientUnits="userSpaceOnUse"
							>
								<stop stop-color="white" />
								<stop offset="1" stop-color="#FFD0C9" />
							</linearGradient>
							<linearGradient
								id="paint7_linear_217_85"
								x1="79.5"
								y1="365"
								x2="361"
								y2="220.5"
								gradientUnits="userSpaceOnUse"
							>
								<stop stop-color="#FEEAE8" />
								<stop offset="1" stop-color="white" />
							</linearGradient>
							<linearGradient
								id="paint8_linear_217_85"
								x1="1"
								y1="514"
								x2="452"
								y2="323.5"
								gradientUnits="userSpaceOnUse"
							>
								<stop offset="0.678431" stop-color="#413557" />
								<stop offset="1" stop-color="#765C73" />
							</linearGradient>
							<linearGradient
								id="paint9_linear_217_85"
								x1="319.5"
								y1="361"
								x2="328"
								y2="361"
								gradientUnits="userSpaceOnUse"
							>
								<stop stop-color="#FDF8FC" />
								<stop offset="1" stop-color="#D2CDBE" stop-opacity="0.84" />
							</linearGradient>
							<linearGradient
								id="paint10_linear_217_85"
								x1="209"
								y1="272"
								x2="431"
								y2="272"
								gradientUnits="userSpaceOnUse"
							>
								<stop offset="0.696875" stop-color="#9396CA" />
								<stop offset="1" stop-color="#CBC8D7" />
							</linearGradient>
						</defs>
					</svg>

					<div className="hero-txt">
						<h1 className="hero-text">Designer Furniture Made For You</h1>
					</div>
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
					<Row className="main-padding">
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
			<div>
				<div className="main-footer-txt"> 
				  <div className="footer-txt">Subscribe To Newsletter</div>
				  <form className="footer-input">
					<input
						name="q"
						placeholder="Search Products..."
						type="text"
						className="search-input"
					/>
					<button type="submit" className="search-btn">
						Search
					</button>
				</form>
				</div>
				<svg
					className="main-footer-svg"
					width="752"
					height="603"
					viewBox="0 0 752 603"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<rect
						y="120"
						width="752"
						height="67"
						fill="url(#paint0_linear_365_34)"
					/>
					<rect
						y="187"
						width="752"
						height="136"
						fill="url(#paint1_linear_365_34)"
					/>
					<rect
						y="323"
						width="752"
						height="280"
						fill="url(#paint2_linear_365_34)"
					/>
					<path
						d="M539.002 410.437C580.078 402.824 611.68 392.628 669.502 373.437L679.002 376.937C603.245 415.231 559.769 435.021 480.502 467.437C436.393 470.425 412.58 466.055 383.502 369.937L454.002 344.937L470.002 347.937L440.502 364.437C465.478 360.5 480.183 358.103 511.502 352.437L570.502 356.937L440.502 394.937C474.879 405.692 493.978 411.927 539.002 410.437Z"
						fill="url(#paint3_linear_365_34)"
					/>
					<path
						d="M408.669 369.46L415 332.937L674.5 345.937L677.5 376.937C670.467 377.666 668.551 369.35 665.5 352.937L638 357.437L638.113 358.391C639.921 373.61 640.97 382.433 642 397.937L638 399.437C635.207 392.115 632.696 380.292 628 357.437L474.5 347.437C472.866 351.095 471.895 354.469 470 363.437C468.623 362.436 468.319 357.319 468 345.937L423 338.437L414.241 370.552C414.105 371.053 413.608 371.366 413.098 371.273L409.476 370.614C408.936 370.516 408.576 370.001 408.669 369.46Z"
						fill="#20123C"
					/>
					<path
						d="M385.5 249.937C376.089 248.858 373.391 250.063 373 255.437L385.5 302.937L709.5 280.437L711 227.437C710.256 221.195 709.287 217.693 702.5 211.437C689.996 205.076 682.637 202.143 666.5 202.437L622.5 205.937C599.262 208.82 585.646 209.621 559.5 208.437L517.5 202.437C497.575 200.068 487.108 199.016 473 198.937C458.233 198.922 450.766 200.226 439.5 205.937C431.276 210.905 429.555 214.833 428 222.437L427 253.937C424.931 257.774 423.492 259.64 417 258.937C404.855 256.961 397.93 254.75 385.5 249.937Z"
						fill="#FF667A"
					/>
					<path
						d="M428.106 278.2C410.116 286.553 400.606 291.714 392 298.437L401.5 316.437L420 323.437L482 336.437L555.5 340.437L607.5 336.437L642 321.937V280.437C593.204 276.132 568 273.437 524.5 271.437C492.617 269.218 473.022 268.02 449.759 271.464C442.247 272.576 434.994 275.002 428.106 278.2Z"
						fill="#FF9BA8"
					/>
					<path
						d="M706 309.937C716.055 276.831 713.344 258.183 710 224.937C709.264 238.583 708.309 246.142 702.5 258.937C700.359 262.182 698.585 264.346 696.586 265.959C692.761 269.046 687.379 269.348 682.672 267.933C679.45 266.964 677.468 265.735 675 263.937C668.779 258.374 665.852 255.763 661 251.437C655.094 250.286 652.395 250.685 648.5 252.937C645.493 256.285 643.714 258.931 641.665 263.235C640.514 265.653 639.992 268.321 639.973 270.998C639.839 289.192 639.579 298.177 638.5 304.437C633.597 318.932 628.632 323.3 618.5 328.937C605.082 333.677 597.965 334.958 585.5 336.437C553.052 336.305 535.541 335.97 508 333.937C485.144 331.695 471.996 329.572 448 324.437C423.704 320.483 412.8 317.72 402.5 310.937C390.593 296.497 384.308 280.109 373 252.937C369.365 268.165 369.226 276.707 373 291.937C378.404 308.525 382.284 317.619 395 332.437C421.829 340.051 440.066 343.999 483.5 349.937C519.302 355.286 542.659 356.949 585.5 359.437C613.488 360.144 629.077 359.961 656.5 357.437C674.052 353.588 680.696 351.07 687 345.937C695.98 337.031 700.023 328.767 706 309.937Z"
						fill="#FF4252"
					/>
					<path
						d="M427 264.437C420.221 267.108 416.487 268.768 410.5 273.437L416.5 308.437C420.057 310.437 422.294 310.685 427 308.437L427.018 308.428C434.976 304.271 439.443 301.938 446.5 294.437C448.718 292.065 449.103 290.239 448 285.937C444.661 275.119 441.551 271.997 436 266.437C432.836 263.45 430.806 263.377 427 264.437Z"
						fill="white"
					/>
					<path
						d="M411.461 305.194L410.5 274.437C420.962 293.49 425.242 303.186 418.27 308.151C417.506 308.695 416.498 308.709 415.644 308.32L412.633 306.952C411.939 306.637 411.485 305.955 411.461 305.194Z"
						fill="#FFDAB6"
					/>
					<path
						d="M283.229 180.437L296.729 120.437H399.229L414.729 180.437H283.229Z"
						fill="url(#paint4_linear_365_34)"
					/>
					<path
						d="M378.229 89.437C389.099 99.0459 395.77 104.09 399.229 118.937C386.086 127.783 372.628 130.702 345.729 130.437C322.378 129.283 310.936 127.367 295.729 119.937C298.231 109.765 301.605 103.963 311.729 93.437C325.635 84.0161 333.014 81.5046 345.729 79.937C359.582 80.2086 366.429 83.0806 378.229 89.437Z"
						fill="#FFDAB6"
					/>
					<path
						d="M174.242 297.328C185.515 179.172 196.905 124.076 229.242 52.3276C248.686 24.3387 261.052 11.8846 281.729 13.437C298.338 12.1148 308.777 20.7409 328.729 47.437L345.729 79.937M345.729 79.937C359.582 80.2086 366.429 83.0806 378.229 89.437C389.099 99.0459 395.77 104.09 399.229 118.937C386.086 127.783 372.628 130.702 345.729 130.437C322.378 129.283 310.936 127.367 295.729 119.937C298.231 109.765 301.605 103.963 311.729 93.437C325.635 84.0161 333.014 81.5046 345.729 79.937Z"
						stroke="#FFDAB6"
						stroke-width="2"
					/>
					<ellipse cx="459" cy="461.5" rx="282" ry="62.5" fill="white" />
					<path
						d="M699 462C699 464.876 697.528 467.801 694.47 470.753C691.411 473.705 686.845 476.601 680.874 479.388C668.937 484.962 651.6 490.007 630.098 494.253C587.109 502.742 527.677 508 462 508C396.323 508 336.891 502.742 293.902 494.253C272.4 490.007 255.063 484.962 243.126 479.388C237.155 476.601 232.589 473.705 229.53 470.753C226.472 467.801 225 464.876 225 462C225 459.124 226.472 456.199 229.53 453.247C232.589 450.295 237.155 447.399 243.126 444.612C255.063 439.038 272.4 433.993 293.902 429.747C336.891 421.258 396.323 416 462 416C527.677 416 587.109 421.258 630.098 429.747C651.6 433.993 668.937 439.038 680.874 444.612C686.845 447.399 691.411 450.295 694.47 453.247C697.528 456.199 699 459.124 699 462Z"
						fill="white"
						stroke="url(#paint5_linear_365_34)"
						stroke-width="2"
					/>
					<path
						d="M152 434.5L182 407.5L179 395.5L140 411L122.5 414L79.5 416.5L99.5 411L86 408L32.998 420.231C30.0748 420.906 28.3996 423.985 29.4209 426.805L36.2673 445.714C37.2192 448.344 35.83 451.242 33.1844 452.147L3.76716 462.211C1.56252 462.965 0.171097 465.143 0.412508 467.46L1.86077 481.363C2.19006 484.525 5.34662 486.58 8.37102 485.603L67.5 466.5L129 445L152 434.5Z"
						fill="url(#paint6_linear_365_34)"
					/>
					<path
						d="M86.5 408L176.5 391.5C219.105 398.316 238.227 401.41 269.5 406.5L256 408C236.374 406.771 217.164 403.234 186 398L192.5 423H186L176.5 398L95 411.5L86.5 408Z"
						fill="#FEB8B8"
					/>
					<path
						d="M175.5 394.5L173.5 381.5L185 380L182 396.5L175.5 394.5Z"
						fill="#FF657A"
					/>
					<path
						d="M81.5 255V208C81.5 204.686 84.1863 202 87.5 202H138.316C139.618 202 140.773 202.845 141.171 204.085C149.804 230.929 154.52 247.101 167 269C174.243 282.999 179.134 289.33 191.5 294C219.256 300.829 243.185 301.784 296 300C289.615 320.92 283.065 331.418 265 347.5C236.57 360.495 217.278 371.079 199 377.5C186.388 382.246 179.591 382.164 173 382C153.114 381.053 143.607 378.072 128.5 370C113.857 353.711 107.914 343.305 99.5 323.5C90.5132 300.718 86.628 285.647 81.5 255Z"
						fill="#1E123D"
					/>
					<path
						d="M225 319C196.407 319.084 174.885 318.301 173.5 322.5L213.5 341L268.5 337.5L283.5 320.5C262.958 317.817 249.392 318.179 225 319Z"
						fill="white"
					/>
					<path
						d="M169 326.5C137.109 316.826 124.936 313.214 112.5 306.5C129.767 312.486 142.138 315.024 169 318L212 337L221 338.5C252.365 339.141 260.386 338.168 268 335.5C279.957 325.36 286.309 317.308 297 299L300 308.5C299.065 315.143 296.189 319.193 291.133 326.312L291 326.5C279.629 340.026 273.693 346.595 268 347C227.294 349.014 213.363 349.113 208.5 347L169 326.5Z"
						fill="#929BBC"
					/>
					<ellipse
						cx="95.5003"
						cy="428.633"
						rx="25.1053"
						ry="7.36743"
						fill="#929BBC"
					/>
					<path
						d="M91.4736 426.33V350.814H95.4999V427.481L91.4736 426.33Z"
						fill="#1E123D"
					/>
					<path
						d="M99.2895 350.814H95.2632V427.481L99.2895 426.56V350.814Z"
						fill="url(#paint7_linear_365_34)"
					/>
					<ellipse
						cx="95.2636"
						cy="350.123"
						rx="4.02632"
						ry="2.07209"
						fill="#EFEFEF"
					/>
					<g filter="url(#filter0_d_365_34)">
						<ellipse
							cx="95.5"
							cy="348.281"
							rx="54"
							ry="11.2814"
							fill="url(#paint8_linear_365_34)"
							fill-opacity="0.9"
							shape-rendering="crispEdges"
						/>
					</g>
					<defs>
						<filter
							id="filter0_d_365_34"
							x="41.5"
							y="337"
							width="108"
							height="28.5627"
							filterUnits="userSpaceOnUse"
							color-interpolation-filters="sRGB"
						>
							<feFlood flood-opacity="0" result="BackgroundImageFix" />
							<feColorMatrix
								in="SourceAlpha"
								type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
								result="hardAlpha"
							/>
							<feOffset dy="6" />
							<feComposite in2="hardAlpha" operator="out" />
							<feColorMatrix
								type="matrix"
								values="0 0 0 0 0.254902 0 0 0 0 0.207843 0 0 0 0 0.341176 0 0 0 1 0"
							/>
							<feBlend
								mode="normal"
								in2="BackgroundImageFix"
								result="effect1_dropShadow_365_34"
							/>
							<feBlend
								mode="normal"
								in="SourceGraphic"
								in2="effect1_dropShadow_365_34"
								result="shape"
							/>
						</filter>
						<linearGradient
							id="paint0_linear_365_34"
							x1="752"
							y1="154"
							x2="376"
							y2="154"
							gradientUnits="userSpaceOnUse"
						>
							<stop stop-color="#FFF7F5" />
							<stop offset="1" stop-color="#FFF7F5" stop-opacity="0" />
						</linearGradient>
						<linearGradient
							id="paint1_linear_365_34"
							x1="752"
							y1="255"
							x2="-3.02738e-06"
							y2="255"
							gradientUnits="userSpaceOnUse"
						>
							<stop stop-color="#FFE7E3" />
							<stop offset="1" stop-color="#FFE7E3" stop-opacity="0" />
						</linearGradient>
						<linearGradient
							id="paint2_linear_365_34"
							x1="752"
							y1="449"
							x2="-0.0651588"
							y2="456.073"
							gradientUnits="userSpaceOnUse"
						>
							<stop stop-color="#FFCCC7" />
							<stop offset="1" stop-color="#FFFDFE" />
						</linearGradient>
						<linearGradient
							id="paint3_linear_365_34"
							x1="587"
							y1="363.437"
							x2="466.5"
							y2="459.937"
							gradientUnits="userSpaceOnUse"
						>
							<stop stop-color="#FDB8B7" />
							<stop offset="1" stop-color="#FFDBD7" />
						</linearGradient>
						<linearGradient
							id="paint4_linear_365_34"
							x1="348.979"
							y1="120.437"
							x2="348.979"
							y2="180.437"
							gradientUnits="userSpaceOnUse"
						>
							<stop stop-color="#FEF6F4" />
							<stop offset="1" stop-color="#FEF6F4" stop-opacity="0" />
						</linearGradient>
						<linearGradient
							id="paint5_linear_365_34"
							x1="700"
							y1="462"
							x2="224"
							y2="462"
							gradientUnits="userSpaceOnUse"
						>
							<stop stop-color="#FFD0C9" />
							<stop offset="1" stop-color="#FFD0C9" stop-opacity="0" />
						</linearGradient>
						<linearGradient
							id="paint6_linear_365_34"
							x1="135"
							y1="403.5"
							x2="10"
							y2="472.5"
							gradientUnits="userSpaceOnUse"
						>
							<stop stop-color="#FFCFC9" />
							<stop offset="0.466666" stop-color="#FFEFED" />
							<stop offset="0.753124" stop-color="#FFEFED" />
							<stop offset="0.956249" stop-color="#FFF8F9" />
						</linearGradient>
						<linearGradient
							id="paint7_linear_365_34"
							x1="95.2632"
							y1="389.033"
							x2="99.2895"
							y2="389.033"
							gradientUnits="userSpaceOnUse"
						>
							<stop stop-color="#FDF8FC" />
							<stop offset="1" stop-color="#D2CDBE" stop-opacity="0.84" />
						</linearGradient>
						<linearGradient
							id="paint8_linear_365_34"
							x1="42.9211"
							y1="348.051"
							x2="148.079"
							y2="348.051"
							gradientUnits="userSpaceOnUse"
						>
							<stop offset="0.696875" stop-color="#9396CA" />
							<stop offset="1" stop-color="#CBC8D7" />
						</linearGradient>
					</defs>
				</svg>
			</div>
		</>
	);
};

export default HomeScreen;
