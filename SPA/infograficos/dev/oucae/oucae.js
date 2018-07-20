new Vue({
	el: '#app',
	data: {
		tootltipsData:[
			{ 	// 0
				title: "CA", 
				text: 'Coeficiente de Aproveitamento',
				style: {
					left: undefined,
					top: undefined
				}, 
				clicked: false
			},
			{	// 1
				title: "TO", 
				text: 'Taxa de Ocupação',
				style: {
					left: undefined,
					top: undefined
				},
				clicked: false
			},
			{	// 2
				title: "Gabarito", 
				text: 'É a dimensão vertical medida desde a cota de soleira até ao ponto mais alto do edifício',
				style: {
					left: undefined,
					top: undefined
				},
				clicked: false
			}

		]
	},
	components: { tooltipbox },
	mixins: 	[ tooltipbox_event_methods ],
	computed:{
		imgUrl(){ return template_url + '/SPA/infograficos/dist/images/oucae.jpg' }
	},
	template:`
		<div id="g-Opera_esUrbanas_AguaEspraiada-box" class="ai2html ai2html-box-v5">
		<tooltipbox :attr="tootltipsData[0]" @reset="tipReset"></tooltipbox>
		<tooltipbox :attr="tootltipsData[1]" @reset="tipReset"></tooltipbox>
		<tooltipbox :attr="tootltipsData[2]" @reset="tipReset"></tooltipbox>

			<div id="g-Opera_esUrbanas_AguaEspraiada-Prancheta_1" class="g-artboard" data-aspect-ratio="0.196" data-min-width="960">
				<img id="g-Opera_esUrbanas_AguaEspraiada-Prancheta_1-img" class="g-aiImg" :src="imgUrl"/>
				<div id="g-ai0-1" class="app g-Camada_1 g-aiAbs g-aiPointText" style="top:1.9944%;margin-top:-8.6px;left:50.4316%;width:118px;">
					<p class="g-pstyle0">SETOR BERRINI</p>
				</div>
				<div id="g-ai0-2" class="app g-Camada_1 g-aiAbs g-aiPointText" style="top:3.4049%;margin-top:-8.6px;left:4.8372%;width:209px;">
					<p class="g-pstyle0">SETOR MARGINAL PINHEIROS</p>
				</div>
				<div id="g-ai0-3" class="g-Camada_1 g-aiAbs g-aiPointText" style="top:4.8358%;margin-top:-8.6px;left:65.9958%;width:134px;">
					<p class="g-pstyle0">SETOR BROOKLIN</p>
				</div>
				<div id="g-ai0-4" class="g-Camada_1 g-aiAbs g-aiPointText" style="top:8.1064%;margin-top:-8.6px;left:31.2911%;width:170px;">
					<p class="g-pstyle0">SETOR CHUCRI ZAIDAN</p>
				</div>
				<div id="g-ai0-5" class="g-Camada_1 g-aiAbs g-aiPointText" style="top:8.1064%;margin-top:-8.6px;left:78.5218%;width:145px;">
					<p class="g-pstyle0">SETOR JABAQUARA</p>
				</div>
				<div id="g-ai0-6" class="g-Camada_1 g-aiAbs g-aiPointText" style="top:10.5447%;margin-top:-8.8px;left:46.5626%;width:182px;">
					<p class="g-pstyle0">SETOR AMERICANÓPOLIS</p>
				</div>
				<div id="g-ai0-7" class="g-Camada_1 g-aiAbs" style="top:13.3279%;left:1.2735%;width:14.8958%;">
					<p class="g-pstyle1">SETORES</p>
				</div>
				<div id="g-ai0-8" class="g-Camada_1 g-aiAbs" style="top:13.3279%;left:17.6816%;width:15.4167%;">
					<p class="g-pstyle1"> MARGINAL PINHEIROS</p>
				</div>
				<div id="g-ai0-9" class="g-Camada_1 g-aiAbs" style="top:13.3279%;left:34.6709%;width:14.8958%;">
					<p class="g-pstyle1">BERRINI</p>
				</div>
				<div id="g-ai0-10" class="g-Camada_1 g-aiAbs" style="top:13.3279%;left:51.1981%;width:14.6875%;">
					<p class="g-pstyle1">JABAQUARA</p>
				</div>
				<div id="g-ai0-11" class="g-Camada_1 g-aiAbs" style="top:13.3279%;left:67.9637%;width:14.7917%;">
					<p class="g-pstyle1"> BROOKLIN</p>
				</div>
				<div id="g-ai0-12" class="g-Camada_1 g-aiAbs" style="top:13.3279%;left:84.393%;width:13.8542%;">
					<p class="g-pstyle1">CHUCRI ZAIDAN</p>
				</div>
				<div id="g-ai0-13" class="g-Camada_1 g-aiAbs" style="top:14.35%;left:1.2735%;width:15.2083%;">
					<p>Especificações</p>
				</div>
				<div id="g-ai0-14" class="g-Camada_1 g-aiAbs" style="top:14.3908%;left:84.393%;width:15.2083%;">
					<p class="g-pstyle2"> Art. 5&ordm;, Inciso V</p>
				</div>
				<div id="g-ai0-15" class="g-Camada_1 g-aiAbs" style="top:14.4317%;left:17.6816%;width:15.5208%;">
					<p class="g-pstyle2">Art. 5&ordm;, Inciso IV</p>
				</div>
				<div id="g-ai0-16" class="g-Camada_1 g-aiAbs" style="top:14.4317%;left:34.6709%;width:15.2083%;">
					<p class="g-pstyle2">Art. 5&ordm;, Inciso III</p>
				</div>
				<div id="g-ai0-17" class="g-Camada_1 g-aiAbs" style="top:14.4317%;left:51.1981%;width:15.2083%;">
					<p class="g-pstyle2"> Art. 5&ordm;, Inciso I</p>
				</div>
				<div id="g-ai0-18" class="g-Camada_1 g-aiAbs" style="top:14.4317%;left:67.9637%;width:15.2083%;">
					<p class="g-pstyle2"> Art. 5&ordm;, Inciso II</p>
				</div>
				<div id="g-ai0-19" class="g-Camada_1 g-aiAbs" style="top:15.372%;left:1.2735%;width:15.2083%;">
					<p>Coeficiente de aproveitamento (CA)</p>
				</div>
				<div id="g-ai0-20" class="g-Camada_1 g-aiAbs" style="top:15.4947%;left:17.6816%;width:14.4792%;">
					<p class="g-pstyle2">4</p>
				</div>
				<div id="g-ai0-21" class="g-Camada_1 g-aiAbs" style="top:15.4947%;left:34.6709%;width:14.2708%;">
					<p class="g-pstyle2">4</p>
				</div>
				<div id="g-ai0-22" class="g-Camada_1 g-aiAbs" style="top:15.4947%;left:51.1981%;width:14.2708%;">
					<p class="g-pstyle2">4</p>
				</div>
				<div id="g-ai0-23" class="g-Camada_1 g-aiAbs" style="top:15.4947%;left:67.9637%;width:14.2708%;">
					<p class="g-pstyle2">4</p>
				</div>
				<div id="g-ai0-24" class="g-Camada_1 g-aiAbs" style="top:15.4947%;left:84.393%;width:14.2708%;">
					<p class="g-pstyle2">4</p>
				</div>
				<div id="g-ai0-25" class="g-Camada_1 g-aiAbs" style="top:16.435%;left:1.2735%;width:15.2083%;">
					<p>Taxa de Ocupação (TO)</p>
				</div>
				<div id="g-ai0-26" class="g-Camada_1 g-aiAbs" style="top:16.5576%;left:17.6816%;width:14.4792%;">
					<p class="g-pstyle2">0,5</p>
				</div>
				<div id="g-ai0-27" class="g-Camada_1 g-aiAbs" style="top:16.5576%;left:34.6709%;width:14.2708%;">
					<p class="g-pstyle2">0,5</p>
				</div>
				<div id="g-ai0-28" class="g-Camada_1 g-aiAbs" style="top:16.5576%;left:51.1981%;width:14.2708%;">
					<p class="g-pstyle2">0,5</p>
				</div>
				<div id="g-ai0-29" class="g-Camada_1 g-aiAbs" style="top:16.5576%;left:67.9637%;width:14.2708%;">
					<p class="g-pstyle2">0,5</p>
				</div>
				<div id="g-ai0-30" class="g-Camada_1 g-aiAbs" style="top:16.5576%;left:84.393%;width:14.2708%;">
					<p class="g-pstyle2">0,5</p>
				</div>
				<div id="g-ai0-31" class="g-Camada_1 g-aiAbs" style="top:17.7433%;left:1.2735%;width:15.2083%;">
					<p>Gabarito</p>
				</div>
				<div id="g-ai0-32" class="g-Camada_1 g-aiAbs" style="top:17.7433%;left:17.6816%;width:14.4792%;">
					<p class="g-pstyle2">Sem limites</p>
				</div>
				<div id="g-ai0-33" class="g-Camada_1 g-aiAbs" style="top:17.7433%;left:34.6709%;width:14.2708%;">
					<p class="g-pstyle2">Sem limites</p>
				</div>
				<div id="g-ai0-34" class="g-Camada_1 g-aiAbs" style="top:17.7433%;left:51.1981%;width:14.2708%;">
					<p class="g-pstyle2">Sem limites</p>
				</div>
				<div id="g-ai0-35" class="g-Camada_1 g-aiAbs" style="top:17.7433%;left:67.9637%;width:14.2708%;">
					<p class="g-pstyle2">Sem limites</p>
				</div>
				<div id="g-ai0-36" class="g-Camada_1 g-aiAbs" style="top:17.7433%;left:84.393%;width:14.2708%;">
					<p class="g-pstyle2">Sem limites</p>
				</div>
				<div id="g-ai0-37" class="g-Camada_1 g-aiAbs" style="top:18.704%;left:1.2735%;width:15.2083%;">
					<p>Lote mínimo</p>
				</div>
				<div id="g-ai0-38" class="g-Camada_1 g-aiAbs" style="top:18.7244%;left:17.6816%;width:14.4792%;">
					<p class="g-pstyle2">1000m&sup2; </p>
				</div>
				<div id="g-ai0-39" class="g-Camada_1 g-aiAbs" style="top:18.7244%;left:34.6709%;width:14.2708%;">
					<p class="g-pstyle2">1000m&sup2; </p>
				</div>
				<div id="g-ai0-40" class="g-Camada_1 g-aiAbs" style="top:18.7244%;left:51.1981%;width:14.2708%;">
					<p class="g-pstyle2">1000m&sup2; </p>
				</div>
				<div id="g-ai0-41" class="g-Camada_1 g-aiAbs" style="top:18.7244%;left:67.9637%;width:14.2708%;">
					<p class="g-pstyle2">1000m&sup2; </p>
				</div>
				<div id="g-ai0-42" class="g-Camada_1 g-aiAbs" style="top:18.7244%;left:84.393%;width:14.2708%;">
					<p class="g-pstyle2">1000m&sup2; </p>
				</div>
				<div id="g-ai0-43" class="g-Camada_1 g-aiAbs" style="top:19.8896%;left:17.6816%;width:14.4792%;">
					<p class="g-pstyle2">16m&sup2;</p>
				</div>
				<div id="g-ai0-44" class="g-Camada_1 g-aiAbs" style="top:19.8896%;left:34.6709%;width:14.2708%;">
					<p class="g-pstyle2">16m&sup2;</p>
				</div>
				<div id="g-ai0-45" class="g-Camada_1 g-aiAbs" style="top:19.8896%;left:51.1981%;width:14.2708%;">
					<p class="g-pstyle2">16m&sup2;</p>
				</div>
				<div id="g-ai0-46" class="g-Camada_1 g-aiAbs" style="top:19.8896%;left:67.9637%;width:14.2708%;">
					<p class="g-pstyle2">16m&sup2;</p>
				</div>
				<div id="g-ai0-47" class="g-Camada_1 g-aiAbs" style="top:19.8896%;left:84.393%;width:14.2708%;">
					<p class="g-pstyle2">16m&sup2;</p>
				</div>
				<div id="g-ai0-48" class="g-Camada_1 g-aiAbs" style="top:19.8896%;left:1.2735%;width:15.2083%;">
					<p>Frente mínima</p>
				</div>
				<div id="g-ai0-49" class="g-Camada_1 g-aiAbs" style="top:20.973%;left:17.6816%;width:14.4792%;">
					<p class="g-pstyle2">2m (conforme Art. 17)</p>
				</div>
				<div id="g-ai0-50" class="g-Camada_1 g-aiAbs" style="top:20.9526%;left:1.2735%;width:15.2083%;">
					<p>Doação de calçada</p>
				</div>
				<div id="g-ai0-51" class="g-Camada_1 g-aiAbs" style="top:20.973%;left:34.6709%;width:14.2708%;">
					<p class="g-pstyle2">2m (conforme Art. 17)</p>
				</div>
				<div id="g-ai0-52" class="g-Camada_1 g-aiAbs" style="top:20.973%;left:51.1981%;width:14.2708%;">
					<p class="g-pstyle2">2m (conforme Art. 17)</p>
				</div>
				<div id="g-ai0-53" class="g-Camada_1 g-aiAbs" style="top:20.973%;left:67.9637%;width:14.2708%;">
					<p class="g-pstyle2">2m (conforme Art. 17)</p>
				</div>
				<div id="g-ai0-54" class="g-Camada_1 g-aiAbs" style="top:20.973%;left:84.393%;width:14.2708%;">
					<p class="g-pstyle2">2m (conforme Art. 17)</p>
				</div>
				<div id="g-ai0-55" class="g-Camada_1 g-aiAbs" style="top:21.9951%;left:17.6816%;width:14.4792%;">
					<p class="g-pstyle2">Frente e Fundo 5m</p>
					<p class="g-pstyle2">Lateral = 3m</p>
				</div>
				<div id="g-ai0-56" class="g-Camada_1 g-aiAbs" style="top:21.9951%;left:34.6709%;width:14.2708%;">
					<p class="g-pstyle2">Frente e Fundo 5m</p>
					<p class="g-pstyle2">Lateral = 3m</p>
				</div>
				<div id="g-ai0-57" class="g-Camada_1 g-aiAbs" style="top:21.9951%;left:51.1981%;width:14.2708%;">
					<p class="g-pstyle2">Frente e Fundo 5m</p>
					<p class="g-pstyle2">Lateral = 3m</p>
				</div>
				<div id="g-ai0-58" class="g-Camada_1 g-aiAbs" style="top:21.9951%;left:67.9637%;width:14.2708%;">
					<p class="g-pstyle2">Frente e Fundo 5m</p>
					<p class="g-pstyle2">Lateral = 3m</p>
				</div>
				<div id="g-ai0-59" class="g-Camada_1 g-aiAbs" style="top:21.9951%;left:84.393%;width:14.2708%;">
					<p class="g-pstyle2">Frente e Fundo 5m</p>
					<p class="g-pstyle2">Lateral = 3m</p>
				</div>
				<div id="g-ai0-60" class="g-Camada_1 g-aiAbs" style="top:22.0155%;left:1.2735%;width:15.2083%;">
					<p>Recuos mínimos</p>
				</div>
				<div id="g-ai0-61" class="g-Camada_1 g-aiAbs" style="top:23.4464%;left:1.25%;width:9.7917%;">
					<p>Usos</p>
				</div>
				<div id="g-ai0-62" class="g-Camada_1 g-aiAbs" style="top:24.1006%;left:1.1458%;width:15.8333%;">
					<p class="g-pstyle1">SETOR MARGINAL PINHEIROS</p>
				</div>
				<div id="g-ai0-63" class="g-Camada_1 g-aiAbs" style="top:24.1415%;left:19.375%;width:16.4583%;">
					<p class="g-pstyle1">SETOR BERRINI</p>
				</div>
				<div id="g-ai0-64" class="g-Camada_1 g-aiAbs" style="top:24.1415%;left:38.6458%;width:18.0208%;">
					<p class="g-pstyle1">SETOR  JABAQUARA</p>
				</div>
				<div id="g-ai0-65" class="g-Camada_1 g-aiAbs" style="top:24.1415%;left:58.3116%;width:21.3542%;">
					<p class="g-pstyle1">SETOR  BROOKLIN</p>
				</div>
				<div id="g-ai0-66" class="g-Camada_1 g-aiAbs" style="top:24.1415%;left:82.1906%;width:16.4583%;">
					<p class="g-pstyle1">SETOR  CHUCRI ZAIDAN</p>
				</div>
				<div id="g-ai0-67" class="g-Camada_1 g-aiAbs" style="top:25.1022%;left:1.1458%;width:15.8333%;">
					<p class="g-pstyle2">R1, R2, R3, C1, C2, E1, E2, E3, S1 e S2</p>
				</div>
				<div id="g-ai0-68" class="g-Camada_1 g-aiAbs" style="top:25.1022%;left:19.375%;width:16.4583%;">
					<p class="g-pstyle2">R1, R2, R3, C1, C2, C3 E1, E2, E3, I1, S1, S2 e S3, </p>
					<p class="g-pstyle2">exceto boates e casas noturnas</p>
				</div>
				<div id="g-ai0-69" class="g-Camada_1 g-aiAbs" style="top:25.1022%;left:38.6458%;width:17.9167%;">
					<p class="g-pstyle2">R1, R2, R3, C1, C2, E1, E2, E3, I1, S1 e S2, </p>
					<p class="g-pstyle2">exceto boates e casas noturnas</p>
				</div>
				<div id="g-ai0-70" class="g-Camada_1 g-aiAbs" style="top:25.1022%;left:58.3116%;width:21.3542%;">
					<p class="g-pstyle2">R1, R2, R3, C1, C2, E1, S1 e S2, exceto boates, casas noturnas, C2.3, S2.8, S2.9, </p>
					<p class="g-pstyle2">motéis, auto-cines, boliches, diversões eletrônicas, drive-in, jogos, &ldquo;kart indoor&rdquo;, &ldquo;paintball&rdquo;, salões de festas, bailes e &ldquo;buffets&rdquo;  </p>
				</div>
				<div id="g-ai0-71" class="g-Camada_1 g-aiAbs" style="top:25.0818%;left:82.1906%;width:16.4583%;">
					<p class="g-pstyle3">R1, R2, R3, C1, C2, E1, E2, E3, S1 E S2</p>
				</div>
				<div id="g-ai0-72" class="g-Camada_1 g-aiAbs" style="top:28.1684%;left:1.3143%;width:25.5208%;">
					<p class="g-pstyle4">SETOR AMERICANÓPOLIS</p>
					<p class="g-pstyle2">Especificações: Art. 5&ordm;, Inciso VI</p>
				</div>
				<div id="g-ai0-73" class="g-Camada_1 g-aiAbs" style="top:28.2706%;left:38.6458%;width:61.5625%;">
					<p class="g-pstyle2">Índices e Parâmetros da Legislação vigente  | LPUOS 16.402/2016</p>
				</div>
				<div id="g-ai0-74" class="g-Camada_1 g-aiAbs g-aiPointText" style="top:29.9442%;margin-top:-12.9px;left:0%;width:319px;">
					<p class="g-pstyle5"><span class="g-cstyle0">ZONEAMENTO </span>(LEI 16.402/2016)</p>
				</div>
				<div id="g-ai0-75" class="g-Camada_1 g-aiAbs" style="top:30.4579%;left:61.4627%;width:38.75%;">
					<p class="g-pstyle6">ZC |  Zona Centralidade</p>
					<p class="g-pstyle6">ZM | Zona Mista</p>
					<p class="g-pstyle6">ZER 1 | Zona Exclusivamente Residencial 1</p>
					<p class="g-pstyle6">ZEIS 2 | Zona Especial de Interesse Social 2</p>
					<p class="g-pstyle6">ZEIS 1 | Zona Especial de Interesse Social 1</p>
					<p class="g-pstyle6">ZEIS 3 | Zona Especial de Interesse Social 3</p>
					<p class="g-pstyle6">ZE<span class="g-cstyle1">P</span>AM | Zona Especial de Preservação Ambiental</p>
				</div>
				<div id="g-ai0-76" class="g-Camada_1 g-aiAbs g-aiPointText" style="top:40.149%;margin-top:-13.1px;left:0%;width:226px;">
					<p class="g-pstyle7">RESUMO LEGISLAÇÃO</p>
				</div>
				<div id="g-ai0-77" class="g-Camada_1 g-aiAbs" style="top:40.5969%;left:0%;width:50.9375%;">
					<p class="g-pstyle8">LEIS</p>
					<p class="g-pstyle9"><a href="http://www.prefeitura.sp.gov.br/cidade/secretarias/urbanismo/sp_urbanismo/operacoes_urbanas/agua_espraiada/index.php?p=19602">LEI N&ordm; 13.260/2001 (vigente)</a> </p>
					<p class="g-pstyle10"><a href="http://www.prefeitura.sp.gov.br/cidade/secretarias/urbanismo/sp_urbanismo/operacoes_urbanas/agua_espraiada/index.php?p=30994">LEI N&ordm; 15.416/2011 (substitui os artigos 3&ordm;, 22&ordm;, 25&ordm; e 28&ordm;)</a></p>
					<p class="g-pstyle10"><a href="http://www.prefeitura.sp.gov.br/cidade/secretarias/urbanismo/sp_urbanismo/operacoes_urbanas/faria_lima/index.php?p=36684">LEI N&deg; 15.519/2011 (substitui os artigos 1&ordm;, 8&ordm;, 2&ordm;, 3&ordm;, 4&ordm;, 5&ordm; e 6&ordm;)</a></p>
				</div>
				<div id="g-ai0-78" class="g-Camada_1 g-aiAbs" style="top:40.5969%;left:56.0417%;width:43.9583%;">
					<p class="g-pstyle8">DECRETOS</p>
					<p class="g-pstyle10"><a href="http://www.prefeitura.sp.gov.br/cidade/secretarias/upload/desenvolvimento_urbano/sp_urbanismo/arquivos/ouae/decreto_45726_2005.pdf"> 45.726/2005; 45.817/2005;</a></p>
					<p class="g-pstyle9"><a href="http://www.prefeitura.sp.gov.br/cidade/secretarias/upload/desenvolvimento_urbano/sp_urbanismo/arquivos/ouae/decreto_45817_2005.pdf"> 53.364/2012 - Anexo I - Cálculo da Contrapartida</a></p>
					<p class="g-pstyle10"><a href="http://www.prefeitura.sp.gov.br/cidade/secretarias/upload/desenvolvimento_urbano/sp_urbanismo/arquivos/oufl/Decreto_56635_remuneracao_oucae_oucfg.pdf">56.635/2015,</a></p>
					<p>&nbsp;</p>
				</div>
				<div id="g-ai0-79" class="g-Camada_1 g-aiAbs g-aiPointText" style="top:44.3802%;margin-top:-13.1px;left:0%;width:481px;">
					<p class="g-pstyle7">BENEFÍCIOS E DIRETRIZES URBANÍSTICAS <span class="g-cstyle2">(ART. 5)</span></p>
				</div>
				<div id="g-ai0-80" class="g-Camada_1 g-aiAbs g-aiPointText" style="top:45.1594%;margin-top:-10.2px;left:35.0546%;width:272px;">
					<p class="g-pstyle11">Median<span class="g-cstyle3">t</span>e <span class="g-cstyle4">p</span>agamen<span class="g-cstyle3">t</span>o em CE<span class="g-cstyle1">P</span><span class="g-cstyle5">A</span>Cs</p>
				</div>
				<div id="g-ai0-81" class="g-Camada_1 g-aiAbs g-aiPointText" style="top:45.1594%;margin-top:-10.2px;left:67.6263%;width:188px;">
					<p class="g-pstyle11">Condições de Adesão </p>
				</div>
				<div id="g-ai0-82" class="g-Camada_1 g-aiAbs" style="top:44.8078%;left:0%;width:31.9792%;">
					<p class="g-pstyle12">* Especificações por setores (Art. 5)</p>
				</div>
				<div id="g-ai0-83" class="g-Camada_1 g-aiAbs" style="top:46.5863%;left:94.4683%;margin-left:-53px;width:11.0417%;">
					<p class="g-pstyle13">D<span class="g-cstyle5">O</span><span class="g-cstyle6">A</span>Ç<span class="g-cstyle6">Ã</span>O </p>
					<p class="g-pstyle13">DE </p>
					<p class="g-pstyle13">CA<span class="g-cstyle7">L</span>ÇA<span class="g-cstyle5">D</span>AS<span class="g-cstyle8"> </span></p>
				</div>
				<div id="g-ai0-84" class="g-Camada_1 g-aiAbs" style="top:46.8316%;left:50.1365%;margin-left:-55px;width:11.4583%;">
					<p class="g-pstyle13">MU<span class="g-cstyle5">D</span>.</p>
					<p class="g-pstyle13">USO* </p>
				</div>
				<div id="g-ai0-85" class="g-Camada_1 g-aiAbs" style="top:46.8316%;left:64.8622%;margin-left:-53.5px;width:11.1458%;">
					<p class="g-pstyle13"><span class="g-cstyle7">LO</span>TE</p>
					<p class="g-pstyle13">mínimo</p>
				</div>
				<div id="g-ai0-86" class="g-Camada_1 g-aiAbs" style="top:46.9542%;left:79.6563%;margin-left:-53px;width:11.0417%;">
					<p class="g-pstyle14">RECUOS</p>
				</div>
				<div id="g-ai0-87" class="g-Camada_1 g-aiAbs" style="top:46.9542%;left:35.2237%;margin-left:-53px;width:11.0417%;">
					<p class="g-pstyle13"><a @click="tip(2, $event)">Gabarito</a></p>
				</div>
				<div id="g-ai0-88" class="g-Camada_1 g-aiAbs" style="top:47.036%;left:5.7313%;margin-left:-53.5px;width:11.1458%;">
					<p class="g-pstyle13"><a @click="tip(0, $event)">CA = 4*</a></p>
				</div>
				<div id="g-ai0-89" class="g-Camada_1 g-aiAbs" style="top:47.036%;left:20.5437%;margin-left:-55px;width:11.4583%;">
					<p class="g-pstyle13"><a @click="tip(1, $event)"><span class="g-cstyle9">T</span>O = <span class="g-cstyle10">0</span>,5*</a></p>
				</div>
				<div id="g-ai0-90" class="g-Camada_1 g-aiAbs" style="top:49.2437%;left:64.4844%;margin-left:-46px;width:9.5833%;">
					<p class="g-pstyle15">1000m&sup2; ou </p>
					<p class="g-pstyle15">2000m&sup2;</p>
				</div>
				<div id="g-ai0-91" class="g-Camada_1 g-aiAbs g-aiPointText" style="top:53.2067%;margin-top:-12.9px;left:0%;width:331px;">
					<p class="g-pstyle7">INCENTIVOS DA LEI <span class="g-cstyle2">(ART. 16 e 17)</span></p>
				</div>
				<div id="g-ai0-92" class="g-Camada_1 g-aiAbs" style="top:53.9043%;left:55.8854%;width:44.1667%;">
					<p class="g-pstyle10">ART. 17 - DOAÇÃO DE CALÇADA</p>
					<p class="g-pstyle12">II <span class="g-cstyle11">- </span>Os proprietários de imóveis contidos no perímetro desta Operação Urbana Consorciada deverão doar ao Município a faixa destinada a alargamento de calçada, recebendo como incentivo o acréscimo do dobro da área doada à área remanescente do imóvel, para fins de aplicação dos índices e parâmetros urbanísticos, respeitado o coeficiente de aproveitamento máximo do Setor que contiver o lote (Art. 17)</p>
				</div>
				<div id="g-ai0-93" class="g-Camada_1 g-aiAbs" style="top:53.9043%;left:0%;width:44.1667%;">
					<p class="g-pstyle10">ART. 16 - REMEMBRAMENTO DE LOTES</p>
					<p class="g-pstyle12">Ia - Aos lotes resultantes de remembramento de outros lotes com área inferior a 2.000 m&sup2;, que atingirem área superior a 2.500 m&sup2;, será concedida, de forma gratuita, área adicional de construção computável equivalente a 10% da área do lote resultante do remembramento, respeitado o coeficiente de aproveitamento máximo do Setor que contiver o lote remembrado (Art. 16, Inciso I)</p>
					<p class="g-pstyle12">Ib - Aos lotes resultantes de remembramento de outros lotes com área inferior a 2.000 m&sup2;, que atingirem área superior a 5.000 m&sup2;, será concedida, de forma gratuita, área adicional de construção computável equivalente a 20% da área do lote resultante do remembramento, respeitado o coeficiente de aproveitamento máximo do Setor que contiver o lote remembrado (Art. 16, Inciso II)</p>
				</div>
				<div id="g-ai0-94" class="g-Camada_1 g-aiAbs g-aiPointText" style="top:60.553%;margin-top:-15.3px;left:0%;width:371px;">
					<p class="g-pstyle16">PROCEDIMENTOS PARA ADESÃO</p>
				</div>
				<div id="g-ai0-95" class="g-Camada_1 g-aiAbs g-aiPointText" style="top:61.6858%;margin-top:-12.7px;left:56.3466%;width:130px;">
					<p class="g-pstyle17">Fluxograma</p>
				</div>
				<div id="g-ai0-96" class="g-Camada_1 g-aiAbs g-aiPointText" style="top:61.6966%;margin-top:-10.2px;left:3.0348%;width:145px;">
					<p class="g-pstyle18">Tipos de Adesão</p>
				</div>
				<div id="g-ai0-97" class="g-Camada_1 g-aiAbs g-aiPointText" style="top:63.0562%;margin-top:-18.7px;left:27.3174%;width:37px;">
					<p class="g-pstyle19">1</p>
				</div>
				<div id="g-ai0-98" class="g-Camada_1 g-aiAbs g-aiPointText" style="top:63.0767%;margin-top:-18.7px;left:59.305%;width:38px;">
					<p class="g-pstyle19">3</p>
				</div>
				<div id="g-ai0-99" class="g-Camada_1 g-aiAbs g-aiPointText" style="top:63.0767%;margin-top:-18.7px;left:76.4233%;width:39px;">
					<p class="g-pstyle19">4</p>
				</div>
				<div id="g-ai0-100" class="g-Camada_1 g-aiAbs g-aiPointText" style="top:63.0767%;margin-top:-18.7px;left:92.223%;width:39px;">
					<p class="g-pstyle19">5</p>
				</div>
				<div id="g-ai0-101" class="g-Camada_1 g-aiAbs g-aiPointText" style="top:63.0971%;margin-top:-18.7px;left:42.7555%;width:39px;">
					<p class="g-pstyle19">2</p>
				</div>
				<div id="g-ai0-102" class="g-Camada_1 g-aiAbs g-aiPointText" style="top:63.4545%;margin-top:-10.2px;left:5.3815%;width:100px;">
					<p class="g-pstyle20">Voluntária</p>
				</div>
				<div id="g-ai0-103" class="g-Camada_1 g-aiAbs" style="top:63.6141%;left:43.8262%;margin-left:-41px;width:8.5417%;">
					<p class="g-pstyle21">Análises: documentos e ﬁnanceiro</p>
				</div>
				<div id="g-ai0-104" class="g-Camada_1 g-aiAbs" style="top:63.6345%;left:60.0966%;margin-left:-36px;width:7.5%;">
					<p class="g-pstyle21">Análise Urbana </p>
				</div>
				<div id="g-ai0-105" class="g-Camada_1 g-aiAbs" style="top:63.6549%;left:28.3333%;margin-left:-39.5px;width:8.2292%;">
					<p class="g-pstyle21">Entrada no Protocolo </p>
				</div>
				<div id="g-ai0-106" class="g-Camada_1 g-aiAbs" style="top:63.6549%;left:77.8333%;margin-left:-35.5px;width:7.3958%;">
					<p class="g-pstyle21">Análise Jurídica </p>
				</div>
				<div id="g-ai0-107" class="g-Camada_1 g-aiAbs" style="top:63.6549%;left:93.2701%;margin-left:-43.5px;width:9.0625%;">
					<p class="g-pstyle21">Emissão da Certidão </p>
				</div>
				<div id="g-ai0-108" class="g-Camada_1 g-aiAbs g-aiPointText" style="top:66.1053%;margin-top:-12.9px;left:60.0342%;width:214px;">
					<p class="g-pstyle7">TAC VILA CORDEIRO</p>
				</div>
				<div id="g-ai0-109" class="g-Camada_1 g-aiAbs g-aiPointText" style="top:66.13%;margin-top:-13.1px;left:0.4167%;width:262px;">
					<p class="g-pstyle7">EQUIVALÊNCIA DE CEPAC</p>
				</div>
				<div id="g-ai0-110" class="g-Camada_1 g-aiAbs" style="top:67.13%;left:35.531%;margin-left:-183px;width:38.125%;">
					<p class="g-pstyle13">1 (um) certificado equivale a:</p>
				</div>
				<div id="g-ai0-111" class="g-Camada_1 g-aiAbs" style="top:67.13%;left:8.125%;margin-left:-61.5px;width:12.8125%;">
					<p class="g-pstyle13">Setores</p>
				</div>
				<div id="g-ai0-112" class="g-Camada_1 g-aiAbs" style="top:68.009%;left:23.4028%;margin-left:-67px;width:13.9583%;">
					<p class="g-pstyle22">Área adicional de construção (F1)</p>
				</div>
				<div id="g-ai0-113" class="g-Camada_1 g-aiAbs" style="top:68.009%;left:43.75%;margin-left:-101px;width:21.0417%;">
					<p class="g-pstyle22">Área de terreno referente à modificação de usos e parâmetros (F2)</p>
				</div>
				<div id="g-ai0-114" class="g-Camada_1 g-aiAbs" style="top:69.6034%;left:7.7083%;margin-left:-62px;width:12.9167%;">
					<p class="g-pstyle23">Jabaquara</p>
				</div>
				<div id="g-ai0-115" class="g-Camada_1 g-aiAbs" style="top:69.6034%;left:23.559%;margin-left:-68.5px;width:14.2708%;">
					<p class="g-pstyle23">3m&sup2;</p>
				</div>
				<div id="g-ai0-116" class="g-Camada_1 g-aiAbs" style="top:69.6034%;left:43.7044%;margin-left:-104.5px;width:21.7708%;">
					<p class="g-pstyle23">2m&sup2;</p>
				</div>
				<div id="g-ai0-117" class="g-Camada_1 g-aiAbs" style="top:70.4415%;left:7.7868%;margin-left:-62px;width:12.9167%;">
					<p class="g-pstyle23">Brooklin</p>
				</div>
				<div id="g-ai0-118" class="g-Camada_1 g-aiAbs" style="top:70.4415%;left:23.6374%;margin-left:-68.5px;width:14.2708%;">
					<p class="g-pstyle23">1m&sup2;</p>
				</div>
				<div id="g-ai0-119" class="g-Camada_1 g-aiAbs" style="top:70.4415%;left:43.7828%;margin-left:-104.5px;width:21.7708%;">
					<p class="g-pstyle23">1m&sup2;</p>
				</div>
				<div id="g-ai0-120" class="g-Camada_1 g-aiAbs" style="top:71.2796%;left:7.8652%;margin-left:-62px;width:12.9167%;">
					<p class="g-pstyle23">Berrini</p>
				</div>
				<div id="g-ai0-121" class="g-Camada_1 g-aiAbs" style="top:71.2796%;left:23.7159%;margin-left:-68.5px;width:14.2708%;">
					<p class="g-pstyle23">1m&sup2;</p>
				</div>
				<div id="g-ai0-122" class="g-Camada_1 g-aiAbs" style="top:71.2796%;left:43.8612%;margin-left:-104.5px;width:21.7708%;">
					<p class="g-pstyle23">2m&sup2;</p>
				</div>
				<div id="g-ai0-123" class="g-Camada_1 g-aiAbs" style="top:72.1177%;left:7.9436%;margin-left:-62px;width:12.9167%;">
					<p class="g-pstyle23">Marginal Pinheiros</p>
				</div>
				<div id="g-ai0-124" class="g-Camada_1 g-aiAbs" style="top:72.1177%;left:23.7943%;margin-left:-68.5px;width:14.2708%;">
					<p class="g-pstyle23">2m&sup2;</p>
				</div>
				<div id="g-ai0-125" class="g-Camada_1 g-aiAbs" style="top:72.1177%;left:43.9397%;margin-left:-104.5px;width:21.7708%;">
					<p class="g-pstyle23">2m&sup2;</p>
				</div>
				<div id="g-ai0-126" class="g-Camada_1 g-aiAbs g-aiPointText" style="top:72.7447%;margin-top:-12.7px;left:61.5669%;width:380px;">
					<p class="g-pstyle24" align="center"><a href="http://www.prefeitura.sp.gov.br/cidade/secretarias/upload/desenvolvimento_urbano/sp_urbanismo/arquivos/cepac/oucae_prospecto.pdf">Prospecto da Operação Urbana Consorciada (pdf)</a></p>
				</div>
				<div id="g-ai0-127" class="g-Camada_1 g-aiAbs" style="top:72.9558%;left:8.0221%;margin-left:-62px;width:12.9167%;">
					<p class="g-pstyle23">Chucri Zaidan</p>
				</div>
				<div id="g-ai0-128" class="g-Camada_1 g-aiAbs" style="top:72.9558%;left:23.8727%;margin-left:-68.5px;width:14.2708%;">
					<p class="g-pstyle23">1m&sup2;</p>
				</div>
				<div id="g-ai0-129" class="g-Camada_1 g-aiAbs" style="top:72.9558%;left:44.0181%;margin-left:-104.5px;width:21.7708%;">
					<p class="g-pstyle23">2m&sup2;</p>
				</div>
				<div id="g-ai0-130" class="g-Camada_1 g-aiAbs g-aiPointText" style="top:75.5331%;margin-top:-13.1px;left:0.4167%;width:315px;">
					<p class="g-pstyle7">CÁLCULO DA CONTRAPARTIDA - <a href="http://www.prefeitura.sp.gov.br/cidade/secretarias/upload/desenvolvimento_urbano/sp_urbanismo/arquivos/oufl/Decreto_56635_remuneracao_oucae_oucfg.pdf">53.364/2012 - Anexo I - Cálculo da Contrapartida</a></p>
				</div>
				<div id="g-ai0-131" class="g-Camada_1 g-aiAbs g-aiPointText" style="top:76.6598%;margin-top:-10.2px;left:0.8241%;width:147px;">
					<p class="g-pstyle20">1. AUMENTO CA</p>
				</div>
				<div id="g-ai0-132" class="g-Camada_1 g-aiAbs g-aiPointText" style="top:77.6001%;margin-top:-10.2px;left:74.1888%;width:253px;">
					<p class="g-pstyle11"><span class="g-cstyle6">A</span>CA=(A<span class="g-cstyle12">t</span>o x Cp<span class="g-cstyle7">r</span>oj) - (A<span class="g-cstyle3">t</span>o x CB)</p>
				</div>
				<div id="g-ai0-133" class="g-Camada_1 g-aiAbs g-aiPointText" style="top:77.6614%;margin-top:-10.2px;left:0.1042%;width:188px;">
					<p class="g-pstyle18"><span class="g-cstyle1">P</span>asso 1 - Cálculo <span class="g-cstyle6">A</span>CA</p>
				</div>
				<div id="g-ai0-134" class="g-Camada_1 g-aiAbs g-aiPointText" style="top:78.9492%;margin-top:-10.2px;left:0.1042%;width:238px;">
					<p class="g-pstyle18">Passo 2 - Cálculo Incentivos</p>
				</div>
				<div id="g-ai0-135" class="g-Camada_1 g-aiAbs g-aiPointText" style="top:78.9977%;margin-top:-11.6px;left:38.1232%;margin-left:-55px;width:110px;">
					<p class="g-pstyle25">INCENTIVO I1</p>
				</div>
				<div id="g-ai0-136" class="g-Camada_1 g-aiAbs g-aiPointText" style="top:79.4065%;margin-top:-18.6px;left:0.1042%;width:313px;">
					<p class="g-pstyle26">Incisos I e II do Art. 16 e Art. 17 da lei 13.260/2001</p>
				</div>
				<div id="g-ai0-137" class="g-Camada_1 g-aiAbs" style="top:79.4767%;left:31.875%;width:38.5417%;">
					<p class="g-pstyle27">Se lotes com área inferior a 2000m&sup2; remembrados originarem área superior a 2500m&sup2;:</p>
				</div>
				<div id="g-ai0-138" class="g-Camada_1 g-aiAbs g-aiPointText" style="top:79.8557%;margin-top:-10.5px;left:75.0641%;width:235px;">
					<p class="g-pstyle11">Ia = 10:100 x Área Rememb.</p>
				</div>
				<div id="g-ai0-139" class="g-Camada_1 g-aiAbs" style="top:80.7236%;left:31.875%;width:38.5417%;">
					<p class="g-pstyle27">Se lotes com área inferior a 2000m&sup2; remembrados originarem área superior a 5000m&sup2;:</p>
				</div>
				<div id="g-ai0-140" class="g-Camada_1 g-aiAbs g-aiPointText" style="top:81.1435%;margin-top:-10.5px;left:75.064%;width:236px;">
					<p class="g-pstyle11">Ib = 20:100 x Área Rememb.</p>
				</div>
				<div id="g-ai0-141" class="g-Camada_1 g-aiAbs g-aiPointText" style="top:82.6363%;margin-top:-11.6px;left:38.0386%;margin-left:-55.5px;width:111px;">
					<p class="g-pstyle25">INCENTIVO I2</p>
				</div>
				<div id="g-ai0-142" class="g-Camada_1 g-aiAbs" style="top:83.1153%;left:31.6667%;width:24.2708%;">
					<p class="g-pstyle27">Doação de faixa para alargamento de calçadas:</p>
				</div>
				<div id="g-ai0-143" class="g-Camada_1 g-aiAbs g-aiPointText" style="top:83.3646%;margin-top:-10.2px;left:75.064%;width:116px;">
					<p class="g-pstyle11">I2 = Atdc x 2</p>
				</div>
				<div id="g-ai0-144" class="g-Camada_1 g-aiAbs g-aiPointText" style="top:84.9795%;margin-top:-10.2px;left:0.1042%;width:226px;">
					<p class="g-pstyle18">Passo 3 - Quantidade Final</p>
				</div>
				<div id="g-ai0-145" class="g-Camada_1 g-aiAbs g-aiPointText" style="top:85.1226%;margin-top:-10.2px;left:76.6656%;width:211px;">
					<p class="g-pstyle11">Qad = {Aca - (I1 + I2)}: F1</p>
				</div>
				<div id="g-ai0-146" class="g-Camada_1 g-aiAbs" style="top:86.529%;left:31.6667%;width:28.9583%;">
					<p class="g-pstyle27">Cálculo da área do terreno referente:</p>
					<p class="g-pstyle27">Atrmp = Ato - (Atdc + Atdmv)</p>
				</div>
				<div id="g-ai0-147" class="g-Camada_1 g-aiAbs g-aiPointText" style="top:86.9819%;margin-top:-20.2px;left:0.8006%;width:217px;">
					<p class="g-pstyle20">2. MODIFICAÇÃO DE USO</p>
					<p class="g-pstyle20">E PARÂMETROS  </p>
				</div>
				<div id="g-ai0-148" class="g-Camada_1 g-aiAbs g-aiPointText" style="top:87.0032%;margin-top:-10.2px;left:75.8401%;width:158px;">
					<p class="g-pstyle11">Qmp = Atrmp : F2</p>
				</div>
				<div id="g-ai0-149" class="g-Camada_1 g-aiAbs g-aiPointText" style="top:89.0184%;margin-top:-11.8px;left:75.8401%;width:162px;">
					<p class="g-pstyle28">Qt = Qad + Qmp</p>
				</div>
				<div id="g-ai0-150" class="g-Camada_1 g-aiAbs g-aiPointText" style="top:89.0678%;margin-top:-10.2px;left:0.8241%;width:174px;">
					<p class="g-pstyle20">3. TOTAL DE CEPAC</p>
				</div>
				<div id="g-ai0-151" class="g-Camada_1 g-aiAbs g-aiPointText" style="top:91.0235%;margin-top:-12.9px;left:0.3125%;width:376px;">
					<p class="g-pstyle7">PLANO CHUCRI ZAIDAN <span class="g-cstyle2">(PL 722/2015)</span></p>
				</div>
				<div id="g-ai0-152" class="g-Camada_1 g-aiAbs" style="top:91.5576%;left:53.5417%;width:46.5625%;">
					<p class="g-pstyle29">O Projeto de Lei 722/2015, que aprova o Plano urbanístico complementar do Setor Chucri Zaidan da OUC Água Espraiada, foi enviado pela Prefeitura à Câmara Municipal e aguarda votação.</p>
				</div>
				<div id="g-ai0-153" class="g-Camada_1 g-aiAbs g-aiPointText" style="top:98.8464%;margin-top:-8.6px;left:55.0942%;width:197px;">
					<p class="g-pstyle30">Melhoramento viário previsto</p>
				</div>
				<div id="g-ai0-154" class="g-Camada_1 g-aiAbs g-aiPointText" style="top:99.2757%;margin-top:-8.6px;left:55.1467%;width:161px;">
					<p class="g-pstyle30">Perímetro Plano Chucri</p>
				</div>
				<div id="g-ai0-155" class="g-Camada_1 g-aiAbs g-aiPointText" style="top:99.6873%;margin-top:-8.7px;left:55.1467%;width:208px;">
					<p class="g-pstyle30">Perímetro OUC Água Espraiada</p>
				</div>
			</div>
		</div>
	`
})