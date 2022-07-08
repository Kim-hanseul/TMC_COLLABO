export function Nav2() {
    
    return (
        <nav>
	<ul>
		<li><a href="#">홈</a></li>
		<li><a href="#">식단 관리</a>
			<ul>
				<li><a href="#">나의 식단 관리</a></li>
				<li><a href="#">식단 캘린더</a>
                    <ul>
						<li><a href="#">HTML</a></li>
						<li><a href="#">CSS</a></li>
					</ul>
                </li>
			</ul>
		</li>
		<li><a href="#">커뮤니티</a>
			<ul>
				<li><a href="#">Web Design</a></li>
				<li><a href="#">User Experience</a></li>
			</ul>
		</li>
		<li><a href="#">ABOUT PROJECT</a></li>
	</ul>
    <style jsx>{`
            nav {
            text-align:center;
            width: 100%;
            background: #bebebe;
            padding: 0;
            margin: 0;
            height: 60px;
            position:relative;
            }

            nav ul {
            background: #bebebe;
            list-style:none;
            padding:0 20px;
            margin: 0;
            height: 60px;
            }
            nav ul li {
            display: inline-block;
            }
            nav ul li a {
            color:#333333;
            display:block;
            padding:0px 40px;
            text-decoration:none;
            float: left;
            height: 60px;
            line-height: 60px;
            }
            nav ul li:hover {
            background: #333333;
            }
            nav ul li:hover > a{
                color:#FFFFFF;
            }
            nav ul li:hover > ul {
            display:block;
            }
            nav ul ul {
            background: #BEBEBE;
            padding:0;
            text-align: center;
            display:none;
            width: 100%;
            position: absolute;
            top: 60px;
            left: 0px;
            }
    `}</style>
</nav>
    )
}