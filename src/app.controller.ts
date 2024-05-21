import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  /**
   * RUTAS SIN PARAMETROS ----------------------------
   * a continuacion tenemos la siguientes rutas que no 
   * necesitan parametros para redireccionar la ruta.
   * 
   * ejemplo: /home/caterories/lacteos
   */

  // ruta por defecto para la ruta que devuelve un string 
  @Get()
  getHome(): string {
    return "<h1>Hola Cristhian</h1>";
  }

  // ruta contacto sin usar "/" para redireccionar a la pagina contact
  @Get('contact')
  getContact(): string {
    return "<h1>Bievenido a mi contacto</h1>"
  }

  // ruta con el "/" para la ruta para demostrar que es opcional el "/"
  @Get('/about')
  getAbout():string {
    return "<h1>Bienvenido a sobre mi</h1>"
  }

  /**
   * RUTAS CON PARAMETROS ----------------------------
   * a continuacion veremos las rutas para el controaldor 
   * que si necesitan de parametros enviados juntamente en la ruta
   * o dentro de la misma url, asi como uno y varias rutas.
   */
  
  // rutas con parametros usando el objeto params o tambien puede ser nombrado param, 
  // y tener varios parametros almacenados dentro de objeto param.
  @Get('product/:productId')
  getProduct(@Param() params: any):string {
    return `<h1>El producto es ${params.productId}</h1>`;
  }

  // rutas con parametos especificando el parametro a usar, necesario para ser mas directo.
  @Get('products/:productId')
  getProducts(@Param('productId') productId: string):string {
    return `<h1>El producto es... ${productId}</h1>`;
  }

  // rutas con varios parametros especificados para luego usar los mismos.
  @Get('categories/:id/products/:productId')
  getCategory(@Param('productId') productId: string, @Param('id') id:string):string {
    return `<h1>La categoria es... ${id}, y el producto es... ${productId}</h1>`;
  }


  /**
   * RUTAS CON PARAMETROS DE TIPO QUERY ----------------------------
   * para este ejemplo tenemos parametros que son enviados en la misma URL
   * y que tambien nos sirven para obtener los parametros para trabajar.   
   * 
   * ejemplo: /home/caterories?lacteos&free
   */

  //ruta services con parameotros enviados en la URL como ser limit y offset 
  // especificados de manera general.
  @Get('services')
  getServices(@Query() params: any){
    const { limit, offset } = params;
    return  `services: limit=> ${limit} offset => ${offset}`
  }

  // la misma ruta solo que con la especificacion de las rutas.
  @Get('service')
  getService(@Query('limit') limit = 200, @Query('offset') offset: string){
    return  `service es: limit=> ${limit} offset => ${offset}`
  }

}
