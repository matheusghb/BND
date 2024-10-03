public static void main(String[] args) {
    Toolkit.getDefaultToolkit().addAWTEventListener(new Listener(), AWTEvent.MOUSE_EVENT_MASK);  
    JFrame frame = new JFrame();  
    frame.setDefaultCloseOperation(JFrame.HIDE_ON_CLOSE);  
    frame.setVisible(true);  
}

private static class Listener implements AWTEventListener {
    public void eventDispatched(AWTEvent event) {  
        System.out.print(MouseInfo.getPointerInfo().getLocation() + " | ");  
        System.out.println(event);
    }
}