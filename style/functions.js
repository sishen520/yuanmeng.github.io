/*
	����2.1�汾Ӧ���������ʱ�䲻׼ȷ�������ˣ���л���ѵĻ����������о���Щ������ҵ�ѧϰ����Ҫ�������ٴθ�л������
	���⣬�ҵı�̲����Ѿ����š�
	Deboy���ͣ�www.deboy.cn
	�ҵĲ���΢�ţ�deboyblog ��ӭ���ģ�����һ�����۱������~
	�ҵ�ҵ��QQ��915099705
	���ѧϰ��QQ��55631825 һ��ѧϰ��һ�����~
 */

// variables
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function() {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 75);
		});
		return this;
	};
})(jQuery);

function timeElapse(date){
	var current = Date();
	var date3 = (Date.parse(current) - Date.parse(date) + 2678400000) ;
	/*ʱ���ĺ�������
	  �����Һ�����һ�ѳ�����������ʲô��javascriptʱ���������ǵĻ���������
	*/
	//������������
	var days=Math.floor(date3/(24*3600*1000))
	//�����Сʱ��
	var leave1=date3%(24*3600*1000)    //����������ʣ��ĺ�����
	var hours=Math.floor(leave1/(3600*1000))
	//������������
	var leave2=leave1%(3600*1000)        //����Сʱ����ʣ��ĺ�����
	var minutes=Math.floor(leave2/(60*1000))
	//�����������
	var leave3=leave2%(60*1000)      //�����������ʣ��ĺ�����
	var seconds=Math.round(leave3/1000)
	var result = "<span class=\"digit\">" + days + "</span> �� <span class=\"digit\">" + hours + "</span> ʱ <span class=\"digit\">" + minutes + "</span> �� <span class=\"digit\">" + seconds + "</span> ��"; 
	$("#clock").html(result);
}