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
				<div className="hero test">
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
			<div className="home-footer">
				<div className="main-footer-txt"> 
				  <div className="footer-txt">Subscribe To Newsletter</div>
				  <form className="footer-input">
					<input
						name="q"
						placeholder="Enter Your Email"
						type="text"
						className="email-input"
					/>
					<button type="submit" className="sub-btn">
						Subscribe
					</button>
				</form>
				</div>
				<svg width="1058" height="615" viewBox="0 0 1058 615" fill="none" xmlns="http://www.w3.org/2000/svg" className="main-footer-svg">
<rect y="132" width="1058" height="67" fill="url(#paint0_linear_363_33)"/>
<rect y="199" width="1058" height="136" fill="url(#paint1_linear_363_33)"/>
<rect y="335" width="1058" height="280" fill="url(#paint2_linear_363_33)"/>
<path d="M343.5 181L357 121H459.5L475 181H343.5Z" fill="url(#paint3_linear_363_33)"/>
<path d="M253.5 529.5L283.5 502.5L280.5 490.5L241.5 506L224 509L181 511.5L201 506L187.5 503L134.498 515.231C131.575 515.906 129.9 518.985 130.921 521.805L137.767 540.714C138.719 543.344 137.33 546.242 134.684 547.147L105.267 557.211C103.063 557.965 101.671 560.143 101.913 562.46L103.361 576.363C103.69 579.525 106.847 581.58 109.871 580.603L169 561.5L230.5 540L253.5 529.5Z" fill="url(#paint4_linear_363_33)"/>
<path d="M188 503L278 486.5C320.605 493.316 339.727 496.41 371 501.5L357.5 503C337.874 501.771 318.664 498.234 287.5 493L294 518H287.5L278 493L196.5 506.5L188 503Z" fill="#FEB8B8"/>
<path d="M277 489.5L275 476.5L286.5 475L283.5 491.5L277 489.5Z" fill="#FF657A"/>
<ellipse cx="197" cy="523.633" rx="25.1053" ry="7.36743" fill="#929BBC"/>
<path d="M192.974 521.33V445.814H197V522.481L192.974 521.33Z" fill="#1E123D"/>
<path d="M200.789 445.814H196.763V522.481L200.789 521.56V445.814Z" fill="url(#paint5_linear_363_33)"/>
<ellipse cx="196.764" cy="445.123" rx="4.02632" ry="2.07209" fill="#EFEFEF"/>
<g filter="url(#filter0_d_363_33)">
<ellipse cx="197" cy="443.281" rx="54" ry="11.2814" fill="url(#paint6_linear_363_33)" fill-opacity="0.9" shape-rendering="crispEdges"/>
</g>
<path d="M183 350V303C183 299.686 185.686 297 189 297H239.816C241.118 297 242.273 297.845 242.671 299.085C251.304 325.929 256.02 342.101 268.5 364C275.743 377.999 280.634 384.33 293 389C320.756 395.829 344.685 396.784 397.5 395C391.115 415.92 384.565 426.418 366.5 442.5C338.07 455.495 318.778 466.079 300.5 472.5C287.888 477.246 281.091 477.164 274.5 477C254.614 476.053 245.107 473.072 230 465C215.357 448.711 209.414 438.305 201 418.5C192.013 395.718 188.128 380.647 183 350Z" fill="#1E123D"/>
<path d="M326.5 414C297.907 414.084 276.385 413.301 275 417.5L315 436L370 432.5L385 415.5C364.458 412.817 350.892 413.179 326.5 414Z" fill="white"/>
<path d="M270.5 421.5C238.609 411.826 226.436 408.214 214 401.5C231.267 407.486 243.638 410.024 270.5 413L313.5 432L322.5 433.5C353.865 434.141 361.886 433.168 369.5 430.5C381.457 420.36 387.809 412.308 398.5 394L401.5 403.5C400.565 410.143 397.689 414.193 392.633 421.312L392.5 421.5C381.129 435.026 375.193 441.595 369.5 442C328.794 444.014 314.863 444.113 310 442L270.5 421.5Z" fill="#929BBC"/>
<path d="M845.002 422C886.078 414.387 917.68 404.191 975.502 385L985.002 388.5C909.245 426.794 865.769 446.584 786.502 479C742.393 481.988 718.58 477.618 689.502 381.5L760.002 356.5L776.002 359.5L746.502 376C771.478 372.063 786.183 369.666 817.502 364L876.502 368.5L746.502 406.5C780.879 417.255 799.978 423.49 845.002 422Z" fill="url(#paint7_linear_363_33)"/>
<path d="M714.669 381.023L721 344.5L980.5 357.5L983.5 388.5C976.467 389.229 974.551 380.913 971.5 364.5L944 369L944.113 369.954C945.921 385.173 946.97 393.996 948 409.5L944 411C941.207 403.678 938.696 391.855 934 369L780.5 359C778.866 362.658 777.895 366.032 776 375C774.623 373.999 774.319 368.882 774 357.5L729 350L720.241 382.115C720.105 382.616 719.608 382.929 719.098 382.836L715.476 382.177C714.936 382.079 714.576 381.564 714.669 381.023Z" fill="#20123C"/>
<path d="M691.5 261.5C682.089 260.421 679.391 261.626 679 267L691.5 314.5L1015.5 292L1017 239C1016.26 232.758 1015.29 229.256 1008.5 223C995.996 216.639 988.637 213.706 972.5 214L928.5 217.5C905.262 220.383 891.646 221.184 865.5 220L823.5 214C803.575 211.631 793.108 210.579 779 210.5C764.233 210.485 756.766 211.789 745.5 217.5C737.276 222.468 735.555 226.396 734 234L733 265.5C730.931 269.337 729.492 271.203 723 270.5C710.855 268.524 703.93 266.313 691.5 261.5Z" fill="#FF667A"/>
<path d="M734.106 289.763C716.116 298.116 706.606 303.277 698 310L707.5 328L726 335L788 348L861.5 352L913.5 348L948 333.5V292C899.204 287.695 874 285 830.5 283C798.617 280.781 779.022 279.583 755.759 283.027C748.247 284.139 740.994 286.565 734.106 289.763Z" fill="#FF9BA8"/>
<path d="M1012 321.5C1022.05 288.394 1019.34 269.746 1016 236.5C1015.26 250.146 1014.31 257.705 1008.5 270.5C1006.36 273.745 1004.58 275.909 1002.59 277.522C998.761 280.609 993.379 280.911 988.672 279.496C985.45 278.527 983.468 277.298 981 275.5C974.779 269.937 971.852 267.326 967 263C961.094 261.849 958.395 262.248 954.5 264.5C951.493 267.848 949.714 270.494 947.665 274.798C946.514 277.216 945.992 279.884 945.973 282.561C945.839 300.755 945.579 309.74 944.5 316C939.597 330.495 934.632 334.863 924.5 340.5C911.082 345.24 903.965 346.521 891.5 348C859.052 347.868 841.541 347.533 814 345.5C791.144 343.258 777.996 341.135 754 336C729.704 332.046 718.8 329.283 708.5 322.5C696.593 308.06 690.308 291.672 679 264.5C675.365 279.728 675.226 288.27 679 303.5C684.404 320.088 688.284 329.182 701 344C727.829 351.614 746.066 355.562 789.5 361.5C825.302 366.849 848.659 368.512 891.5 371C919.488 371.707 935.077 371.524 962.5 369C980.052 365.151 986.696 362.633 993 357.5C1001.98 348.593 1006.02 340.33 1012 321.5Z" fill="#FF4252"/>
<path d="M733 276C726.221 278.671 722.487 280.331 716.5 285L722.5 320C726.057 322 728.294 322.248 733 320L733.018 319.991C740.976 315.834 745.443 313.501 752.5 306C754.718 303.628 755.103 301.802 754 297.5C750.661 286.682 747.551 283.56 742 278C738.836 275.013 736.806 274.94 733 276Z" fill="white"/>
<path d="M717.461 316.757L716.5 286C726.962 305.053 731.242 314.749 724.27 319.714C723.506 320.258 722.498 320.272 721.644 319.883L718.633 318.515C717.939 318.2 717.485 317.518 717.461 316.757Z" fill="#FFDAB6"/>
<path d="M438.5 90C449.37 99.6089 456.041 104.653 459.5 119.5C446.357 128.346 432.899 131.265 406 131C382.649 129.846 371.207 127.93 356 120.5C358.502 110.328 361.876 104.526 372 94C385.906 84.5791 393.285 82.0675 406 80.5C419.853 80.7716 426.7 83.6436 438.5 90Z" fill="#FFDAB6"/>
<path d="M234.513 297.891C245.786 179.735 257.176 124.639 289.513 52.8906C308.957 24.9016 321.323 12.4475 342 14C358.609 12.6778 369.048 21.3039 389 48L406 80.5M406 80.5C419.853 80.7716 426.7 83.6436 438.5 90C449.37 99.6089 456.041 104.653 459.5 119.5C446.357 128.346 432.899 131.265 406 131C382.649 129.846 371.207 127.93 356 120.5C358.502 110.328 361.876 104.526 372 94C385.906 84.5791 393.285 82.0676 406 80.5Z" stroke="#FFDAB6" stroke-width="2"/>
<ellipse cx="707" cy="510.5" rx="282" ry="62.5" fill="white"/>
<path d="M947 511C947 513.876 945.528 516.801 942.47 519.753C939.411 522.705 934.845 525.601 928.874 528.388C916.937 533.962 899.6 539.007 878.098 543.253C835.109 551.742 775.677 557 710 557C644.323 557 584.891 551.742 541.902 543.253C520.4 539.007 503.063 533.962 491.126 528.388C485.155 525.601 480.589 522.705 477.53 519.753C474.472 516.801 473 513.876 473 511C473 508.124 474.472 505.199 477.53 502.247C480.589 499.295 485.155 496.399 491.126 493.612C503.063 488.038 520.4 482.993 541.902 478.747C584.891 470.258 644.323 465 710 465C775.677 465 835.109 470.258 878.098 478.747C899.6 482.993 916.937 488.038 928.874 493.612C934.845 496.399 939.411 499.295 942.47 502.247C945.528 505.199 947 508.124 947 511Z" fill="white" stroke="url(#paint8_linear_363_33)" stroke-width="2"/>
<defs>
<filter id="filter0_d_363_33" x="143" y="432" width="108" height="28.5627" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="6"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.254902 0 0 0 0 0.207843 0 0 0 0 0.341176 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_363_33"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_363_33" result="shape"/>
</filter>
<linearGradient id="paint0_linear_363_33" x1="1058" y1="166" x2="529" y2="166" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFF7F5"/>
<stop offset="1" stop-color="#FFF7F5" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint1_linear_363_33" x1="1058" y1="267" x2="-4.25926e-06" y2="267" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFE7E3"/>
<stop offset="1" stop-color="#FFE7E3" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint2_linear_363_33" x1="1058" y1="461" x2="-1.64525e-05" y2="475" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFCCC7"/>
<stop offset="1" stop-color="#FFFDFE"/>
</linearGradient>
<linearGradient id="paint3_linear_363_33" x1="409.25" y1="121" x2="409.25" y2="181" gradientUnits="userSpaceOnUse">
<stop stop-color="#FEF6F4"/>
<stop offset="1" stop-color="#FEF6F4" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint4_linear_363_33" x1="236.5" y1="498.5" x2="111.5" y2="567.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFCFC9"/>
<stop offset="0.466666" stop-color="#FFEFED"/>
<stop offset="0.753124" stop-color="#FFEFED"/>
<stop offset="0.956249" stop-color="#FFF8F9"/>
</linearGradient>
<linearGradient id="paint5_linear_363_33" x1="196.763" y1="484.033" x2="200.789" y2="484.033" gradientUnits="userSpaceOnUse">
<stop stop-color="#FDF8FC"/>
<stop offset="1" stop-color="#D2CDBE" stop-opacity="0.84"/>
</linearGradient>
<linearGradient id="paint6_linear_363_33" x1="144.421" y1="443.051" x2="249.579" y2="443.051" gradientUnits="userSpaceOnUse">
<stop offset="0.696875" stop-color="#9396CA"/>
<stop offset="1" stop-color="#CBC8D7"/>
</linearGradient>
<linearGradient id="paint7_linear_363_33" x1="893" y1="375" x2="772.5" y2="471.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#FDB8B7"/>
<stop offset="1" stop-color="#FFDBD7"/>
</linearGradient>
<linearGradient id="paint8_linear_363_33" x1="948" y1="511" x2="472" y2="511" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFD0C9"/>
<stop offset="1" stop-color="#FFD0C9" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>

			</div>
		</>
	);
};

export default HomeScreen;
