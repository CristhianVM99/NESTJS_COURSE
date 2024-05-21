import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  /* RUTAS SIN PARAMETROS ----------------------------------------------------- */

  // ruta por defecto para la ruta /
  @Get()
  getHome(): string {
    return "<h1>Hola Cristhian</h1>";
  }

  // ruta contacto sin usar "/"
  @Get('contact')
  getContact(): string {
    return "<h1>Bievenido a mi contacto</h1>"
  }

  // ruta con el "/" para la ruta 
  @Get('/about')
  getAbout():string {
    return "<h1>Bienvenido a sobre mi</h1>"
  }

  /* RUTAS CON PARAMETROS ---------------------------------------------------------- */
  
  // rutas con parametros usando el objeto params.
  @Get('product/:productId')
  getProduct(@Param() params: any):string {
    return `<h1>El producto es ${params.productId}</h1>`;
  }

  // rutas con parametos especificando el parametro a usar.
  @Get('products/:productId')
  getProducts(@Param('productId') productId: string):string {
    return `<h1>El producto es... ${productId}</h1>`;
  }

  // rutas con varios parametros
  @Get('categories/:id/products/:productId')
  getCategory(@Param('productId') productId: string, @Param('id') id:string):string {
    return `<h1>La categoria es... ${id}, y el producto es... ${productId}</h1>`;
  }


  /* PARAMETOS TIPO QUERY ---------------------------------------------------------- */

  @Get('services')
  getServices(@Query() params: any){
    const { limit, offset } = params;
    return  `services: limit=> ${limit} offset => ${offset}`
  }

  @Get('service')
  getService(@Query('limit') limit = 200, @Query('offset') offset: string){
    return  `service es: limit=> ${limit} offset => ${offset}`
  }

}
